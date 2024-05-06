import {
  allDocs,
  allReactStudies,
  allTypescriptStudies,
} from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <section className="prose dark:prose-invert">
      <h2>Docs</h2>
      {allDocs.map((docs) => (
        <article key={docs?._id}>
          <Link href={docs?._id}>
            <div>{docs?._raw.sourceFileName}</div>
          </Link>
        </article>
      ))}

      <h2>React Study</h2>
      {allReactStudies.map((study) => (
        <article key={"docs/" + study?._id}>
          <Link href={"docs/" + study?._id}>
            <div>{study?._raw.sourceFileName}</div>
          </Link>
        </article>
      ))}

      <h2>Typescript Study</h2>
      {allTypescriptStudies.map((study) => (
        <article key={"docs/" + study?._id}>
          <Link href={"docs/" + study?._id}>
            <div>{study?._raw.sourceFileName}</div>
          </Link>
        </article>
      ))}
    </section>
  );
}
