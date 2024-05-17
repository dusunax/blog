import { PropsWithChildren } from "react";

export default function ThumbnailBox({ children }: PropsWithChildren) {
  return (
    <div className="relative flex-1 h-[230px] m-0 rounded-t-md overflow-hidden">
      {children}
    </div>
  );
}
