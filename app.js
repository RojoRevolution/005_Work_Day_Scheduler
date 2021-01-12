$(document).ready(function () {

    //*************************//
    // Moment JS API
    //*************************//
    // gets entire moment object
    var momentJS = moment();
    //currentStates pulls formated version of the current date
    var current = {
        day: momentJS.format('dddd'),
        month: momentJS.format('MMM'),
        dayOfMonth: momentJS.format('Do'),
        year: momentJS.format('YYYY'),
        hour: momentJS.format('h'),
        hour24: momentJS.format('H'),
        hour24HH: momentJS.format('HH'),
        minutes: momentJS.format('mm'),
        amPM: momentJS.format('A'),
        complete: momentJS.format('LLLL')
    };

    //*************************//
    // Variables
    //*************************//
    // Variable CurrentDay ELappends to header to display current date
    var currentDayEl = $('#currentDay');
    currentDayEl.text(`${current.day} ${current.month} ${current.dayOfMonth} ${current.year} `)

    //currentHour grabs the current hour in 24Hour(Military) Format
    var currentHour24 = current.hour24;

    //hour list var are used for ids / data / text in the dynamic content
    var hourList = ['8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'];
    var hourList24 = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    //container selects the div we will append content to
    var container = $('.container')



    //*************************//
    // Functions
    //*************************//
    //================================
    //Get Items from Local storage
    function getItems(iterator) {
        var getItemIterator = `ToDo${iterator}`
        var getToDo = localStorage.getItem(getItemIterator);
        $("#text" + iterator).text(getToDo)
    };

    //================================
    //BG Color Function
    function bgColor() {
        $(".hour").each(function () {
            console.log($(this).attr("data-hour") + " | " + currentHour24);
            if ($(this).attr("data-hour") < currentHour24) {
                $(this).siblings(".description").addClass("past")

            }
            if ($(this).attr("data-hour") == currentHour24) {
                $(this).siblings(".description").addClass("present")

            }
            if ($(this).attr("data-hour") > currentHour24) {
                $(this).siblings(".description").addClass("future")

            }
        });
    }

    //================================
    // Renders all HTML content on load / reload
    function renderToDo() {
        //For loop will create and set each row of content
        for (let i = 0; i < hourList.length; i++) {
            // set up HTML content
            var content = /*html*/`
            <div class="row">
                <div id="${hourList[i]}" class="col-2 p-3 hour" data-hour="${hourList24[i]}">${hourList[i]}</div>
                <textarea id="text${i}" class="col - 8 p - 3 description" value="${i}" ></textarea>
                <button class="col-1 saveBtn" value="${i}"><i class="far fa-save"></i></button>
            </div >`;
            // Append HTML content to page
            container.append(content);
            //Calls the function that gets items from localStorage
            getItems(i)

        }
        //Calls function that sets the BG color for each text area
        bgColor()

        click()

    }


    //================================
    //Click Event Function
    function click() {
        $(".saveBtn").on("click", function (event) {
            event.preventDefault();
            // vars use $(this) for where the click happens, goes up to parent(row), and finds the specified class and gets it's value 
            var btnValue = $(this).parent().find(".saveBtn").val();
            var text = $(this).parent().find(".description").val();
            // Don't need to JSON.stringify because I am not storing an object
            // adding + btnValue after the key includes it in the key
            localStorage.setItem("ToDo" + btnValue, text);
        });
    }

    //Renders Content on initial page load
    renderToDo();
});





