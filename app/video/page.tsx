import { Suspense } from "react";
import { getVideoByComponents } from "../actions";
import SlideListWrapper from "@/components/gallery/SlideListWrapper";

export default async function VideoPage() {
  const data = await getVideoByComponents();

  return (
    <section className="prose dark:prose-invert max-w-none flex-1 flex flex-col">
      <h1>Videos</h1>

      <Suspense>{/* <SlideListWrapper>{data}</SlideListWrapper> */}</Suspense>
    </section>
  );
}
