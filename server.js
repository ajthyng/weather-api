const express = require('express');
const path = require('path');
const weather = require('./Weather/EndPoints.js');
const elements = require('./Weather/Elements.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const ROOT = __dirname;
const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.raw({ extended: false }));
app.use(bodyParser.json({ extended: false }));


app.get('/forecast/zip/:zipcode', weather.zipcode);
app.get('/forecast', weather.forecast);
app.get('/favicon.ico', (req, res) => {
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});