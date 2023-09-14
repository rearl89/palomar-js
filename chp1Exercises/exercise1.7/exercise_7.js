var $ = function (id) {
    return document.getElementById(id);
}

var displayMessage = function () {
    var rectWidth = $("width").value;
    var rectHeight = $("length").value;
    var rectWidthInt = parseInt(rectWidth);
    var rectHeightInt = parseInt(rectHeight);
    var rectArea = rectWidthInt * rectHeightInt;
    var myText = "The area of a rectangle that is " + rectWidthInt + " feet wide and " 
                + rectHeightInt + " feet tall is " + rectArea + " square feet.";

    $("mymsg").innerHTML = myText;
}

window.onload = function () {
    $("mybutton").onclick = displayMessage;
}