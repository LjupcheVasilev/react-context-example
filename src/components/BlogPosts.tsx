"use client"
import { fetchBlogPosts } from "@/app/actions/fetchBlogs"
import { useEffect, useState } from "react"

type BlogPost = {
  id: number
  title: string
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function BlogPosts() {
  const posts = await fetchBlogPosts()

  if (posts.length === 0) {
    return <p>No blog posts available.</p>
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
