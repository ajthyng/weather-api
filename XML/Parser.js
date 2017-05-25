const parse = require('xml2js').parseString;

exports.extractWeather = (xmlString, callback) => {
  console.time("parse-weather");
  parse(xmlString, (err, result) => {
    let dataSet = {};
    let weatherParameters = result.dwml.data[0].parameters[0];
    result.dwml.data[0]["time-layout"].forEach((data) => {
      let hasEndTimes = data["end-valid-time"] ? data["end-valid-time"].length > 0 : false;

      let timePairs = data["start-valid-time"].length;
      dataSet[data["layout-key"]] = [];

      let weatherData = {};
      let temperatures = weatherParameters.temperature;
      temperatures.some((temp) => {
        let timeKey = temp.$["time-layout"];
        let layoutKey = data["layout-key"][0];
        if (timeKey === layoutKey) {
          weatherData[temp.name[0]] = temp.$.value;
          return true;
        }
        return false;
      });
      for (let i = 0; i < timePairs; i++) {
        weatherData["start"] = data["start-valid-time"][i];
        weatherData["end"] = hasEndTimes ? data["end-valid-time"][i] : null;
        dataSet[data["layout-key"]].push(weatherData);
      }
    });
    callback(dataSet);
    console.timeEnd("parse-weather");
  });
};


