// app/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.metadata.title}</h1>
      {/* We will eventually need a markdown renderer here, 
          but for now, this will show the content is working */}
      <div className="prose prose-slate mt-8">
        {post.content}
      </div>
    </article>
  );
}