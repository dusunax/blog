import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "mdx/types";

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
