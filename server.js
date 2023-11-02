const express = require('express');
const app = express();

const PORT = 3000;
console.log('in server.js');

//error handling middleware

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
