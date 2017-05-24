const parse = require('xml2js').parseString;

exports.extractTimes = (xmlString, times) => {
  parse(xmlString, (err, result) => {
    let timeInfo = {};
    result.dwml.data[0]["time-layout"].forEach((data) => {
      let start_time = {};
      let end_time = {};
      let hasEndTimes = data["end-valid-time"] ? data["end-valid-time"].length > 0 : false;

      let timePairs = data["start-valid-time"].length;
      for (let i = 0; i < timePairs; i++) {
        start_time[i] = data["start-valid-time"][i];
        if (hasEndTimes) {
          end_time[i] = data["end-valid-time"][i];
        }
      }
      timeInfo[data["layout-key"]] = {
        "start_times": start_time,
        "end_times": end_time
      }
    });
    times(timeInfo);
  });
};
