"use client";
import { useState } from "react";

import { FileType } from "@/app/gallery/page";
import ThumbnailTagBox from "./ThumbnailTagBox";

export default function PDFThumbnail({ file }: { file: FileType }) {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div
      className="flex-1 rounded-t-md overflow-hidden h-[230px] p-0 flex justify-center relative"
      style={{ fontSize: 0 }}
    >
      <ThumbnailTagBox file={file} numPages={numPages} />
    </div>
  );
}
