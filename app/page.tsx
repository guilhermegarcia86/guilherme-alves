/* eslint-disable @typescript-eslint/no-explicit-any */
import { allPosts } from 'contentlayer/generated';

export default function Home() {
  // Ordena por data
  const posts = allPosts.sort((a: any, b: any) => b.date.localeCompare(a.date));
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Posts do Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post._id} className="mb-4">
            <a href={`/posts/${post.slug}`} className="text-xl text-blue-700 hover:underline">{post.title}</a>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
