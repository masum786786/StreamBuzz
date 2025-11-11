"use client";
import { useEffect } from "react";

export default function CloudinaryUploader({ onUpload }) {
  useEffect(() => {
    if (!window.cloudinary) {
      const script = document.createElement("script");
      script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dya4mw0bt",
        uploadPreset: "unsigned_videos",
        sources: ["local", "url", "camera"],
        multiple: false,
        resourceType: "video",
        folder: "my_videos",
        clientAllowedFormats: ["mp4", "webm", "mov"],
        maxFileSize: 500000000, // 500MB
        tags: ["my_videos"],
      },
      (error, result) => {
        if (error) return console.error("Cloudinary upload error:", error);

        if (result.event === "success") {
          // ✅ Define video URL correctly
          const videoUrl = result.info.secure_url.replace(
            "/upload/",
            "/upload/f_auto/"
          );

          // ✅ Generate thumbnail using Cloudinary transformations
          const thumbnailUrl = result.info.secure_url.replace(
            "/upload/",
            "/upload/so_2,f_jpg,w_400,h_250,c_fill/"
          );

          // ✅ Send both back to parent
          onUpload({
            public_id: result.info.public_id,
            secure_url: videoUrl,
            thumbnail_url: thumbnailUrl,
          });

          console.log("✅ Video uploaded:", videoUrl);
        }
      }
    );

    widget.open();
  };

  return (
    <button
      onClick={openWidget}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
    >
      📤 Upload Video
    </button>
  );
}
