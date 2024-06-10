import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')
  const content = searchParams.get('content')

  try {
    if (!title || !content) throw new Error('Pet and owner names required')
    await sql`INSERT INTO blog (title, content) VALUES (${title}, ${content});`
    revalidatePath('/blog')
    redirect('/blog')
  } catch (error) {
    //return NextResponse.json({ error }, { status: 500 });
    redirect('/blog')
  }

  const pets = await sql`SELECT * FROM blog;`
  //return NextResponse.json({ pets }, { status: 200 });
}
