var $ = function (id) {
    return document.getElementById(id);
}

var guessNumbers = function () {
    var guesses = "";
    
    for (cntr = 1; cntr <=3; cntr++) {
        var guessId = "guess" + cntr;
        var guessNumber = $(guessId).value;

        if (guessNumber == "7") {
            $("msg").innerHTML = "Correct! 7 is the number I was looking for!";
            break;
        }
        else {
            $("msg").innerHTML = "None of these guesses are correct.";
        }
    }
}

window.onload = function () {
    $("myButton").onclick = guessNumbers;
}