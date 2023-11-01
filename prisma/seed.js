const prisma = require('../prisma');
const seed = async () => {
  // TODO: Create 20 authors with 3 books each
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
