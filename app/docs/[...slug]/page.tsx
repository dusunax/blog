import { notFound } from "next/navigation";
import {
  allDocs,
  allReactStudies,
  allTypescriptStudies,
  Docs,
  ReactStudy,
  TypescriptStudy,
} from "contentlayer/generated";
import Link from "next/link";

interface DocsProps {
  params: {
    slug: string[];
  };
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

function getDocsFromParams(
  params: DocsProps["params"]
): Docs | ReactStudy | TypescriptStudy | null | undefined {
  const isDocs = params.slug.length === 1;
  const slug = Array.isArray(params.slug)
    ? params.slug[params.slug.length - 1]
    : "";
  const decodedSlug = decodeURIComponent(slug);

  let targetData: (Docs | ReactStudy | TypescriptStudy)[] | undefined;

  if (isDocs) {
    targetData = allDocs;
  } else {
    switch (params.slug[0]) {
      case "react":
        targetData = allReactStudies;
        break;
      case "typescript":
        targetData = allTypescriptStudies;
        break;
      default:
    }
  }

  if (targetData === undefined) return null;

  return targetData.find(
    (item): item is Docs | ReactStudy | TypescriptStudy =>
      item._raw.sourceFileName === decodedSlug
  );
}

export default async function docsPage({ params }: DocsProps) {
  const docs = getDocsFromParams(params);

  if (!docs) {
    notFound();
  }

  return (
    <article className="w-full max-w-none py-6 prose dark:prose-invert">
      <div className="flex justify-between items-center">
        <h1 className="mb-2">{docs._raw.sourceFileName}</h1>
        <Link
          href="/"
          className="flex justify-center items-center w-12 h-12 shrink-0 bg-orange-300 rounded-full decoration-dotted"
        >
          🏡
        </Link>{" "}
      </div>
      <hr className="my-4" />

      <div dangerouslySetInnerHTML={{ __html: docs.body.html }} />
    </article>
  );
}
