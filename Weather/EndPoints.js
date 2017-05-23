const elements = require('./Elements.js');
const url = require('../config').url;
const rp = require('request-promise');
const moment = require('moment');

let endpoints = module.exports = {};

const DATE_FORMAT = "YYYY-MM-DDTHH:mm:ss";
const PRODUCT = "time-series";

endpoints.forecast = (req, res) => {

  let lat = req.query.lat;
  let long = req.query.long;

  let begin = moment().format(DATE_FORMAT);
  let end = moment().add(1, 'days').format(DATE_FORMAT);

  let query = {};

  let token = process.env.WEATHER_TOKEN;
  console.log(token);
  elements.forecast.forEach((element) => {
    query[element.param] = element.param;
  });

  query.lat = lat;
  query.lon = long;
  query.product = PRODUCT;
  query.begin = begin;
  query.end = end;

  let options = {
    method: "GET",
    uri: "https://graphical.weather.gov/xml/sample_products/browser_interface/ndfdXMLclient.php?lat=38.99&lon=-77.01&product=time-series&begin=2017-05-23T00:00:00&end=2017-05-25T00:00:00&maxt=maxt&mint=mint",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    }
  };

  rp(options)
    .then((data) => {
      console.log(data.headers);
      console.log(data);
      res.status(200).send("Retrieved data.");
    })
    .catch((error) => {
      console.log(error.message);
      res.status(error.statusCode).send(error.message);
    });
};