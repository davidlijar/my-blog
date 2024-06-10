import Image from 'next/image'
;<meta name="viewport" content="width=device-width, initial-scale=1.0" />

import { fetchBlogPosts } from './lib/data'
import DisplayBlogPost from './ui/DisplayBlogPost'

export default async function Home() {
  const res = await fetchBlogPosts()

  return (
    <div>
      {res.map((data) => (
        <div key={data.id}>
          <DisplayBlogPost title={data.title} content={data.content} />
        </div>
      ))}
    </div>
  )
}
