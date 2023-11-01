const prisma = require('../prisma');

const seed = async () => {
  // TODO: Create 20 authors with 3 books each
  for (let x = 0; x < 20; x++) {
    const books = [];
    for (let y = 0; y < 3; y++) {
      books.push({ title: `Book ${y}` });
    }
    await prisma.author.create({
      data: {
        name: `Author ${x}`,
        books: {
          create: books
        }
      }
    });
  }
};

/*
  This is pulled from the Prisma docs.
  Since we're using the Prisma Client directly,
  we need to disconnect from it manually.

  We're also using `then` and `catch` instead of async/await
  because async/await doesn't work at the top level of a file.
*/
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
