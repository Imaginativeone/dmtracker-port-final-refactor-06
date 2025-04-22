// import { PrismaClient } from '@prisma/client'
// import { PrismaClient } from '../prisma/generated/clientPg'
// import { PrismaClient } from "../generated/prisma/client.js"
import { PrismaClient } from '../app/generated/prisma/client.js'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is the first post!',
    },
  })
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
