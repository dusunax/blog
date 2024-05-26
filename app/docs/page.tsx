import {
  allDocs,
  allReactStudies,
  allTypescriptStudies,
} from "@/.contentlayer/generated";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DocsPage = () => {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-black my-0 mb-8">Document</h2>
      <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]}>
        <AccordionItem
          value="item-1"
          className="rounded-lg shadow-md py-6 px-8"
        >
          <AccordionTrigger className="py-2 pb-2 hover:bg-slate-50">
            <h2 className="my-0 font-semibold text-xl px-1">Document</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 mt-2 pt-4 px-1 border-t-[1px]">
              {allDocs.map((docs) => (
                <article key={docs?._id}>
                  <Link href={docs?._id}>
                    <div className="underline">{docs?._raw.sourceFileName}</div>
                  </Link>
                </article>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="rounded-lg shadow-md py-6 px-8"
        >
          <AccordionTrigger className="py-2 pb-2 hover:bg-slate-50">
            <h2 className="my-0 font-semibold text-xl px-1">
              TIL: React Study
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 mt-2 pt-4 px-1 border-t-[1px]">
              {allReactStudies.map((study) => (
                <article key={"docs/" + study?._id}>
                  <Link href={"docs/" + study?._id}>
                    <div className="underline">
                      {study?._raw.sourceFileName}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="rounded-lg shadow-md py-6 px-8"
        >
          <AccordionTrigger className="py-2 pb-2 hover:bg-slate-50">
            <h2 className="my-0 font-semibold text-xl px-1">
              TIL: Typescript Study
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 mt-2 pt-4 px-1 border-t-[1px]">
              {allTypescriptStudies.map((study) => (
                <article key={"docs/" + study?._id}>
                  <Link href={"docs/" + study?._id}>
                    <div className="underline">
                      {study?._raw.sourceFileName}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default DocsPage;
