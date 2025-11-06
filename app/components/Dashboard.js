"use client";

const Dashboard = () => {
  const categories = [
    {
      title: "🎭 Comedy Videos",
      image: "/thumbnails/funny.jpg",
      description: "Enjoy hilarious and light-hearted videos to make your day brighter.",
    },
    {
      title: "🔥 18+ Videos",
      image: "/thumbnails/funny.jpg",
      description: "Exclusive mature content. Viewer discretion is advised.",
    },
    {
      title: "💃 Hot Videos",
      image: "/thumbnails/funny.jpg",
      description: "Trending glamorous and bold entertainment videos.",
    },
    {
      title: "🚀 Viral Videos",
      image: "/thumbnails/funny.jpg",
      description: "The most trending videos breaking the internet right now!",
    },
    {
      title: "🎬 Short Film Videos",
      image: "/thumbnails/funny.jpg",
      description: "Watch creative short films and cinematic experiences.",
    },
    {
      title: "🎵 Music Videos",
      image: "/thumbnails/funny.jpg",
      description: "Latest music videos and live performances from top artists.",
    },
    {
      title: "😹 Funny Moments",
      image: "/thumbnails/funny.jpg",
      description: "The funniest clips and pranks that will make you laugh out loud!",
    },
    {
      title: "⚡ Action Clips",
      image: "/thumbnails/funny.jpg",
      description: "High-energy stunts, fight scenes, and adventure videos.",
    },
  ];

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🎬 Video Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {cat.title}
              </h2>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
