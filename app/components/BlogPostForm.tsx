'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const onSubmit = (title: string, content: string) => {
  // Handle form submission, e.g., send data to server
  console.log('Title:', title)
  console.log('Content:', content)
}

const BlogPostForm: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit(title, content)
    setTitle('')
    setContent('')
    router.push(`/api/add-blog?title=${title}&content=${content}`)
  }

  return (
    <form onSubmit={handleSubmit} name="blogPost" className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={6}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default BlogPostForm
