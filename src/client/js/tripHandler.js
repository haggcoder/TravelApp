const addTrip = (trip) => {
    const tripContainer = document.getElementById('trips');
    const div = document.createElement('div');
    div.setAttribute("class","trip");
    const start_date = document.getElementById('startDate').value;
    const end_date = document.getElementById('endDate').value;
    div.innerHTML = `
        <img class="trip-image" src=${trip.image} />
        <div class="trip-info">
        <span>My trip to: ${trip.city}, ${trip.country}</span>
        <span>Departing: ${start_date}</span>
        <span>Returning: ${end_date}</span>
        <span class="medium">${trip.city}, ${trip.country} is ${trip.daysLeft} days away!</span>
        <span class="medium">Typical Weather for then is: ${trip.temprature}°C</span>
        <span class="small">${trip.weather}</span>
        </div>`;
    tripContainer.appendChild(div);
};

export { addTrip }
