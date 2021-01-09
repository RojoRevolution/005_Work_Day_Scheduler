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

    //hours var was set manually until I can figure out if a simialr array can be pulled from api
    var hours = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'];

    console.log(current.day)

    var container = $('.container')
    var row = $('.row')
    var hourDiv = /*html*/`<div class="col-2 p-3 hour">${hours[0]}</div>`;
    var textArea = /*html*/`<textarea class="col - 8 p - 3 description future"></textarea>`;
    var saveBtn = /*html*/ `<button class="col-1 saveBtn"><i class="far fa-save"></i></button>`;




    //Append Row to Container
    //Then appent content to row

    var currentDayEl = $('#currentDay');
    currentDayEl.text(`${current.day} ${current.month} ${current.dayOfMonth} ${current.year}`)

    function renderToDo() {
        for (var i = 0; i <= hours.length; i++) {
            container.append(row);
            row.append(hourDiv, textArea, saveBtn);
        }
    }

    renderToDo();

















});