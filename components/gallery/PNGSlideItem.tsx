import React from "react";
import Image from "next/image";

import { removeDateFromFilename } from "@/utils/filename";
import { PlaceholderList } from "@/type/image";
import SlideItem from "./SlideItem";
import { FileType } from "@/app/gallery/page";
import ThumbnailTagBox from "./ThumbnailTagBox";

interface PNGSlideItemProps {
  file: FileType;
  placeholder?: PlaceholderList[number];
}

export default async function PNGSlideItem({
  file,
  placeholder,
}: PNGSlideItemProps) {
  return (
    <SlideItem
      file={file}
      itemTitle={removeDateFromFilename(file.name)}
      key={file.name}
    >
      <div className="relative flex-1 h-[230px] m-0 rounded-t-md overflow-hidden">
        {placeholder?.base64 && (
          <Image
            src={file.filePath}
            alt={file.name}
            className="flex-1 m-0 w-full h-full object-cover "
            fill
            sizes="(max-width: 750px) 50vw"
            blurDataURL={placeholder?.base64}
            placeholder="blur"
          />
        )}
        <ThumbnailTagBox file={file} numPages={file.files.length} />
      </div>
    </SlideItem>
  );
}
