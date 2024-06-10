import React from 'react'

interface BlogPostProps {
  title: string
  content: string
}

const DisplayBlogPost: React.FC<BlogPostProps> = ({ title, content }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-dark shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="text-lg leading-relaxed">{content}</div>
      </div>
    </div>
  )
}

export default DisplayBlogPost
