import { allQuizzes } from "contentlayer/generated";
import { Mdx } from "@/components/MdxComponents";
import QuizMeta from "@/components/QuizMeta";
import QuizComponent from "@/components/QuizComponent";

interface QuizProps {
  params: {
    id: string;
    searchParams: {};
  };
}

export default function QuizPage({ params }: QuizProps) {
  const currentQuiz = allQuizzes.find(
    (item) => item._raw.sourceFileName === params.id
  );

  if (!currentQuiz) return null;

  const MDX = Mdx(currentQuiz.body);

  return (
    <>
      <QuizMeta content={currentQuiz.body} quiz={currentQuiz} />
      <hr className="my-10" />
      <QuizComponent mdx={MDX} answerNum={currentQuiz.answer} />
    </>
  );
}
