const express = require('express');
const path = require('path');
const weather = require('./Weather/EndPoints.js');
const elements = require('./Weather/Elements.js');
const bodyParser = require('body-parser');

const ROOT = __dirname;
const app = express();

app.use(bodyParser.raw({ extended: false }));
app.use(bodyParser.json({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send("Server up.");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});