//Array Roll Through (Rotator)
//A simple class replacer for FA icons so that rotate, no css included
var iconList = []; //Fill in array here see below example
//var iconList = ["fab fa-js fa-7x", "fab fa-php fa-7x", "fab fa-html5 fa-7x"];
var count = 0;

//Call the fucntion by passing the elements ID into the function and the array you wish to use.  
function iconRoatation(elem, array) {
    var listL = array.length;
    var element = document.getElementById = elem;
    console.log(element);
    
    rotation(array, listL, element);
 
}

function rotation(icons, listLength, elem) {
     setInterval(function () {
    elem.className = icons[(++count) % listLength];
    console.log("here");
 
}, 3000);
}
