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
    var hourDisplay = $('.hour');

    //was trying to use a global variable to increment values on loop but has not been working
    // var value = 0;


    // console.log(incr)

    var content = /*html*/`
    <div class="row">
    <div class="col-2 p-3 hour"></div>
    <textarea class="col - 8 p - 3 description future"></textarea>
    <button class="col-1 saveBtn" value=""><i class="far fa-save"></i></button>
    </div >`;


    //================================
    //ATTEMPT #1
    // Using this approach I can set the correct BTN value only if I include the Content variable in the for loop, I tried using  a global value that updates on each loop, but all buttons received the same value of 0
    // The HTML text for the hours still only renders the last array item
    // 
    function renderToDo() {
        for (let i = 0; i < hourList.length; i++) {
            var content = /*html*/`
            <div class="row">
            <div class="col-2 p-3 hour"></div>
            <textarea class="col - 8 p - 3 description future"></textarea>
            <button class="col-1 saveBtn" value="${i}"><i class="far fa-save"></i></button>
            </div >`;
            container.append(content);
            console.log(hourList[i])
            $('.hour').text(hourList[i]);
        }
    }
    renderToDo();



    //================================
    //ATTEMPT #2
    // Tried a different approach with $.each and and a separate function after items were created
    // In the .each the correct value gets logged to the console 
    // But the HTML text only renders the last item in the hours array on the page
    // Similarly, all buttons receive the value of 8 (last item in Array)

    // $.each(hourList, function (index, value) {
    //     console.log(index, value);
    //     container.append(content);
    //     hourDisplay.html(index)
    // });

    // function addContent() {
    //     for (var i = 0; i < hourList.length; i++) {
    //         $('.hour').text(hourList[i])
    //         $('.saveBtn').attr("value", [i])
    //     }
    // }

    // addContent();




















});