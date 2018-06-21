/*
=====================================
Icon Array Rotator
===================================== 
*/
//A simple class replacer for FA icons so that rotate, no css included
var iconList = []; //Fill in array here see below example
//var iconList = ["fab fa-js fa-7x", "fab fa-php fa-7x", "fab fa-html5 fa-7x"];
var count = 0;

//Call the fucntion by passing the elements ID into the function and the array you wish to use.  
function iconRoatation(elem, array) {
    var listL = array.length;
    var element = document.getElementById = elem;
    rotation(array, listL, element);
}

function rotation(icons, listLength, elem) {
    setInterval(function () {
        elem.className = icons[(++count) % listLength];
    }, 3000);
}

/*
=====================================
Client Time with Message
===================================== 
*/
function timeMessage(elem, time) {
    var element = document.getElementById = elem;
    //If user doesn't want to specify time, or alter it, time will be called.
    if (elem == null && time == null) {

        return console.error('Usage: timeMessage(element, time)');
    }
    else if (time == null) {
        time = new Date().getHours();

    }
    //Day time definition based on office hours
    if (time >= 9 && time <= 16) {
        console.log("Office Hours"); //Console Log Message
        element.innerHTML = "Office Hours" //Note the if statements override this message
        //Good Morning
        if (time >= 9 && time < 12) {
            console.log("Good Morning!");
            element.innerHTML = "Good Morning!";
        } else {
            console.log("Good Afternoon!");
            element.innerHTML = "Good Afternoon!";
        }
    } else {
        console.log("It is outside of office hours!");
        element.innerHTML = "It is outside of office hours!"; //Note the if statements override this message
        if (time >= 16 && time < 21) {
            console.log("Good evening!");
            element.innerHTML = ("Good evening!");
        }
        else if (time >= 21 && time < 23) {
            console.log("Good Night!");
            element.innerHTML = "Good Night!";
        }
        else if (time >= 23 || time < 4) {
            console.log("What are you doing up? It's really late!");
            element.innerHTML = "What are you doing up? It's really late!";
        } else {
            console.log("It's a bit early for me");
            element.innerHTML = "It's a bit early for me";
        }


    }
}
