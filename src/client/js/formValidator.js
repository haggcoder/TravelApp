const validateDate = () => {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    if(startDate === "" || endDate === ""){
        return false;
    }
    return true;
}

const validateForm = () => {
    if(document.getElementById('city').value === ""){
        alert('Error: Location field can\'t be empty!');
        return false;
    }
    if(!validateDate()){
        alert('Error: Date field can\'t be empty!');
        return false;
    }
    const daysLeft = Client.getRemainingDays();
    if(daysLeft < 0){
        alert('Error: Enter a valid depart date!');
        return false;
    }
    const duration = Client.getTripLength();
    if(duration < 0){
        alert('Error: Enter a valid return date!');
        return false;
    }
    return true;
}

export { validateForm }