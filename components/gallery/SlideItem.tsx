import { PropsWithChildren } from "react";
import { FileType } from "@/app/gallery/page";
import Link from "next/link";

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
        className="border flex flex-col p-0 shadow-md rounded-md min-h-[20rem]"
      >
        {children}
        <h3 className="px-4 my-2 text-md min-h-[4rem]">{itemTitle}</h3>
      </li>
    </Link>
  );
}
