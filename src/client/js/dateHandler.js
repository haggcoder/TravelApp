const getRemainingDays = () => {
    const today = new Date();
    const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const startDate = document.getElementById('startDate').value;
    let days = (Date.parse(startDate)-Date.parse(currentDate))/86400000;
    return Math.trunc(days);
};

const getTripLength = () => {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const duration = (Date.parse(endDate)-Date.parse(startDate))/86400000;
    return duration;
};

export { getRemainingDays, getTripLength };