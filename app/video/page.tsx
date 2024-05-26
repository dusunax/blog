import { Suspense } from "react";
import { getVideoByComponents } from "../actions";
import SlideListWrapper from "@/components/gallery/SlideListWrapper";

export default async function VideoPage() {
  const data = await getVideoByComponents();
  console.log(data);

  if (data.length > 0) {
    return <></>;
  }

  return (
    <section className="prose dark:prose-invert max-w-none flex-1 flex flex-col">
      <h1>Videos</h1>

      <Suspense>
        <SlideListWrapper>
          {data.map((item) => (
            <li
              className="relative flex flex-col shadow-lg rounded-md p-0 pb-[56.25%] border overflow-hidden bg-black"
              key={item.key}
            >
              {item}
            </li>
          ))}
        </SlideListWrapper>
      </Suspense>
    </section>
  );
}
