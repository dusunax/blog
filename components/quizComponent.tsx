"use client";
import { useEffect, useRef, useState } from "react";

interface QuizProps {
  mdx: JSX.Element;
  answerNum: number;
}

export default function QuizComponent({ mdx: MDX, answerNum }: QuizProps) {
  const quizDOM = useRef<HTMLDivElement>(null);
  const [answerCount, setAnswerCount] = useState(0);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const handleHover = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.textContent?.includes("answer-")) {
        target.style.backgroundColor = "#e5e533";
        target.style.cursor = "pointer";
      }
    };

    const handleMouseOut = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.textContent?.includes("answer-")) {
        target.style.backgroundColor = "transparent";
        target.style.cursor = "auto";
      }
    };

    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.textContent?.includes("answer-")) {
        setAnswer(target.textContent ?? "");
      }
    };

    quizDOM.current?.childNodes.forEach((node) => {
      if (node.textContent?.includes("answer-")) {
        node.addEventListener("mouseenter", handleHover);
        node.addEventListener("mouseleave", handleMouseOut);
        node.addEventListener("click", handleClick);
        setAnswerCount((prevCount) => prevCount + 1);
      }
    });

    return () => {
      quizDOM.current?.childNodes.forEach((node) => {
        node.removeEventListener("mouseenter", handleHover);
        node.removeEventListener("mouseleave", handleMouseOut);
      });
    };
  }, [quizDOM.current]);

  const isCorrectAnswer = () => {
    console.log("answer-" + answerNum, answer);

    if ("answer-" + answerNum === answer) {
      alert("CorrectAnswer");
    } else {
      alert("wrongAnswer");
    }
  };

  return (
    <div ref={quizDOM}>
      <div className="ml-auto flex border rounded-lg w-1/2 justify-between items-center pl-4">
        <div className="flex items-center gap-2">
          <strong>select:</strong>
          <input
            type="text"
            className="block w-full outline-none"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <button className="p-2 bg-yellow-300" onClick={isCorrectAnswer}>
          Check
        </button>
      </div>
      {MDX}
    </div>
  );
}
