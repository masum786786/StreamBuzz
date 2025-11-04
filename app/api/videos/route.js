import { NextResponse } from "next/server";

export async function GET() {
  const videos = [
    {
      id: 1,
      title: "Funny Clips",
      description: "Laugh out loud with these funny moments 😂",
      url: "https://www.youtube.com/watch?v=Qo4IOTAbGAM",
    },
    {
      id: 2,
      title: "Movie Trailer",
      description: "Watch the latest blockbuster trailer 🎬",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];
  return NextResponse.json(videos);
}
