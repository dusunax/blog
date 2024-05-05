import React from "react";
import Image from "next/image";

import SlideListWrapper from "./SlideListWrapper";
import SlideItem from "./SlideItem";
import { FileType } from "@/app/gallery/page";

interface GroupedFilesThumbnailListProps {
  fileList: FileType[];
}

export default function ImageSlideList({
  fileList: groupedFiles,
}: GroupedFilesThumbnailListProps) {
  return (
    <SlideListWrapper>
      {groupedFiles.map((file) => (
        <SlideItem
          file={file}
          itemTitle={file.name.split("_")[0]}
          key={file.name}
        >
          <div className="flex-1 max-h-[230px] h-full m-0">
            <Image
              src={file.filePath}
              alt={file.name}
              className="flex-1 m-0 w-full h-full object-cover "
              width={300}
              height={220}
            />
          </div>
        </SlideItem>
      ))}
    </SlideListWrapper>
  );
}
