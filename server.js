const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const Port = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Successfull',
  });
});

app.listen(Port, (req, res) => {
  console.log(`http://localhost:${Port}`);
});
