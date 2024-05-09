import Link from "next/link";
import SlideImages from "@/components/gallery/SlideImages";

interface DocsProps {
  params: {
    slug: string[];
  };
  searchParams: Record<string, string>;
}

export const generateMetadata = ({
  params,
}: {
  params: DocsProps["params"];
}) => {
  const filename = Array.isArray(params.slug)
    ? params.slug[params.slug.length - 1]
    : "Document";

  return { title: filename };
};

export default function GalleryDetailPage(props: DocsProps) {
  const { params, searchParams } = props;
  const filePath = params.slug.join("/");
  const lastSlug = params.slug[params.slug.length - 1];

  const isPDF = searchParams["exe"] === "pdf";
  const isImage = searchParams["exe"] === "png";
  const length = searchParams["slide-length"] ?? "";

  return (
    <article className="w-full flex-1 flex flex-col max-w-none py-6 prose dark:prose-invert">
      <Link href="/gallery#slides">Gallery/Slides</Link>
      <div className="flex h-full justify-between items-center">
        <h1 className="mb-2">{lastSlug}</h1>
        <Link
          href="/gallery"
          className="flex justify-center items-center w-12 h-12 shrink-0 bg-orange-300 rounded-full decoration-dotted"
        >
          🖼️
        </Link>{" "}
      </div>
      <hr className="my-4" />

      {isPDF && <iframe src={`/${filePath}`} className="w-full flex-1" />}
      {isImage && (
        <>
          {/* @ts-expect-error Async Server Component */}
          <SlideImages filePath={filePath} length={length} />
        </>
      )}
    </article>
  );
}
