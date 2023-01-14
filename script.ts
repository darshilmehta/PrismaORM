import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // write code here to perform CRUD operations on the DB
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
