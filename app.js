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

    //==================================
    // Variable appends to header to display current date
    var currentDayEl = $('#currentDay');
    currentDayEl.text(`${current.day} ${current.month} ${current.dayOfMonth} ${current.year} `)

    //hours var was set manually until I can figure out if a similar array can be pulled from api
    var hourList = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'];

    var container = $('.container')

    //================================
    // Renders all content, HTML text and assigns values for each button
    function renderToDo() {
        for (let i = 0; i < hourList.length; i++) {
            var content = /*html*/`
            <div class="row">
                <div class="col-2 p-3 hour">${hourList[i]}</div>
                <textarea class="col - 8 p - 3 description future"></textarea>
                <button class="col-1 saveBtn" value="${i}"><i class="far fa-save"></i></button>
            </div >`;
            container.append(content);
        }
    }
    renderToDo();

















});