const elements = require('./Elements.js');
const url = require('../config').url;
const rp = require('request-promise');

let endpoints = module.exports = {};

endpoints.forecast = (req, res) => {
  rp('http://www.google.com')
    .then((htmlString) => {
      res.status(200).send(htmlString);
    })
    .catch((err) => {
      console.log(err.message);
    })


};