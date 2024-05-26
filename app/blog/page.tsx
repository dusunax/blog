import Blogs from "@/components/Blog/Blogs";

export default function BlogPage() {
  return (
    <section className="prose dark:prose-invert max-w-none flex-1 flex flex-col">
      <h1>Blog Post</h1>

      <Blogs />
    </section>
  );
}
