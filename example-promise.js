
var request = require('request');

function getWeather (location) {
      return new Promise(function(resolve, reject) {
      var locationInput = encodeURIComponent(location);
      var url = "http://api.openweathermap.org/data/2.5/weather?q=" + locationInput + "&units=imperial&appid=744e17f268d88782dd7dfdadbfabfe5b";

      if (!location) {
      return reject("No location provided");
      }

      request({url: url,
          json: true
      }, function(error, response, body) {
      if (error) {
        reject("Unable to fetch weather.");
      } else {
        var data = JSON.stringify(body, null, 4);
        resolve("It's " + body.main.temp + " degrees in " + body.name + "!");

      }
    });
  });
}

getWeather('Denver').then(function (currentWeather) {
  console.log(currentWeather);
}, function (error) {
  console.log(error);
});
