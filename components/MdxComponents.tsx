import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "mdx/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const mdxComponents: MDXComponents = {
  h1: function ({
    children,
  }: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>) {
    return <h1 className="text-4xl font-semibold">{children}</h1>;
  },
  h2: function ({
    children,
  }: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>) {
    return <h2 className="text-3xl font-semibold">{children}</h2>;
  },
  h3: function ({
    children,
  }: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>) {
    return <h3 className="text-2xl font-semibold">{children}</h3>;
  },
  h4: function ({
    children,
  }: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>) {
    return <h4 className="text-xl font-semibold">{children}</h4>;
  },
  pre: function ({
    children,
    ...props
  }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
    const propsObj = { ...props };
    const propsValues = Object.values(propsObj);
    const [, , dataLanguage, dataTheme] = propsValues;
    const lang = dataLanguage || "shell";

    return (
      <pre data-language={lang} data-theme={dataTheme} className={"py-4"}>
        <div className="bg-gray-50 rounded-md overflow-x-auto">
          <div
            className={
              "bg-gray-200 dark:text-black flex items-center relative px-4 py-2 text-sm font-sans justify-between rounded-t-md"
            }
          >
            {lang}
          </div>

          <div className={"p-2"}>{children}</div>
        </div>
      </pre>
    );
  },
};
interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
