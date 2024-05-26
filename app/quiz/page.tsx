import { allQuizzes } from "@/.contentlayer/generated";
import Link from "next/link";

export default function QuizListPage() {
  return (
    <section className="prose dark:prose-invert">
      <h2>Quiz</h2>
      {/* {allQuizzes.map((quiz) => (
        <article key={quiz?._id}>
          <Link href={quiz?._id}>
            <div>{quiz?._raw.sourceFileName}</div>
          </Link>
        </article>
      ))} */}
    </section>
  );
}
