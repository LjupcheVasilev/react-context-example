import { Suspense } from "react"
import BlogPosts from "@/components/BlogPosts"
import BlogSkeleton from "@/components/BlogSkeleton"

export default async function BlogPage() {
  //simulate a delay
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <Suspense fallback={<BlogSkeleton />}>
        <BlogPosts />
      </Suspense>
    </main>
  )
}
