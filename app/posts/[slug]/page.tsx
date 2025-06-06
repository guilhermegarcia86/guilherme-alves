/* eslint-disable @typescript-eslint/no-explicit-any */
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return allPosts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: Props) {
  const post = allPosts.find((p: any) => p.slug === params.slug);
  const MDXContent = useMDXComponent(post ? post.body.code : '');
  if (!post) return notFound();

  return (
    <main className="prose dark:prose-invert mx-auto p-8">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <MDXContent />
    </main>
  );
}
