"use client";
import { useEffect, useState } from "react";

export default function UserVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/getVideos", { cache: "no-store" });
        const data = await res.json();

        if (!data.resources || data.resources.length === 0) {
          console.log("No videos found in Cloudinary.");
          return;
        }

        const formatted = data.resources.map(v => ({
          public_id: v.public_id,
          secure_url: v.secure_url, // use exact Cloudinary URL
        }));

        console.log("✅ Videos to show:", formatted);
        setVideos(formatted);
      } catch (err) {
        console.error("❌ Error fetching videos:", err);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">All Videos</h1>

      {videos.length === 0 ? (
        <p className="text-center text-gray-500">No videos available yet.</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <div key={video.public_id} className="shadow-lg rounded-lg overflow-hidden">
              <video
                width="100%"
                height="250"
                controls
                src={video.secure_url}
                className="rounded-t-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
