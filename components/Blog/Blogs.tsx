"use client";
import { useState } from "react";
import Tistory from "./Tistory";
import Velog from "./Velog";
import TabCol from "../TabCol";

const Blogs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="flex-1 w-full relative">
      <TabCol tabIndex={tabIndex} setTabIndex={setTabIndex} />

      <div
        className={`absolute w-full h-full flex flex-col ${
          tabIndex === 0 ? "z-10" : ""
        }`}
      >
        <Velog />
      </div>
      <div
        className={`absolute w-full h-full flex flex-col bg-white ${
          tabIndex === 1 ? "z-10" : ""
        }`}
      >
        <Tistory />
      </div>
    </section>
  );
};

export default Blogs;
