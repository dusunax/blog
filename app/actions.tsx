"use server";
import VideoItem from "@/components/Videos/VideoItem";

export async function getVideoByComponents() {
  const YOUTUBE = [
    { id: 0, key: "RyBy_mB4Ex4" },
    { id: 1, key: "C5cSWuhuU1I" },
    { id: 2, key: "0F3xBCxkDXI" },
    { id: 3, key: "CaybAzvcRGo" },
    { id: 4, key: "UF6L6QfTCdo" },
    { id: 5, key: "Vb1GvLyru2Q" },
    { id: 6, key: "jOs3qfMGhNI" },
  ];

  return YOUTUBE.map((video) => <VideoItem key={video.id} video={video} />);
}
