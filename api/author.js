const router = require('express').Router();
module.exports = router;

const prisma = require('../prisma');

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
