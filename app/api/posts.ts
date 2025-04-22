import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany()
    res.status(200).json(posts)
  } else if (req.method === 'POST') {
    const { title, content } = req.body
    const newPost = await prisma.post.create({
      data: { title, content },
    })
    res.status(201).json(newPost)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
