const express = require('express')
const { MyWorker, WORKERS } = require('./worker-module');

const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = () => {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  });
}

