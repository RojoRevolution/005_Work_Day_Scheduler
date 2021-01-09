$(document).ready(function () {




    // gets entire moment object
    var momentJS = moment();
    //currentStates pulls formated version of the current date
    var current = {
        day: momentJS.format('dddd'),
        month: momentJS.format('MMM'),
        dayOfMonth: momentJS.format('Do'),
        year: momentJS.format('YYYY'),
        hour: momentJS.format('h'),
        minutes: momentJS.format('mm'),
        amPM: momentJS.format('A'),
        complete: momentJS.format('LLLL')
    };

    console.log(current.day);
    console.log(current.month);
    console.log(current.dayOfMonth);
    console.log(current.year);
    console.log(`${current.hour}:${current.minutes} ${current.amPM}`)
    console.log(current.complete)




    var currentDayEl = $('#currentDay');
    currentDayEl.text(`${current.day} ${current.month} ${current.dayOfMonth} ${current.year}`)


















});