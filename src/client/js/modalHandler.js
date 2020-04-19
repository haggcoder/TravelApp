const instantiateModal = (data) => {

    /* set modal data */
    document.getElementById('modal-country').innerText = data.country;
    document.getElementById('modal-temp').innerText = data.temprature;
    document.getElementById('modal-weather').innerText = data.weather;
    document.getElementById('modal-duration').innerText = data.duration;
    document.getElementById('modal-days').innerText = data.daysLeft;
    document.getElementById('modal-start').innerText = document.getElementById('startDate').value;
    document.getElementById('modal-end').innerText = document.getElementById('endDate').value;

    document.getElementById('modal').style.display = 'block';
};

const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
};

export { instantiateModal, closeModal }