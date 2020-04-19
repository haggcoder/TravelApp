const addTrip = (trip) => {
    const tripContainer = document.getElementById('trips');
    const div = document.createElement('div');
    div.setAttribute("class","trip");
    const start_date = document.getElementById('startDate').value;
    const end_date = document.getElementById('endDate').value;
    div.innerHTML = `
        <span>${trip.country}</span>
        <span>${trip.temprature}</span>
        <span>${trip.weather}</span>
        <span>${start_date}</span>
        <span>${end_date}</span>
        <span>${trip.duration}</span>
        <span>${trip.daysLeft}</span>`;
    tripContainer.appendChild(div);
};

export { addTrip }