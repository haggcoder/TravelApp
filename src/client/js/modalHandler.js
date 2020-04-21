const instantiateModal = (trip) => {

    const start_date = document.getElementById('startDate').value;
    const end_date = document.getElementById('endDate').value;

    /* if no images returned by pixabay API */
    const defaultURL = 'https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png';
    const imageURL = ( trip.image === undefined ? defaultURL : trip.image);

    /* set modal data */
    document.getElementById('modal-image').setAttribute("src",`${imageURL}`);
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