/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPosts, getPostFrontmatter } from "@/lib/posts"
import { notFound } from "next/navigation"
import { Metadata } from "next"

// Define proper metadata types if needed
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const frontmatter = await getPostFrontmatter(params.slug)
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

// Gera as rotas estáticas com base nos arquivos .mdx disponíveis
export async function generateStaticParams() {
  return getAllPosts()
}

// Simplified approach - no explicit param typing
export default async function PostPage({ params }: any) {
  // Importa o componente MDX dinamicamente pelo slug
  let PostContent
  try {
    PostContent = (await import(`@/content/posts/${params.slug}.mdx`)).default
  } catch {
    return notFound()
  }

  // Se quiser usar os dados do frontmatter para título/data:
  const frontmatter = await getPostFrontmatter(params.slug)

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <small>{frontmatter.date}</small>
      <PostContent />
    </article>
  )
}
