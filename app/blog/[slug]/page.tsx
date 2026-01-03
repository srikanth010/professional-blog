// app/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';

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
    <article className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.metadata.title}</h1>
      <div className="prose prose-slate mt-8">
        {post.content}
      </div>
    </article>
  );
}
