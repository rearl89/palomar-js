var $ = function (id) {
    return document.getElementById(id);
}

var aboutYou = function () {
    //first name
    var firstName = $("firstname");
    var firstNameError = $("firstname_error");
    if (firstName.value.length == 0) { //error that shows if user doesn't enter their first name
        firstNameError.firstChild.nodeValue = "Please enter first name";
    } else {
        firstNameError.firstChild.nodeValue = "";
    }

    //last name
    var lastName = $("lastname");
    var lastNameError = $("lastname_error")
    if (lastName.value.length == 0) { //error that shows if user doesn't enter last name
        lastNameError.firstChild.nodeValue = "Please enter last name";
    } else {
        lastNameError.firstChild.nodeValue = "";
    }

    //simplifying message ID even more
        var msg = $("message");

    //number of pets
    var petCount = $("numpets");
    var numpetsError = $("numpets_error")
    if (petCount.value == "") { //error that shows if # pets is left blank by user
        numpetsError.firstChild.nodeValue = "Please enter the number of pets you have";
    } else {
        if (petCount.value > 3) { //error that shows if user enters # pets is more than 3
            numpetsError.firstChild.nodeValue = "Please enter no more than 3";
            msg.firstChild.nodeValue = "";
        } else {
           numpetsError.firstChild.nodeValue = "";
        }
    }

    //today's date with fomatting
    var today = new Date();
    var todaymm = today.getMonth() + 1;
    var todaydd = today.getDate();
    var todayyyy = today.getFullYear();
    var todayFormatted = todaymm + "-" + todaydd + "-" + todayyyy;
    
    //pet names
    var petNames = "";
    if (firstName.value.length == 0 && lastName.value.length == 0 && petCount.value == 0 || petCount.value >3) { //this prevents the final message from showing without the first 3 inputs or if someone enters # pets > 3
        msg.firstChild.nodeValue = "";
    } else {
        if (petCount.value == 0) { //this displays the message without the "Your pet..." message
            msg.firstChild.nodeValue = "Your name is listed as " + lastName.value + ", " + firstName.value + " and today's date is " + todayFormatted + ".";
        } else {
            for (let i = 1; i <= petCount.value; i++) { //for loop running through the pet names
                var pet = "pet" + i; //grabs each of the 3 pet IDs
                var petName = $(pet);
                
                petNames += "Your pet #" + i + " is " + petName.value + ". "; //message that will be appended to the end of the final message if user has pets
                
                
                msg.firstChild.nodeValue = "Your name is listed as " + lastName.value + ", " + firstName.value + " and today's date is " + todayFormatted + ". " + petNames; //final message if the user has pets
            }
        }
    }
}

//runs function when window loads
window.onload = function () {
    $("mybutton").onclick = aboutYou;
}