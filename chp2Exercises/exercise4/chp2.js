var $ = function (id) {
    return document.getElementById(id)
}

var displayMessage = function () {
    var firstName = $("firstname").value;
    var age = $("age").value;
    var ageInt = parseInt(age);
    var moreText =  "You have the same first name as the instructor.";
    var instructor = firstName == "Steve" || firstName == "Stephen";

    if (ageInt < 18 && instructor) {
        $("myMsg").innerHTML = firstName + ", you are still a minor.<br>" + moreText;
    }
    else {
        if (ageInt == 18 && instructor) {
            $("myMsg").innerHTML = firstName + ", you are now voting age!<br>" + moreText;
        }
        else {
            if (ageInt > 18 && ageInt < 65 && instructor) {
                $("myMsg").innerHTML = firstName + ", you are in your prime working years.<br>" + moreText;
            }
            else {
                if (ageInt >= 65 && instructor) {
                    $("myMsg").innerHTML = firstName + ", it is time to retire.<br>" + moreText;
                }
                else {
                    if (ageInt < 18) {
                        $("myMsg").innerHTML = firstName + ", you are still a minor.";
                    }
                    else {
                        if (ageInt == 18) {
                            $("myMsg").innerHTML = firstName + ", you are now voting age!";
                        }
                        else {
                            if (ageInt > 18 && ageInt < 65) {
                                $("myMsg").innerHTML = firstName + ", you are in your prime working years.";
                            }
                            else {
                                if (ageInt >= 65) {
                                    $("myMsg").innerHTML = firstName + ", it is time to retire.";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
window.onload = function () {
    $("myButton").onclick = displayMessage;
}