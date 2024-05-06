"use client";
import { MouseEvent } from "react";
import JSZip from "jszip";
import { FileType } from "@/app/gallery/page";

interface SlideItemButtonBoxProps {
  file: FileType;
}

export default function SlideItemButtonBox({ file }: SlideItemButtonBoxProps) {
  const zip = new JSZip();

  const handleDownload = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (file.fileExt === "pdf") {
      const link = document.createElement("a");
      link.href = file.filePath;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    if (file.fileExt === "png") {
      file.files.forEach((file, index) => {
        zip.file(`image${index + 1}.png`, file);
      });

      zip.generateAsync({ type: "blob" }).then((content) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

  return (
    <div className="w-16 shrink-0 flex justify-end items-start text-sm">
      <button
        className="w-8 h-8"
        onClick={(e) => handleDownload(e)}
        title="download file"
      >
        💾
      </button>
    </div>
  );
}
