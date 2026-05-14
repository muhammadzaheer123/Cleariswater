// import { NextRequest, NextResponse } from "next/server";
// import { ObjectId } from "mongodb";
// import { connectDB } from "@/lib/mongodb";

// const COLLECTION = "reviews";

// export async function GET() {
//   try {
//     const db = await connectDB();

//     const reviews = await db
//       .collection(COLLECTION)
//       .find({})
//       .sort({ ts: -1 })
//       .toArray();

//     return NextResponse.json(
//       {
//         ok: true,
//         reviews,
//       },
//       {
//         status: 200,
//       },
//     );
//   } catch (error) {
//     console.error("GET REVIEWS ERROR:", error);

//     return NextResponse.json(
//       {
//         ok: false,
//         error: "Failed to fetch reviews",
//       },
//       {
//         status: 500,
//       },
//     );
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const { name, role, text, rating, tag, ts } = body;

//     if (!name || !text || !rating || text.trim().length < 10) {
//       return NextResponse.json(
//         {
//           ok: false,
//           error: "Invalid review data",
//         },
//         {
//           status: 400,
//         },
//       );
//     }

//     const db = await connectDB();

//     const reviewData = {
//       name: name.trim(),
//       role: role?.trim() || "Clearis Customer",
//       text: text.trim(),
//       rating: Number(rating),
//       tag: tag || "QUALITY",
//       ts: ts || Date.now(),
//       createdAt: new Date(),
//     };

//     const result = await db.collection(COLLECTION).insertOne(reviewData);

//     return NextResponse.json(
//       {
//         ok: true,
//         message: "Review added successfully",
//         id: result.insertedId,
//       },
//       {
//         status: 201,
//       },
//     );
//   } catch (error) {
//     console.error("POST REVIEW ERROR:", error);

//     return NextResponse.json(
//       {
//         ok: false,
//         error: "Failed to add review",
//       },
//       {
//         status: 500,
//       },
//     );
//   }
// }

// export async function DELETE(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const { id } = body;

//     if (!id || !ObjectId.isValid(id)) {
//       return NextResponse.json(
//         {
//           ok: false,
//           error: "Invalid review ID",
//         },
//         {
//           status: 400,
//         },
//       );
//     }

//     const db = await connectDB();

//     const result = await db.collection(COLLECTION).deleteOne({
//       _id: new ObjectId(id),
//     });

//     if (result.deletedCount === 0) {
//       return NextResponse.json(
//         {
//           ok: false,
//           error: "Review not found",
//         },
//         {
//           status: 404,
//         },
//       );
//     }

//     return NextResponse.json(
//       {
//         ok: true,
//         message: "Review deleted successfully",
//       },
//       {
//         status: 200,
//       },
//     );
//   } catch (error) {
//     console.error("DELETE REVIEW ERROR:", error);

//     return NextResponse.json(
//       {
//         ok: false,
//         error: "Failed to delete review",
//       },
//       {
//         status: 500,
//       },
//     );
//   }
// }
