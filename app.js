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
        hour24: momentJS.format('H'),
        hour24HH: momentJS.format('HH'),
        minutes: momentJS.format('mm'),
        amPM: momentJS.format('A'),
        complete: momentJS.format('LLLL')
    };



    //==================================
    // Variable appends to header to display current date
    var currentDayEl = $('#currentDay');
    currentDayEl.text(`${current.day} ${current.month} ${current.dayOfMonth} ${current.year} `)

    // var currentHour = current.hour

    var currentHour24 = current.hour24;
    console.log("Current Hour: " + currentHour24)
    var hourTest = 13;


    //hours var was set manually until I can figure out if a similar array can be pulled from api
    var hourList = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'];
    var hourList24 = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var container = $('.container')



    //================================
    //Get Items from Local storage
    function getItems(iterator) {
        var getItemIterator = `ToDo${iterator}`
        var getToDo = localStorage.getItem(getItemIterator);
        // console.log(getToDo)
        //Add text to textbox based on iteration
        $("#text" + iterator).text(getToDo)
    };

    //================================
    //BG Color Function
    // Using hourTest which is set to a single number seems to work just fine
    // function bgColor() {
    //     $(".hour").each(function () {
    //         console.log($(this).attr("data-hour") + " | " + currentHour24);
    //         if ($(this).attr("data-hour") < hourTest) {
    //             $(this).siblings(".description").addClass("past")
    //             console.log("Past");
    //         }
    //         if ($(this).attr("data-hour") == hourTest) {
    //             $(this).siblings(".description").addClass("present")
    //             console.log("Present");
    //         }
    //         if ($(this).attr("data-hour") > hourTest) {
    //             $(this).siblings(".description").addClass("future")
    //             console.log("future");
    //         }
    //     });
    // }

    // using the current hour from Moment JS does not work the same
    function bgColor() {
        $(".hour").each(function () {
            console.log($(this).attr("data-hour") + " | " + currentHour24);
            if ($(this).attr("data-hour") < currentHour24) {
                $(this).siblings(".description").addClass("past")
                console.log("Past");
            }
            if ($(this).attr("data-hour") == currentHour24) {
                $(this).siblings(".description").addClass("present")
                console.log("Present");
            }
            if ($(this).attr("data-hour") > currentHour24) {
                $(this).siblings(".description").addClass("future")
                console.log("future");
            }
        });
    }



    //================================
    // Renders all HTML content
    function renderToDo() {
        //For loop will create and set each row of content
        for (let i = 0; i < hourList.length; i++) {
            // set up HTML content
            var content = /*html*/`
            <div class="row">
                <div id="${hourList[i]}" class="col-2 p-3 hour" data-hour="${hourList24[i]}">${hourList[i]}</div>
                <textarea id="toDo" class="col - 8 p - 3 description" value="${i}" ></textarea>
                <button class="col-1 saveBtn" value="${i}"><i class="far fa-save"></i></button>
            </div >`;
            // Append HTML content to page
            container.append(content);
            getItems(i)

        }
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





    renderToDo();
});





