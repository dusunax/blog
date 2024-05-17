import { FileType } from "@/app/gallery/page";
import SlideItem from "./SlideItem";
import PDFThumbnail from "./PDFThumbnail";
import { removeDateFromFilename } from "@/utils/filename";

interface PDFSlideListProps {
  file: FileType;
}

export default function PDFSlideItem({ file }: PDFSlideListProps) {
  return (
    <SlideItem file={file} itemTitle={removeDateFromFilename(file.name)}>
      <PDFThumbnail file={file} />
    </SlideItem>
  );
}
