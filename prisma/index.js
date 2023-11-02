const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma;
console.log('in /prisma/index.js');
