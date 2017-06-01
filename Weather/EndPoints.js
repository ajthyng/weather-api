const elements = require('./Elements.js');
const weatherUrl = require('../config').weatherUrl;
const geocodeUrl = require('../config').geocodeUrl;
const parser = require('../XML/Parser.js');
const rp = require('request-promise');
const moment = require('moment');

let endpoints = module.exports = {};
const WEATHER_TOKEN = process.env.WEATHER_TOKEN;
const GEOCODE_TOKEN = process.env.GEOCODE_TOKEN;

const DATE_FORMAT = "YYYY-MM-DDTHH:mm:ss";
const PRODUCT = "time-series";

let sendResponse = (data, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(data);
};

let forecast = (req, res) => {
  console.time("forecast-request");
  let lat = req.query.lat;
  let long = req.query.long;

  let begin = moment().startOf('day').format(DATE_FORMAT);
  let end = moment().add(10, 'days').endOf('day').format(DATE_FORMAT);

  let query = {};
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
    uri: weatherUrl,
    qs: query,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    }
  };

  rp(options)
    .then((data) => {
      parser.extractWeather((data), (jsonData) => {
        sendResponse(jsonData, res);
      });
      console.timeEnd("forecast-request");
      console.timeEnd("zipcode-request");
    }).catch((error) => {
      console.log(error);
      res.status(error.statusCode).send(error.message);
  });
};

endpoints.forecast = (req, res) => {
  forecast(req, res);
};

endpoints.zipcode = (req, res) => {
  console.time("zipcode-request");
  let query = {
    components: "postal_code",
    address: req.params.zipcode,
    key: GEOCODE_TOKEN
  };

  let options = {
    method: "GET",
    uri: geocodeUrl,
    qs: query,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    },
    json: true
  };

  rp(options)
    .then((data) => {
      let response = {
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng
      };
      req.query = {
        lat: response.lat,
        long: response.lng
      };
      forecast(req, res)
    })
    .catch((error) => {
      console.log(error);
      res.status(501).send(error);
    });
};