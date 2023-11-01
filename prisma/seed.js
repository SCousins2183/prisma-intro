const prisma = require('../prisma');

const seed = async (numAuthors = 20, booksPerAuthor = 3) => {
  // TODO: Create 20 authors with 3 books each

  /*
    Array.from() is a quick way to create an array of a certain length
    and fill it with dynamically generated data.
  */
  const createAuthorPromises = Array.from({ length: numAuthors }, (_, i) => {
    const books = Array.from({ length: booksPerAuthor }, (_, j) => ({
      title: `Books ${i}${j}`
    }));
    return prisma.author.create({
      data: {
        name: `Author ${i}`,
        books: {
          create: books
        }
      }
    });
  });
  /*
    Promise.all allows us to start all the `create` requests
    at the same time, rather than waiting for each one to finish.
    We then wait for all of them to finish with `await`.
  */
  await Promise.all(createAuthorPromises);
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
