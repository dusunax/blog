import { FileType } from "@/app/gallery/page";
import { PropsWithChildren } from "react";

interface SlideItemProps extends PropsWithChildren {
  file: FileType;
  itemTitle: string;
}

export default function SlideItem({
  file,
  itemTitle,
  children,
}: SlideItemProps) {
  const { name } = file;

  return (
    <li
      key={name}
      className="border flex flex-col  p-0 shadow-md rounded-md min-h-[20rem]"
    >
      {children}
      <h3 className="px-4 my-2 text-md min-h-[4rem]">{itemTitle}</h3>
    </li>
  );
}
