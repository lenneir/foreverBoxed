// script for time
function displayCurrentTime(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    hours = addZero(hours);
    minutes = addZero(minutes);

    let timeString = `${hours} : ${minutes}`;

    document.getElementById("clock").innerText = timeString;
        let timer = setTimeout(displayCurrentTime, 1000);
}

function addZero(component){
    return component < 10 ? "0" + component : component;
}

displayCurrentTime();

// script for date
function displayCurrentDate(){
    let currentDate = new Date();
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth()+1;

    dd = addZeroDate(dd);
    mm = addZeroDate(mm);

    let dateString = `${dd} / ${mm}`;

    document.getElementById("date").innerText = dateString;

}

function addZeroDate(component){
    return component < 10 ? "0" + component : component;
}

displayCurrentDate();


function displayCurrentDateName(){
    let currentDate = new Date();
    let weekDay = currentDate.getDay();

    const weekDayName = [
    'SUN', 'MON', 'TUES',
    'WED', 'THU', 'FRI',
    'SAT'
    ]

    let dateString = `${weekDayName[weekDay]}`;

    document.getElementById("weekDay").innerText = dateString;
}

displayCurrentDateName();