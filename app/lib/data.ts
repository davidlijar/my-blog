import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'

import { Posts } from './definitions'

export async function fetchBlogPosts() {
  noStore()

  try {
    const data = await sql<Posts>`SELECT * FROM blog order by id desc;`
    console.log(data.rows)
    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch blog post.')
  }
}
