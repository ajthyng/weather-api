const parse = require('xml2js').parseString;
const path = require('path');
const fs = require('fs');

exports.extractWeather = (xmlString, callback) => {
  console.time("parse-weather");
  parse(xmlString, (err, result) => {
    let dataSet = {};
    let timeArray = result.dwml.data[0]['time-layout'];
    let jsonData = {};
    let parameters = Object.keys(result.dwml.data[0].parameters[0]);

    let garbageIndex = parameters.indexOf("$");
    if (garbageIndex >= -1) {
      parameters.splice(garbageIndex, 1);
    }

    for (let i = 0; i < parameters.length; i++) {
        parameters[i] = parameters[i].replace(/[-]/g, '_');
        dataSet[parameters[i]] = [];
    }
    console.log(parameters);

    timeArray.forEach((time) => {
      let key = time['layout-key'];
      jsonData[key] = {
        data: []
      };
      for (let i = 0; i < time['start-valid-time'].length; i++) {
        if (time['end-valid-time']) {
          jsonData[key].data.push({
            "start_time": time['start-valid-time'][i],
            "end_time": time['end-valid-time'][i]
          });
        } else {
          jsonData[key].data.push({
            "start_time": time['start-valid-time'][i]
          });
        }
      }
    });

    parameters.forEach((param) => {
      let data = result.dwml.data[0].parameters[0][param.replace(/[_]/g, '-')];
      for (let i = 0; i < data.length; i++) {
        let values = data[i].value ? data[i].value : [];
        let key = data[i].$['time-layout'];
        for(let j = 0; j < values.length; j++) {
          jsonData[key].data[j].value = values[j];
        }
        jsonData[key].type = data[i].$.type;
        jsonData[key].units = data[i].$.units;
        jsonData[key].name = data[i].name[0];
        let newData = Object.assign({}, jsonData[key]);
        dataSet[param].push(newData);
      }
    });
    console.timeEnd("parse-weather");
    callback(dataSet);
  });
};

