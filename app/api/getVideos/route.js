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
      .max_results(50)
      .execute();

    // console.log("✅ Videos fetched from Cloudinary:", resources);

    // 🖼️ Add thumbnail URLs for each video
    const formattedResources = resources.map((v) => ({
      public_id: v.public_id,
      secure_url: v.secure_url,
      thumbnail_url: v.secure_url.replace(
        "/upload/",
        "/upload/so_2,f_jpg,w_400,h_250,c_fill/"
      ),
      created_at: v.created_at,
      duration: v.duration,
    }));

    return NextResponse.json({ resources: formattedResources });
  } catch (err) {
    // console.error("❌ Cloudinary fetch error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
