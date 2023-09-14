var $ = function (id) {
    return document.getElementById(id)
}

var displayMessage = function () {
    var myFirstName = $("firstName").value;
    var myAge = $("age").value;
    var myAgeInt = parseInt(myAge);
    var sleptHours = $("hours").value;
    var sleptHoursInt = parseInt(sleptHours);
    var years = myAgeInt * (sleptHoursInt / 24);
    var yearsRounded = Math.round(years)
    var myText = "Hi " + myFirstName + ". You have slept " 
                + yearsRounded + " years of your life away.";
    
    $("myMsg").innerHTML = myText;
}

window.onload = function () {
    $("myButton").onclick = displayMessage;
}