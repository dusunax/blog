import { PropsWithChildren } from "react";

export default function SlideListWrapper({ children }: PropsWithChildren) {
  return <ul className="p-0 grid grid-cols-2 gap-4">{children}</ul>;
}
