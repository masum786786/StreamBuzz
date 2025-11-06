"use client";
import { useEffect, useState } from "react";

export default function AllContent() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        // Try fetching from API (Cloudinary)
        const res = await fetch("/api/getVideos");
        if (!res.ok) throw new Error("Failed to fetch from API");

        const data = await res.json();

        // Cloudinary API returns 'resources'
        const apiVideos = (data.resources || []).map((v) => ({
          id: v.public_id,
          src: v.secure_url,
        }));

        if (apiVideos.length > 0) {
          setVideos(apiVideos);
          localStorage.setItem("videos", JSON.stringify(apiVideos)); // Update localStorage
        } else {
          // Fallback to localStorage
          const localVideos = localStorage.getItem("videos");
          if (localVideos) setVideos(JSON.parse(localVideos));
        }
      } catch (err) {
        console.error("❌ Error fetching videos:", err);
        // Fallback to localStorage if API fails
        const localVideos = localStorage.getItem("videos");
        if (localVideos) setVideos(JSON.parse(localVideos));
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">All Videos</h1> */}

      {videos.length === 0 ? (
        <p className="text-center text-gray-500">No videos uploaded yet 🎬</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <video
                width="100%"
                height="250"
                controls
                className="rounded-t-lg"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
