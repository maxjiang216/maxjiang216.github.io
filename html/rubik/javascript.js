function holder(n) {
    "use strict";
    var x = document.getElementById("hold");
    hold = n;
    isHold = true;
}

function setColorpyra(pos) {
    "use strict";
    if (isHold) {
        var x = document.getElementsByClassName("stickerpyra");
        x[pos].style.fill = color[hold];
        state[pos] = hold;
    }
}

function cube2On() {
    "use strict";
    var x = document.getElementById("cube2");
    x.style.display = "inline";
    reset2();
    x = document.getElementById("cube3");
    x.style.display = "none";
    x = document.getElementById("cubepyra");
    x.style.display = "none";
    x = document.getElementById("cubeskewb");
    x.style.display = "none";
    x = document.getElementsByClassName("move2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline";
    }
    x = document.getElementsByClassName("move3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("movepyra");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("moveskewb");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementById("colorpicker");
    x.style.display = "inline";
    x = document.getElementById("colorpickerpyra");
    x.style.display = "none";
    solNum = solLen;
}

function cube3On() {
    "use strict";
    var x = document.getElementById("cube3");
    x.style.display = "inline";
    x = document.getElementById("cube2");
    x.style.display = "none";
    reset3();
    x = document.getElementById("cubepyra");
    x.style.display = "none";
    x = document.getElementById("cubeskewb");
    x.style.display = "none";
    x = document.getElementsByClassName("move2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("move3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline";
    }
    x = document.getElementsByClassName("movepyra");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("moveskewb");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementById("colorpicker");
    x.style.display = "inline";
    x = document.getElementById("colorpickerpyra");
    x.style.display = "none";
    solNum = solLen;
}
        
function cubepyraOn() {
    "use strict";
    var x = document.getElementById("cubepyra");
    x.style.display = "inline";
    resetPyra();
    x = document.getElementById("cube2");
    x.style.display = "none";
    x = document.getElementById("cube3");
    x.style.display = "none";
    x = document.getElementById("cubeskewb");
    x.style.display = "none";
    x = document.getElementsByClassName("move2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("move3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("movepyra");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline";
    }
    x = document.getElementsByClassName("moveskewb");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementById("colorpicker");
    x.style.display = "none";
    x = document.getElementById("colorpickerpyra");
    x.style.display = "inline";
    solNum = solLen;
}

function cubeskewbOn() {
    "use strict";
    x = document.getElementById("cubeskewb");
    x.style.display = "inline";
    resetSkewb();
    var x = document.getElementById("cube3");
    x.style.display = "none";
    x = document.getElementById("cube2");
    x.style.display = "none";
    x = document.getElementById("cubepyra");
    x.style.display = "none";
    x = document.getElementsByClassName("move2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("move3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("movepyra");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("moveskewb");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline";
    }
    x = document.getElementById("colorpicker");
    x.style.display = "inline";
    x = document.getElementById("colorpickerpyra");
    x.style.display = "none";
    solNum = solLen;
}