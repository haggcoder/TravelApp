import { getLocation, getCurrentWeather, getWeatherForecast, getImageURL } from './js/app'
import { getRemainingDays, getTripLength } from './js/dateHandler'
import { instantiateModal, closeModal } from './js/modalHandler'
import { addTrip } from './js/tripHandler'
import { validateForm } from './js/formValidator'

import './styles/form.scss'
import './styles/tripCard.scss'
import './styles/modalCard.scss'

const trip = {};

const search = async() => {

    if(!validateForm()){
        return;
    }

    /* geonames API response */
    const info = await getLocation();
    console.log(info);
    /* TODO: handle (info===undefined) */
    trip.latitude = info.latitude;
    trip.longitude = info.longitude;
    trip.country = info.country;
    trip.city = info.city;

    /* weatherbit API response */
    const daysLeft = getRemainingDays();
    console.log(daysLeft);
    let weather;
    if(daysLeft < 7){
        weather = await getCurrentWeather(info.latitude, info.longitude);
    }else{
        weather = await getWeatherForecast(info.latitude, info.longitude, Math.min(daysLeft,16));
    }
    trip.duration = getTripLength();
    trip.daysLeft = daysLeft;
    trip.temprature = weather.temprature;
    trip.weather = weather.description;

    /* pixabay API response */
    trip.image = await getImageURL(trip.city, trip.country);

    /* instantiate trip modal */
    console.log(trip);
    instantiateModal(trip);
}

const saveTrip = async() => {
    try{
        const response = await fetch('http://localhost:4000/save', {
            method: 'POST', 
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
            },    
            body: JSON.stringify({
                trip: trip
            })
        });
        if(response.ok){
            const trip_details = await response.json();
            addTrip(trip_details);
            return trip_details;
        }
    }catch(error){
      console.log('error!', error);
    }
};

document.getElementById('submit').addEventListener('click',search);
document.getElementById('save-trip').addEventListener('click',saveTrip);
document.getElementById('remove-trip').addEventListener('click',closeModal);
window.addEventListener('click', closeModal);

export { getRemainingDays, getTripLength }