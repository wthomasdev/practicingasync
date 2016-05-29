var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
    // .command('weather', 'Find the weather at your location', function (yargs) {
      .options('location', {
          demand: false,
          alias: 'l',
          description: 'Location, i.e "Denver"',
          type: 'string'
        })
        .help('help')
        .argv;

// weather(function (currentweather) {
//   console.log(currentweather);
// });
//
// location(function(location) {
//   if (!location) {
//     console.log("Unable to guess location");
//     return;
//   }
//   console.log('city: ' + location.city);
//   console.log('log/lat ' + location.loc);
// });

if (typeof argv.l === "string" && argv.l.length > 0) {
    weather(argv.l, function (currentWeather) {
      console.log(currentWeather);
    });
} else {

  console.log("no location given");
  location(function (location) {
    if (location) {
      weather(location.city, function (currentWeather) {
        console.log(currentWeather);
      });

    } else {
      console.log("Unable to guess location")
    }

  });

}
