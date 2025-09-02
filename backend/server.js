const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello from the Backend API!');
});

app.listen(PORT, () => {
  console.log(`Backend service listening on port ${PORT}`);
});
