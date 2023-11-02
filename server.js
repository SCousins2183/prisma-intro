const express = require('express');

const app = express();

//error handling middleware

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
