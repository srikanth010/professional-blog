import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto py-20 px-6" style={{ paddingTop: "6rem" }}>
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm mb-8 block transition-colors hover:text-violet-400"
        style={{ color: "var(--muted)" }}
      >
        ← Back to portfolio
      </a>
      <h1
        className="text-4xl font-bold mb-4"
        style={{ color: "var(--foreground)" }}
      >
        {post.metadata.title}
      </h1>
      <div className="prose mt-8" style={{ color: "var(--foreground)" }}>
        {post.content}
      </div>
    </article>
  );
}
