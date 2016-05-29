var request = require('request');


module.exports = function (location, callback) {
var locationInput = encodeURIComponent(location);
var url = "http://api.openweathermap.org/data/2.5/weather?q=" + locationInput + "&units=imperial&appid=744e17f268d88782dd7dfdadbfabfe5b";

if (!location) {
  return callback("No location provided");
}

  request({url: url,
        json: true
}, function(error, response, body) {
    if (error) {
      callback("Unable to fetch weather.");
    } else {
      var data = JSON.stringify(body, null, 4);
      callback("It's " + body.main.temp + " degrees in " + body.name + "!");

    }
});
}
