"use client";
import { useEffect, useState } from "react";
import CloudinaryUploader from "./CloudinaryUploader";

export default function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch initial videos
  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async (cursor = null) => {
    setLoading(true);
    try {
      const url = cursor ? `/api/getVideos?nextCursor=${cursor}` : "/api/getVideos";
      const res = await fetch(url, { cache: "no-store" });
      const data = await res.json();

      const formattedVideos = (data.resources || []).map((v) => ({
        public_id: v.public_id,
        secure_url: v.secure_url.replace("/upload/", "/upload/f_auto/"),
      }));

      setVideos((prev) => [...prev, ...formattedVideos]);
      setNextCursor(data.next_cursor || null);
    } catch (err) {
      console.error("❌ Error fetching videos:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle newly uploaded video
  const handleUpload = (video) => {
    setVideos((prev) => [video, ...prev]);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Upload Button */}
      <div className="mb-6 flex justify-center">
        <CloudinaryUploader onUpload={handleUpload} />
      </div>

      {/* Total videos */}
      <p className="text-center text-gray-600 mb-4">
        Total videos: {videos.length}
      </p>

      {/* Video Grid */}
      {videos.length === 0 ? (
        <p className="text-center text-gray-500">No videos yet — upload one 🎬</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div
              key={`${video.public_id}-${index}`} // ✅ Ensures unique key
              className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <video
                width="100%"
                height="250"
                controls
                className="rounded-t-lg"
              >
                <source src={video.secure_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}

        </div>
      )}

      {/* Load More Button */}
      {nextCursor && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => loadVideos(nextCursor)}
            disabled={loading}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
