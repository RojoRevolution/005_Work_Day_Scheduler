$(document).ready(function () {




    // gets entire moment object
    var now = moment();
    //currentStates pulls formated version of the current date
    var currentStates = {
        day: now.format('dddd'),
        month: now.format('MMM'),
        dayOfMonth: now.format('Do'),
        year: now.format('YYYY'),
        hour: now.format('h'),
        minutes: now.format('mm'),
        amPM: now.format('A')
    };

    console.log(currentStates.day);
    console.log(currentStates.month);
    console.log(currentStates.dayOfMonth);
    console.log(currentStates.year);
    console.log(`${currentStates.hour}:${currentStates.minutes} ${currentStates.amPM}`)




    // console.log(now.format('dddd'))
    // console.log(now.format('MMM'))
    // console.log(now.format('Do'))
    // console.log(now.format('YYYY'))



    // var currentDay = $('#currentDay');
    // currentDay.text(moment())


















});