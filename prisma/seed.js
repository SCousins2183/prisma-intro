const prisma = require('../prisma');
console.log('a');
const seed = async (numAuthors = 20, booksPerAuthor = 3) => {
  // TODO: Create 20 authors with 3 books each
  console.log('b');
  for (let i = 0; i < numAuthors; i++) {
    const books = [];
    for (let j = 0; j < booksPerAuthor; j++) {
      books.push({ title: `Book ${i},${j}` });
    }
    await prisma.author.create({
      data: {
        name: `Author ${i}`,
        books: {
          create: books
        }
      }
    });
  }
};
console.log('c');
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

console.log('d');
