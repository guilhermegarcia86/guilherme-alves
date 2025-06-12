import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"

const POSTS_DIR = path.join(process.cwd(), "content/posts")

export async function getAllPosts() {
  const files = await fs.readdir(POSTS_DIR)
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(/\.mdx?$/, ""),
    }))
}

// Se quiser listar frontmatter, adicione:
export async function getPostFrontmatter(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(filePath, "utf-8")
  const { data } = matter(raw)
  return data
}
