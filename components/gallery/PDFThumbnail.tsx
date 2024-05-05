"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { FileType } from "@/app/gallery/page";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFThumbnail({ file }: { file: FileType }) {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div
      className="flex-1 overflow-hidden max-h-[230px] p-0 flex justify-center relative"
      style={{ fontSize: 0 }}
    >
      <Document file={file.filePath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height={240} pageNumber={1} />
      </Document>
      {numPages && (
        <p className="bg-[rgba(0,0,0,0.5)] m-0 w-8 h-8 flex justify-center items-center rounded-md absolute right-3 bottom-3 text-xs text-white font-bold">
          {numPages}p
        </p>
      )}
    </div>
  );
}
