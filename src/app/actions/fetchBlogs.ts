import blogs from "@/data/blogs.json"

type BlogPost = {
  id: number
  title: string
}

export async function fetchBlogPosts() {
  const response = await new Promise<BlogPost[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(blogs)
    }, 1000)
  })
  return response
}
