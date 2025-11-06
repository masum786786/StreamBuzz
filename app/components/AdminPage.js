import React from "react";
import VideoGallery from './VideoGallery'
const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to the admin panel. Add your admin controls here.</p>
        <VideoGallery/>

        {/* Future admin content goes here */}
      </div>
    </div>
  );
};

export default AdminPage;
