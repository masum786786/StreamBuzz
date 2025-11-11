"use client";
import { useEffect, useState } from "react";

export default function UserVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState(null);
  const videosPerPage = 10;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/getVideos", { cache: "no-store" });
        const data = await res.json();

        if (!data.resources || data.resources.length === 0) {
          console.log("No videos found in Cloudinary.");
          setLoading(false);
          return;
        }

        const formatted = data.resources.map(v => ({
          public_id: v.public_id,
          secure_url: v.secure_url,
          thumbnail_url: v.thumbnail_url, // ✅ from backend
        }));

        console.log("✅ Videos to show:", formatted);
        setVideos(formatted);
      } catch (err) {
        console.error("❌ Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  // Pagination logic
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  // Loader UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">All Videos</h1>

      {videos.length === 0 ? (
        <p className="text-center text-gray-500">No videos available yet.</p>
      ) : (
        <>
          {/* Video grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentVideos.map(video => (
              <div
                key={video.public_id}
                className="relative shadow-lg rounded-lg overflow-hidden group  cursor-pointer"
                onClick={() => setActiveVideo(video.public_id)}
              >
                {/* Thumbnail */}
                {activeVideo === video.public_id ? (
                  <video
                    controls
                    autoPlay
                    src={video.secure_url}
                    className="w-full h-56 object-contain "
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail_url}
                      alt="Video thumbnail"
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex justify-center items-center  bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Previous
            </button>

            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
