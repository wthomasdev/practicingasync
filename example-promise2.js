
function getLocation() {
    return new Promise(function(resolve, reject) {
        resolve("London");
    });
}

function getWeather(location) {
    return new Promise(function(resolve, reject) {
        resolve("It's 78 in " + location + "!");
    })
}


getLocation().then(function(location) {
    console.log(location);
    return getWeather(location);
}).then(function(currentWeather) {
    console.log(currentWeather);
});
