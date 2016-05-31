var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
    .options('location', {
        demand: false,
        alias: 'l',
        description: 'Location, i.e "Denver"',
        type: 'string'
    })
    .help('help')
    .argv;

if (typeof argv.l === "string" && argv.l.length > 0) {
    weather(argv.l).then(function(currentWeather) {
        console.log(currentWeather)
    }).catch(function(error) {
        console.log(error);
    })
} else {

    console.log("no location provided");
    location().then(function(loc) {
        return weather(loc.city);
    }).then(function(currentWeather) {
        console.log(currentWeather);
    }).catch(function(error) {
        console.log(error);
    })
}
