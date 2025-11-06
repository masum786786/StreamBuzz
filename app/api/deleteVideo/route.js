import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const { public_id } = await req.json();

    if (!public_id) {
      return NextResponse.json({ error: "Missing public_id" }, { status: 400 });
    }

    await cloudinary.uploader.destroy(public_id, { resource_type: "video" });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Cloudinary delete error:", err.message);
    return NextResponse.json({ error: "Failed to delete video" }, { status: 500 });
  }
}
