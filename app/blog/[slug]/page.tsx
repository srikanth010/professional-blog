// app/blog/[slug]/page.tsx
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you'd use this slug to fetch data from a file or database
  const { slug } = params;

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        ← Back to Home
      </Link>
      
      <div className="mt-10">
        <span className="text-slate-500 text-sm">Post Slug: {slug}</span>
        <h1 className="text-4xl font-bold mt-2 capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        
        <div className="mt-8 text-slate-700 leading-relaxed">
          <p>
            This is a placeholder for your blog content. Next.js is using the 
            dynamic route <strong>{slug}</strong> to render this page.
          </p>
        </div>
      </div>
    </main>
  );
}