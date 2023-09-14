var $ = function (id) {
    return document.getElementById(id);
}

var addClass = function () {
    $("myPara").setAttribute("class", "redText");
}

window.onload = function () {
    $("myButton").onclick = addClass;
}