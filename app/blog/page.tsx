import React from 'react'

import BlogPostForm from '../components/BlogPostForm'

export default function Blog() {
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Create a New Blog Post</h1>

        <BlogPostForm />
      </div>
    </>
  )
}
