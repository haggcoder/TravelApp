const geonames_base_url = 'http://api.geonames.org/searchJSON?q=';
const geonames_username = 'haggcoder';

const getLocation = async() => {
    let search_key = document.getElementById('city').value;
    let geonames_endpoint = `${geonames_base_url}${search_key}&maxRows=1&username=${geonames_username}`;
    try {
        const res = await fetch(geonames_endpoint);
        /* TODO: handle (res===undefined) */
        const data = await res.json();
        const d = data.geonames[0];
        let info = {
            latitude: d.lat,
            longitude: d.lng,
            country: d.countryName
        }
        return info;
    }catch(error){
        console.log('error!',error);
    }
};

const weatherbit_base_url = 'https://api.weatherbit.io/v2.0/current?lat=';
const weatherbit_api_key = '37e4b21db1f345bfb90cd6a2724baf5d';

const getCurrentWeather = async(lat, lng) => {
    let weatherbit_endpoint = `${weatherbit_base_url}${lat}&lon=${lng}&key=${weatherbit_api_key}`;
    try{
        const res = await fetch(weatherbit_endpoint);
        const w = await res.json();
        const weather = {
            temprature: w.data[0].temp,
            description: w.data[0].weather.description
        }
        return weather;
    }catch(error){
        console.log('error!',error);
    }
};

const weatherbit_forecast_base_url = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';
/* 
    lat: latitude
    lng: longitude
    day: number of days until trip
    Note: Weatherbit API only provides weather forecast for 16 days from current date.
    Therefore, if number of days until trip is greater than 16, 
    the web application will show forecasted weather for the {current+16}th day.
*/
const getWeatherForecast = async(lat, lng, day) => {
    const weatherbit_forecast_endpoint = `${weatherbit_forecast_base_url}${lat}&lon=${lng}&key=${weatherbit_api_key}`;
    try{
        const res = await fetch(weatherbit_forecast_endpoint);
        const w = await res.json();
        const weather = {
            temprature: w.data[day-1].temp,
            description: w.data[day-1].weather.description
        }
        return weather;
    }catch(error){
        console.log('error!',error);
    }
}

export { getLocation, getCurrentWeather, getWeatherForecast };