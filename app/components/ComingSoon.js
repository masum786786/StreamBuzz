"use client";

import React from "react";
import { Clock, Sparkles } from "lucide-react";

export const ComingSoon = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 text-white text-center px-6">
      {/* Greeting */}
      <div className="mb-6 animate-bounce">
        <Sparkles className="w-12 h-12 text-yellow-300 mx-auto" />
      </div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
        👋 Hello, StreamBuzz Fans!
      </h1>

      {/* Subheading */}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
        🚀 Something Exciting is Coming Soon!
      </h2>

      {/* Description */}
      <p className="max-w-xl text-lg sm:text-xl text-gray-200 mb-8">
        We’re working hard behind the scenes to bring you an amazing video
        experience — filled with entertainment, VIP access, and exclusive
        features you’ll love.
      </p>

      {/* Icon + Message */}
      <div className="flex items-center justify-center space-x-3 mb-10">
        <Clock className="w-6 h-6 text-yellow-300" />
        <span className="text-lg font-medium">
          Stay tuned! We’ll be live very soon.
        </span>
      </div>

      {/* Button */}
      <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300">
        Notify Me 🔔
      </button>

      {/* Footer Note */}
      <p className="mt-12 text-sm text-gray-300">
        © {new Date().getFullYear()} StreamBuzz — Made with ❤️ for our viewers.
      </p>
    </main>
  );
};

export default ComingSoon;
