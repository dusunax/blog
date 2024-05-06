import { PropsWithChildren } from "react";
import { FileType } from "@/app/gallery/page";
import Link from "next/link";
import SlideItemButtonBox from "./SlideItemButtonBox";

interface SlideItemProps extends PropsWithChildren {
  file: FileType;
  itemTitle: string;
}

export default function SlideItem({
  file,
  itemTitle,
  children,
}: SlideItemProps) {
  const { name, filePath, files, fileExt } = file;
  const slugs = filePath.split("/");
  const path = ["gallery", ...slugs.slice(1, slugs.length - 1)].join("/");
  const pdfPath = `${path}/${name}.pdf?exe=pdf`;
  const imagePath = `${path}?slide-length=${files.length}&exe=png`;

  return (
    <Link href={`${fileExt === "pdf" ? pdfPath : imagePath}`}>
      <li
        key={name}
        className="relative flex flex-col p-0 shadow-md rounded-md min-h-[20rem] border"
      >
        {children}
        <div className="px-3 my-2 min-h-[4rem] flex justify-between gap-2">
          <h3 className="text-md break-all my-0 overflow-ellipsis">
            {itemTitle}
          </h3>

          <SlideItemButtonBox file={file} />
        </div>
      </li>
    </Link>
  );
}
