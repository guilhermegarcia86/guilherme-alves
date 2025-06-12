import Link from "next/link"
import { getAllPosts, getPostFrontmatter } from "@/lib/posts"

export default async function PostsPage() {
  const posts = await getAllPosts()
  // Carrega frontmatter só para exibição de título/data
  const postsWithMeta = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      frontmatter: await getPostFrontmatter(post.slug),
    }))
  )

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {postsWithMeta.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.frontmatter.title}
            </Link>
            <span> – {post.frontmatter.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
