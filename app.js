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
    function getItems(iterator) {
        var getItemIterator = `ToDo${iterator}`
        var getToDo = localStorage.getItem(getItemIterator);
        // console.log(getToDo)
        //Add text to textbox based on iteration
        $("#text" + iterator).text(getToDo)
    };


    //================================
    // Renders all HTML content
    function renderToDo() {

        for (let i = 0; i < hourList.length; i++) {
            // set up HTML content
            var content = /*html*/`
            <div class="row">
                <div id="hour${i}" class="col-2 p-3 hour" value="${hourList24[i]}">${hourList[i]}</div>
                <textarea id="text${i}" class="col - 8 p - 3 description past" value="${i}"></textarea>
                <button class="col-1 saveBtn" value="${i}"><i class="far fa-save"></i></button>
            </div >`;
            //add HTML content to page
            container.append(content);
            //call get items function with i as the iterator
            getItems(i)

            //call BG color function with I as the arguement
            bgColor(i)
        }
        click()
        // bgColor()


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


    console.log(`Current Time: ${currentHour24}`)


    //================================
    //BG Color Function
    function bgColor(iterator) {
        // var hourDivValue = $(".row").find(".hour" + iterator).val()
        var hourID = $("#hour" + iterator).val()
        console.log(`This is My ${hourID}`)
        // console.log(hourDivValue)
        if (hourID === currentHour24) {
            $("#text" + iterator).toggleClass("past present")
            console.log("Present");
            // alert("This Is Now")
        } else if (hourID > currentHour24) {
            $("#text" + iterator).toggleClass(" past future")
            console.log("future");
            // alert("This Is The Future")
        }
    }



    renderToDo();
});





