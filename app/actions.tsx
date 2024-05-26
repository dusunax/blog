"use server";

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

  return YOUTUBE.map((video) => (
    <iframe
      key={video.key}
      src={`https://www.youtube.com/embed/${video.key}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute w-full h-full scale-[101%] -top-5 left-0"
    />
  ));
}
