import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    // Fetch all videos regardless of folder
    const { resources } = await cloudinary.search
      .expression("resource_type:video") // no folder filter
      .sort_by("created_at", "desc")
      .max_results(50) // fetch up to 50 videos
      .execute();

    console.log("✅ Videos fetched from Cloudinary:", resources);

    return NextResponse.json({ resources });
  } catch (err) {
    console.error("❌ Cloudinary fetch error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
