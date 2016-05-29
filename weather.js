var request = require('request');
var url = "http://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=744e17f268d88782dd7dfdadbfabfe5b"

module.exports = function (callback) {
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
