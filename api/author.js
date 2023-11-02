const router = require('express').Router();
module.exports = router;

const prisma = require('../prisma');

console.log('in author.js');

//returns all authors
router.get('/', async (req, res) => {
  try {
    const authors = await prisma.author.findMany();
    res.json(authors);
  } catch {
    //This catch will move to the error handler middleware
    next();
  }
});

//create a new author with information provided in the request body
router.post('/', async (req, res, next) => {
  try {
    //Sanitize the request body to only extract the name
    const { name } = req.body;

    //Validate the name, or throw an error
    if (!name) {
      const error = {
        status: 400,
        message: 'Name is required'
      };

      //This will move to the error handler middleware
      return next(error);
    }
    const author = await prisma.author.create({ data: { name } });
    res.json(author);
  } catch {
    next();
  }
});
