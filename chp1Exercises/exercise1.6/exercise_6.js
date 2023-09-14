var $ = function (id) {
    return document.getElementById(id);
}

var displayGreeting = function () {
    var myFirstName = $("firstname").value;
    var myLastName = $("lastname").value;
    var myText = "Hi " + myFirstName + " " + myLastName;
    $("mymsg").innerHTML = myText;
}

window.onload = function () {
    $("mybutton").onclick = displayGreeting;
}