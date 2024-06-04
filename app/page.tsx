import Image from 'next/image'
;<meta name="viewport" content="width=device-width, initial-scale=1.0" />

import {GET} from './api/get-all-blog-posts/route'

export  default async function Home() {

  const res = await GET();
  

  return (
    <div>
      {res.map((post:any)=>{
        return(
          <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        )
      })}
    </div>
  )
}
