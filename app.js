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


    //hours var was set manually until I can figure out if a similar array can be pulled from api
    var hourList = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'];
    var hourList24 = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
    var container = $('.container')



    //================================
    // Renders all content, HTML text and assigns values for each button
    function renderToDo() {

        for (let i = 0; i < hourList.length; i++) {
            var content = /*html*/`
            <div class="row">
                <div class="col-2 p-3 hour" value="${hourList24[i]}">${hourList[i]}</div>
                <textarea id="${i}" class="col - 8 p - 3 description" value="${i}"></textarea>
                <button class="col-1 saveBtn" value="${i}"><i class="far fa-save"></i></button>
            </div >`;
            container.append(content);
            var getItemIterator = `ToDo${i}`
            var descriptionBox = $(this).parent().find(".description")
            console.log(descriptionBox)
            var getToDo = localStorage.getItem(getItemIterator);
            var parseToDo = JSON.parse(getToDo);
            // Parsed Items log but will not render to description box
            console.log(parseToDo)

            // $(".description").text(parseToDo)
            descriptionBox.text(parseToDo)
        }


        click()
        bgColor()

    }
    //================================
    //Click Event Function
    function click() {
        $(".saveBtn").on("click", function (event) {
            event.preventDefault();
            // vars use $(this) for where the click happens, goes up to parent(row), and finds the specified class and gets it's value 
            var btnValue = $(this).parent().find(".saveBtn").val();
            var text = $(this).parent().find(".description").val();
            // toDoList.push(text);
            // adding + btnValue after the key includes it in the key
            localStorage.setItem("ToDo" + btnValue, JSON.stringify(text));


        });
    }
    //================================
    //BG Color Function
    function bgColor() {
        var hourDivValue = $(".row").find(".hour").val()

        if (hourDivValue < currentHour24) {
            $(".description").addClass("past")
            // console.log("past")
        }
        if (hourDivValue === currentHour24) {
            $(".description").addClass("present")
            // console.log("present")
        }
        if (hourDivValue > currentHour24) {
            $(".description").addClass("future")
            // console.log("future")
        }
    }



    renderToDo();
});

var storageArray = [];



