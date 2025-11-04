"use client";

import { useState } from "react";

export default function VideoGallery() {
  const videos = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `🎬 Amazing Video ${i + 1}`,
    src: `/videos/JMI.mp4`, // your local video file
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 10;

  const totalPages = Math.ceil(videos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const currentVideos = videos.slice(startIndex, startIndex + videosPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        🌟 My Video Gallery 🌟
      </h1>

      {/* Video Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Video */}
            {/* Video */}
            <video
              width="100%"
              height="250"
              controls
              preload="metadata"
              className="rounded-t-2xl"
              poster={`/thumbnails/img${(video.id % 1) + 1}.jpg`}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>


            {/* Title */}
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                {video.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-5 py-2.5 rounded-lg font-semibold ${currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 transition-all"
            }`}
        >
          ⬅ Previous
        </button>

        <span className="text-lg text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-5 py-2.5 rounded-lg font-semibold ${currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 transition-all"
            }`}
        >
          Next ➡
        </button>
      </div>
    </main>
  );
}
