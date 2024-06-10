import React from 'react'

import BlogPostForm from '../ui/BlogPostForm'
import { fetchBlogPosts } from '../lib/data'
import DisplayBlogPost from '../ui/DisplayBlogPost'

export default async function Blog() {
  const data = await fetchBlogPosts()
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Create a New Blog Post</h1>

        <BlogPostForm />

        {data.map((data: any) => (
          <div key={data.id}>
            <DisplayBlogPost title={data.title} content={data.content} />
          </div>
        ))}
      </div>
    </>
  )
}
