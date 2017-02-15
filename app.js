const yargs     = require('yargs');

const geocode   = require('./geocode/geocode');
const weather   = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch for weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  geocode.geocodeAddress(argv.a, (errorMessge, results) => {
    if (errorMessge) {
      console.log(errorMessge);
    } else {
      console.log(results.address);

      weather.getWeather(results.lat, results.lng, (errorMessge, results) => {
        if (errorMessge) {
          console.log(errorMessge);
        } else {
          //console.log(JSON.stringify(results, undefined, 2));
          console.log(`The temperature is ${results.temp}, but it feels like ${results.feelsLike}.`);
        }
      });
    }
  });

