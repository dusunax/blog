interface Video {
  key: string;
}

interface PDFSlideListProps {
  video: Video;
}

export default function VideoItem({ video }: PDFSlideListProps) {
  return (
    <li className="relative flex flex-col shadow-lg rounded-md p-0 pb-[56.25%] border overflow-hidden bg-black">
      <iframe
        key={video.key}
        src={`https://www.youtube.com/embed/${video.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute w-full h-full scale-[101%] -top-5 left-0"
      />
    </li>
  );
}
