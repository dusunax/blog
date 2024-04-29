"use client";

import { MDX } from "contentlayer/core";
import { Quiz } from "@/.contentlayer/generated";

interface QuizSectionProps {
  content: MDX;
  quiz: Quiz;
}

export default function QuizMeta({ quiz }: QuizSectionProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-2">
        <h1 className="text-2xl">
          {quiz._id.split("/")[1].split(".")[0]} {quiz.title}
        </h1>
        <p className="text-gray-500">{quiz.author}</p>
      </div>
      <p>{quiz.description}</p>
    </div>
  );
}
