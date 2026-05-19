import clientPromise from "@/app/lib/mongodb";

const DB = "clearis";
const COLL = "reviews";

export const dynamic = "force-dynamic";

// Server-Sent Events — pushes new reviews to all connected clients
export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: object) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      };

      // Send heartbeat immediately
      send({ type: "connected" });

      const client = await clientPromise;
      const col = client.db(DB).collection(COLL);

      // Watch for new inserts using Change Streams
      const pipeline = [{ $match: { operationType: "insert" } }];

      try {
        const changeStream = col.watch(pipeline, {
          fullDocument: "updateLookup",
        });

        changeStream.on("change", (change) => {
          if (change.operationType === "insert" && change.fullDocument) {
            send({
              type: "new_review",
              review: {
                ...change.fullDocument,
                _id: change.fullDocument._id.toString(),
              },
            });
          }
        });

        // Heartbeat every 25s to keep connection alive
        const heartbeat = setInterval(() => {
          try {
            send({ type: "ping" });
          } catch {
            clearInterval(heartbeat);
          }
        }, 25000);

        // Cleanup on client disconnect
        return () => {
          clearInterval(heartbeat);
          changeStream.close();
        };
      } catch {
        // MongoDB Atlas free tier doesn't support Change Streams on shared clusters
        // Fallback: poll every 5s
        let lastTs = Date.now();

        const poll = setInterval(async () => {
          try {
            const newDocs = await col
              .find({ ts: { $gt: lastTs } })
              .sort({ ts: 1 })
              .toArray();

            for (const doc of newDocs) {
              send({
                type: "new_review",
                review: { ...doc, _id: doc._id.toString() },
              });
              lastTs = Math.max(lastTs, doc.ts);
            }
          } catch {
            // silent
          }
        }, 5000);

        return () => clearInterval(poll);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
