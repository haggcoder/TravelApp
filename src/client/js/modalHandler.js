const instantiateModal = (trip) => {

    const start_date = document.getElementById('startDate').value;
    const end_date = document.getElementById('endDate').value;

    /* set modal data */
    document.getElementById('modal-image').setAttribute("src",`${trip.image}`);
    document.getElementById('modal-country').innerText = `My trip to: ${trip.city}, ${trip.country}`;
    document.getElementById('modal-start').innerText = `Departing: ${start_date}`;
    document.getElementById('modal-end').innerText = `Returning: ${end_date}`;
    document.getElementById('modal-days').innerText = `${trip.city}, ${trip.country} is ${trip.daysLeft} days away!`;
    document.getElementById('modal-temp').innerText = `Typical Weather for then is: ${trip.temprature}°C`;
    document.getElementById('modal-weather').innerText = `${trip.weather}`;
    
    document.getElementById('modal').style.display = 'block';
};

const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
};

export { instantiateModal, closeModal }