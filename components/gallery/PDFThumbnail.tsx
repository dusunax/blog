"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { FileType } from "@/app/gallery/page";
import ThumbnailTagBox from "./ThumbnailTagBox";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFThumbnail({ file }: { file: FileType }) {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div
      className="flex-1 rounded-t-md overflow-hidden h-[230px] p-0 flex justify-center relative"
      style={{ fontSize: 0 }}
    >
      <Document file={file.filePath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height={240} pageNumber={1} />
      </Document>
      <ThumbnailTagBox file={file} numPages={numPages} />
    </div>
  );
}
