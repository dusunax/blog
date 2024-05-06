"use client";
import React, { useState } from "react";

import { FileType } from "@/app/gallery/page";
import SlideListWrapper from "./SlideListWrapper";
import PDFSlideItem from "./PDFSlideItem";
import PNGSlideItem from "./PNGSlideItem";
import SelectSortOrder from "./SelectSortOrder";

interface SlideListProps {
  fileList: FileType[];
}

export default function SlideList({ fileList }: SlideListProps) {
  const [sortOrder, setSortOrder] = useState("최신순");

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);
  };

  const sortedFileList = [...fileList].sort((a, b) => {
    if (sortOrder === "최신순") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortOrder === "오래된순") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    return 0;
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 id="slides" className="m-0">
          Slides
        </h2>
        <SelectSortOrder value={sortOrder} onChange={handleSortOrderChange} />
      </div>

      <SlideListWrapper>
        {sortedFileList.map((file) => (
          <>
            {file.fileExt === "pdf" && <PDFSlideItem file={file} />}
            {file.fileExt === "png" && <PNGSlideItem file={file} />}
          </>
        ))}
      </SlideListWrapper>
    </>
  );
}
