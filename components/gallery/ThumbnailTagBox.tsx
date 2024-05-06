import { FileType } from "@/app/gallery/page";

export default function ThumbnailTagBox({
  file,
  numPages,
}: {
  file: FileType;
  numPages: number;
}) {
  return (
    <div className="h-6 absolute right-2 top-2 flex gap-1 text-xs text-white font-bold">
      <span className="bg-[rgba(0,0,0,0.5)] m-0 p-2 h-full flex justify-center items-center rounded-lg">
        {file.fileExt}
      </span>
      <span className="bg-[rgba(0,0,0,0.5)] m-0 p-2 h-full flex justify-center items-center rounded-lg">
        {numPages}p
      </span>
    </div>
  );
}
