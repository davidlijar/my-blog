import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await sql`select * from blog;`
  const postss = posts.rows

  return NextResponse.json({ postss }, { status: 200 })
}
