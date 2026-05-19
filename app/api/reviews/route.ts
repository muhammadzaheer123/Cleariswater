import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/app/lib/mongodb";

const DB = "clearis";
const COLL = "reviews";

// ── GET — fetch all reviews, newest first ──────────────────
export async function GET() {
  try {
    const client = await clientPromise;
    const col = client.db(DB).collection(COLL);

    const reviews = await col.find({}).sort({ ts: -1 }).limit(100).toArray();

    return NextResponse.json({
      ok: true,
      reviews: reviews.map((r) => ({
        ...r,
        _id: r._id.toString(),
      })),
    });
  } catch (err) {
    console.error("GET /api/reviews error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch" },
      { status: 500 },
    );
  }
}

// ── POST — save new review ─────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, role, text, rating, tag, ts } = body;

    // Basic validation
    if (!name?.trim() || !text?.trim() || text.trim().length < 10 || !rating) {
      return NextResponse.json(
        { ok: false, error: "Invalid data" },
        { status: 400 },
      );
    }

    const doc = {
      name: String(name).slice(0, 40).trim(),
      role: String(role || "Clearis Customer")
        .slice(0, 50)
        .trim(),
      text: String(text).slice(0, 300).trim(),
      rating: Math.min(5, Math.max(1, Number(rating))),
      tag: String(tag || "QUALITY"),
      ts: Number(ts) || Date.now(),
    };

    const client = await clientPromise;
    const col = client.db(DB).collection(COLL);
    const result = await col.insertOne(doc);

    return NextResponse.json({ ok: true, id: result.insertedId.toString() });
  } catch (err) {
    console.error("POST /api/reviews error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to save" },
      { status: 500 },
    );
  }
}
