'use client'

import { useEffect, useState } from 'react'

// import A from "../api/posts"

export default function FetchedData() {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then(setPosts)
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.content}
          </li>
        ))}
      </ul>
    </div>
  )
}
