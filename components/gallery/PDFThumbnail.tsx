"use client";
import { FileType } from "@/app/gallery/page";
import ThumbnailTagBox from "./ThumbnailTagBox";
import ThumbnailBox from "./ThumbnailBox";
import Image from "next/image";

export default function PDFThumbnail({ file }: { file: FileType }) {
  return (
    <div
      className="flex-1 rounded-t-md overflow-hidden h-[230px] p-0 flex justify-center relative"
      style={{ fontSize: 0 }}
    >
      <ThumbnailBox>
        <div className="absolute bg-gray-100 w-full h-full mix-blend-multiply z-10"></div>
        <Image
          src="/image/pdf-thumbnail-w720.png"
          alt="thumbnail"
          style={{ objectFit: "cover" }}
          fill
        />
      </ThumbnailBox>
      <ThumbnailTagBox file={file} numPages={0} />
    </div>
  );
}
