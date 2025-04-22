import { PrismaClient } from '@prisma/client'
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

// In package.json, add:
// "prisma": {
//   "seed": "ts-node prisma/seed.ts"
// }
