'use strict';
const { PrismaClient } = require('@prisma/client')

async function main() {
    const client = new PrismaClient()

    await client.vacancy.deleteMany()
    const { id } = await client.vacancy.create({ data: {} })

    const vacancy = await client.vacancy.findFirstOrThrow({ where: { id }})
    console.log(vacancy)
}


main().catch(e => {
    console.error(e);
    process.exitCode = 1 
})