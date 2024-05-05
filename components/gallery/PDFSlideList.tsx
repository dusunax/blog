import { FileType } from "@/app/gallery/page";
import SlideListWrapper from "./SlideListWrapper";
import SlideItem from "./SlideItem";
import PDFThumbnail from "./PDFThumbnail";

interface PDFSlideListProps {
  fileList: FileType[];
}

export default function PDFSlideList({ fileList }: PDFSlideListProps) {
  return (
    <SlideListWrapper>
      {fileList.map((file) => (
        <SlideItem file={file} itemTitle={file.name} key={file.name}>
          <PDFThumbnail file={file} />
        </SlideItem>
      ))}
    </SlideListWrapper>
  );
}
