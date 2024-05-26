import { ReactNode } from "react";

export default function SlideListWrapper({ children }: {children: ReactNode}) {
  return (
    <ul className="p-0 grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</ul>
  );
}
