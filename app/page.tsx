"use client";
import Dashboard from './components/Dashboard'
import AllContent from './components/AllContent'
import UserVideos from './user-videos/page'




export function app() {
  return (


    <div className="min-h-screen flex flex-col">
      {/* <Dashboard /> */}
      <div className="flex-1 overflow-auto">
        {/* <AllContent /> */}
        <UserVideos/>
      </div>
    </div>
  );
}

export default app;
