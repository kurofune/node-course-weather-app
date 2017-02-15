const request = require('request');

var getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/b1f3a213cc3fa267ddd4afbb25f80759/${lat},${lng}`,
    json: true
    }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temp: body.currently.temperature,
        feelsLike: body.currently.apparentTemperature
      });
    } else {
      callback('Error: unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;