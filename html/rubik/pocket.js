function setColor2(pos) {
    "use strict";
    if (isHold) {
        var x = document.getElementsByClassName("sticker2");
        x[pos].style.fill = color[hold];
    }
    solNum = solLen;
}

function reset2() {
    "use strict";
    var x = document.getElementsByClassName("sticker2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.fill = color[Math.floor(i/4)];
    }
    solNum = solLen;
}

function doSolution2() {
    "use strict";
    if (solNum < solLen) {
        doMove2(Math.floor(sol[solNum]/3)*6+sol[solNum]%3);
        solNum++;
    }
}

function doMove2(n) {
    "use strict";
    var x = document.getElementsByClassName("sticker2"),
        temp;
    switch (n) {
    case 0:
        temp = x[0].style.fill;
        x[0].style.fill = x[3].style.fill;
        x[3].style.fill = x[2].style.fill;
        x[2].style.fill = x[1].style.fill;
        x[1].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[20].style.fill;
        x[20].style.fill = x[16].style.fill;
        x[16].style.fill = x[8].style.fill;
        x[8].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[21].style.fill;
        x[21].style.fill = x[17].style.fill;
        x[17].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        break;
    case 1:
        temp = x[1].style.fill;
        x[1].style.fill = x[9].style.fill;
        x[9].style.fill = x[13].style.fill;
        x[13].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[10].style.fill;
        x[10].style.fill = x[14].style.fill;
        x[14].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[7].style.fill;
        x[7].style.fill = x[6].style.fill;
        x[6].style.fill = x[5].style.fill;
        x[5].style.fill = temp;
        break;
    case 2:
        temp = x[2].style.fill;
        x[2].style.fill = x[17].style.fill;
        x[17].style.fill = x[12].style.fill;
        x[12].style.fill = x[7].style.fill;
        x[7].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[18].style.fill;
        x[18].style.fill = x[13].style.fill;
        x[13].style.fill = x[4].style.fill;
        x[4].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[11].style.fill;
        x[11].style.fill = x[10].style.fill;
        x[10].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        break;
    case 3:
        temp = x[6].style.fill;
        x[6].style.fill = x[10].style.fill;
        x[10].style.fill = x[18].style.fill;
        x[18].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[11].style.fill;
        x[11].style.fill = x[19].style.fill;
        x[19].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        temp = x[12].style.fill;
        x[12].style.fill = x[15].style.fill;
        x[15].style.fill = x[14].style.fill;
        x[14].style.fill = x[13].style.fill;
        x[13].style.fill = temp;
        break;
    case 4:
        temp = x[0].style.fill;
        x[0].style.fill = x[22].style.fill;
        x[22].style.fill = x[12].style.fill;
        x[12].style.fill = x[8].style.fill;
        x[8].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[21].style.fill;
        x[21].style.fill = x[15].style.fill;
        x[15].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[19].style.fill;
        x[19].style.fill = x[18].style.fill;
        x[18].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        break;
    case 5:
        temp = x[0].style.fill;
        x[0].style.fill = x[5].style.fill;
        x[5].style.fill = x[14].style.fill;
        x[14].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[6].style.fill;
        x[6].style.fill = x[15].style.fill;
        x[15].style.fill = x[16].style.fill;
        x[16].style.fill = temp;
        temp = x[20].style.fill;
        x[20].style.fill = x[23].style.fill;
        x[23].style.fill = x[22].style.fill;
        x[22].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        break;
            
    case 6:
        temp = x[0].style.fill;
        x[0].style.fill = x[1].style.fill;
        x[1].style.fill = x[2].style.fill;
        x[2].style.fill = x[3].style.fill;
        x[3].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[8].style.fill;
        x[8].style.fill = x[16].style.fill;
        x[16].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[9].style.fill;
        x[9].style.fill = x[17].style.fill;
        x[17].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        break;
    case 7:
        temp = x[1].style.fill;
        x[1].style.fill = x[23].style.fill;
        x[23].style.fill = x[13].style.fill;
        x[13].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[20].style.fill;
        x[20].style.fill = x[14].style.fill;
        x[14].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[5].style.fill;
        x[5].style.fill = x[6].style.fill;
        x[6].style.fill = x[7].style.fill;
        x[7].style.fill = temp;
        break;
    case 8:
        temp = x[2].style.fill;
        x[2].style.fill = x[7].style.fill;
        x[7].style.fill = x[12].style.fill;
        x[12].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[4].style.fill;
        x[4].style.fill = x[13].style.fill;
        x[13].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[9].style.fill;
        x[9].style.fill = x[10].style.fill;
        x[10].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        break;
    case 9:
        temp = x[6].style.fill;
        x[6].style.fill = x[22].style.fill;
        x[22].style.fill = x[18].style.fill;
        x[18].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[23].style.fill;
        x[23].style.fill = x[19].style.fill;
        x[19].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        temp = x[12].style.fill;
        x[12].style.fill = x[13].style.fill;
        x[13].style.fill = x[14].style.fill;
        x[14].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        break;
    case 10:
        temp = x[0].style.fill;
        x[0].style.fill = x[8].style.fill;
        x[8].style.fill = x[12].style.fill;
        x[12].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[11].style.fill;
        x[11].style.fill = x[15].style.fill;
        x[15].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[17].style.fill;
        x[17].style.fill = x[18].style.fill;
        x[18].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        break;
    case 11:
        temp = x[0].style.fill;
        x[0].style.fill = x[19].style.fill;
        x[19].style.fill = x[14].style.fill;
        x[14].style.fill = x[5].style.fill;
        x[5].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[16].style.fill;
        x[16].style.fill = x[15].style.fill;
        x[15].style.fill = x[6].style.fill;
        x[6].style.fill = temp;
        temp = x[20].style.fill;
        x[20].style.fill = x[21].style.fill;
        x[21].style.fill = x[22].style.fill;
        x[22].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        break;
            
    case 12:
        temp = x[0].style.fill;
        x[0].style.fill = x[2].style.fill;
        x[2].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[3].style.fill;
        x[3].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[16].style.fill;
        x[16].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        temp = x[9].style.fill;
        x[9].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        break;
    case 13:
        temp = x[1].style.fill;
        x[1].style.fill = x[13].style.fill;
        x[13].style.fill = temp;
        temp = x[23].style.fill;
        x[23].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        temp = x[20].style.fill;
        x[20].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[6].style.fill;
        x[6].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[7].style.fill;
        x[7].style.fill = temp;
        break;
    case 14:
        temp = x[2].style.fill;
        x[2].style.fill = x[12].style.fill;
        x[12].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[13].style.fill;
        x[13].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[9].style.fill;
        x[9].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        break;
    case 15:
        temp = x[6].style.fill;
        x[6].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[22].style.fill;
        x[22].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        temp = x[23].style.fill;
        x[23].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        temp = x[12].style.fill;
        x[12].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        temp = x[13].style.fill;
        x[13].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        break;
    case 16:
        temp = x[0].style.fill;
        x[0].style.fill = x[12].style.fill;
        x[12].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        temp = x[11].style.fill;
        x[11].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[17].style.fill;
        x[17].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        break;
    default:
        temp = x[0].style.fill;
        x[0].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        temp = x[19].style.fill;
        x[19].style.fill = x[5].style.fill;
        x[5].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[6].style.fill;
        x[6].style.fill = temp;
        temp = x[20].style.fill;
        x[20].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[21].style.fill;
        x[21].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        break;
    }
}

function scramble2() {
    "use strict";
    for (var i = 0; i < 100; i++) {
        doMove2(Math.floor(Math.random()*18));
    }
    solNum = solLen;
}

function isSolved2(state) {
    "use strict";
    var out = true;
    for (var i = 0; i < 6; i++) {
        if (!(state[4*i] == state[4*i+1] && state[4*i+1] == state[4*i+2] && state[4*i+1] == state[4*i+3])) {
            out = false;
            break;
        }
    }
    
    return out;
}

function isValid2() {
    "use strict";
    var x = document.getElementsByClassName("sticker2"),
        cube = [];
    for (var i = 0; i < 24; i++) {
        cube[i] = x[i].style.fill;
    }
    var out = true, count = [0, 0, 0, 0, 0, 0],
        ocount = 0, temp;
    for (var i = 0; i < 24; i++) {
        for (var j = 0; j < 6; j++) {
            if (cube[i] == color[j]) {
                count[j]++;
                break;
            }
        }
    }
    for (var i = 0; i < 6; i++) {
        if (count[i] != 4) {
            out = false;
            break;
        }
    }
    if (out) {
        for (var i = 0; i < 8; i++) {
            temp = findOrient(cube, i);
            if (temp == -1) {
                out = false;
                break;
            }
            else {
                ocount += temp;
            }
        }
    }
    if (ocount % 3) {
        out = false;
    }
    
    return out;
}

function findOrient(cube, n) {
    "use strict";
    var corner = [];
    switch (n) {
        case 0:
            corner.push(cube[0]);
            corner.push(cube[21]);
            corner.push(cube[16]);
            break;
        case 1:
            corner.push(cube[1]);
            corner.push(cube[5]);
            corner.push(cube[20]);
            break;
        case 2:
            corner.push(cube[2]);
            corner.push(cube[9]);
            corner.push(cube[4]);
            break;
        case 3:
            corner.push(cube[3]);
            corner.push(cube[17]);
            corner.push(cube[8]);
            break;
        case 4:
            corner.push(cube[12]);
            corner.push(cube[11]);
            corner.push(cube[18]);
            break;
        case 5:
            corner.push(cube[13]);
            corner.push(cube[7]);
            corner.push(cube[10]);
            break;
        case 6:
            corner.push(cube[14]);
            corner.push(cube[23]);
            corner.push(cube[6]);
            break;
        default:
            corner.push(cube[15]);
            corner.push(cube[19]);
            corner.push(cube[22]);
    }
    var out = -1;
    if (contains(corner, color[0]) &&
        contains(corner, color[4]) &&
        contains(corner, color[5]) &&
        corner[contains(corner, color[0]) % 3] == color[5]) {
        out = contains(corner, color[0]) - 1;
    }
    else if (contains(corner, color[0]) &&
             contains(corner, color[1]) &&
             contains(corner, color[5]) &&
             corner[contains(corner, color[0]) % 3] == color[1]) {
        out = contains(corner, color[0]) - 1;
    }
    else if (contains(corner, color[0]) &&
             contains(corner, color[1]) &&
             contains(corner, color[2]) &&
             corner[contains(corner, color[0]) % 3] == color[2]) {
        out = contains(corner, color[0]) - 1;
    }
    else if (contains(corner, color[0]) &&
             contains(corner, color[2]) &&
             contains(corner, color[4]) &&
             corner[contains(corner, color[0]) % 3] == color[4]) {
        out = contains(corner, color[0]) - 1;
    }
    else if (contains(corner, color[3]) &&
             contains(corner, color[2]) &&
             contains(corner, color[4]) &&
             corner[contains(corner, color[3]) % 3] == color[2]) {
        out = contains(corner, color[3]) - 1;
    }
    else if (contains(corner, color[3]) &&
             contains(corner, color[1]) &&
             contains(corner, color[2]) &&
             corner[contains(corner, color[3]) % 3] == color[1]) {
        out = contains(corner, color[3]) - 1;
    }
    else if (contains(corner, color[3]) &&
             contains(corner, color[1]) &&
             contains(corner, color[5]) &&
             corner[contains(corner, color[3]) % 3] == color[5]) {
        out = contains(corner, color[3]) - 1;
    }
    else if (contains(corner, color[3]) &&
             contains(corner, color[4]) &&
             contains(corner, color[5]) &&
             corner[contains(corner, color[3]) % 3] == color[4]) {
        out = contains(corner, color[3]) - 1;
    }
    
    return out;
}
        
function contains(s, c) {
    var out = 0;
    for (var i = 0; i < 3; i++) {
        if (s[i] == c) {
            out = i + 1;
            break;
        }
    }
    return out;
}

function copyCube2() {
    var x = document.getElementsByClassName("sticker2"), out = [];
    for (var i = 0; i < 24; i++) {
        out.push(x[i].style.fill);
    }
    return out;
}

function solveByMove2(cube, maxlen, lastmove, currlen) {
    var solution, partial,
        tempcube, done = false;
    for (var i = 0; i < 9; i++) {
        if (lastmove % 3 != i % 3 || currlen == 1) {
            solution = [];
            tempcube=[];
            for(var j=0;j<24;j++){
                tempcube.push(cube[j]);
            }
            doRUF2(tempcube, i);
            solution.push(i);
            if(currlen==maxlen && isSolved2(tempcube)){
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial=solveByMove2(tempcube, maxlen, i, currlen+1);
                if(partial[0] != -1) {
                    for(var j=0;j<partial.length;j++){
                        solution.push(partial[j]);
                    }
                    done=true;
                    break;
                }
            }
        }
    }
    
    if(!done){
        solution=[-1];
    }
    return solution;
    
}

function completeSolve2() {
    var solution, cube = copyCube2();
    if (!isValid2()) {
        document.getElementById('solution2').innerHTML = "Invalid state";
    }
    else if (isSolved2(cube)) {
        document.getElementById('solution2').innerHTML = "Already solved";
    }
    else {
        for (var i = 1; i < 12; i++) {
            solution = solveByMove2(cube, i, 0, 1);
            if (solution[0]!=-1) {
                break;
            }
        }
        var out = "", str = translate2(solution);
        sol = solution;
        for (var i = 0; i < str.length; i++) {
            out = out + str[i] + ' ';
        }
        document.getElementById('solution2').innerHTML = out;
        solLen = sol.length;
        solNum = 0;
    }
    return solution;
}

function translate2(solution) {
    var out = [];
    for(var i = 0; i < solution.length; i++) {
        switch(solution[i]){
            case 0:
                out.push('U');
                break;
            case 1:
                out.push('R');
                break;
            case 2:
                out.push('F');
                break;
            case 3:
                out.push("U'");
                break;
            case 4:
                out.push("R'");
                break;
            case 5:
                out.push("F'");
                break;
            case 6:
                out.push('U2');
                break;
            case 7:
                out.push('R2');
                break;
            default:
                out.push('F2');
        }
    }
    return out;
}

function doRUF2(x, n) {
    "use strict";
    var temp;
    switch (n) {
    case 0:
        temp = x[0];
        x[0] = x[3];
        x[3] = x[2];
        x[2] = x[1];
        x[1] = temp;
        temp = x[4];
        x[4] = x[20];
        x[20] = x[16];
        x[16] = x[8];
        x[8] = temp;
        temp = x[5];
        x[5] = x[21];
        x[21] = x[17];
        x[17] = x[9];
        x[9] = temp;
        break;
    case 1:
        temp = x[1];
        x[1] = x[9];
        x[9] = x[13];
        x[13] = x[23];
        x[23] = temp;
        temp = x[2];
        x[2] = x[10];
        x[10] = x[14];
        x[14] = x[20];
        x[20] = temp;
        temp = x[4];
        x[4] = x[7];
        x[7] = x[6];
        x[6] = x[5];
        x[5] = temp;
        break;
    case 2:
        temp = x[2];
        x[2] = x[17];
        x[17] = x[12];
        x[12] = x[7];
        x[7] = temp;
        temp = x[3];
        x[3] = x[18];
        x[18] = x[13];
        x[13] = x[4];
        x[4] = temp;
        temp = x[8];
        x[8] = x[11];
        x[11] = x[10];
        x[10] = x[9];
        x[9] = temp;
        break;
            
    case 3:
        temp = x[0];
        x[0] = x[1];
        x[1] = x[2];
        x[2] = x[3];
        x[3] = temp;
        temp = x[4];
        x[4] = x[8];
        x[8] = x[16];
        x[16] = x[20];
        x[20] = temp;
        temp = x[5];
        x[5] = x[9];
        x[9] = x[17];
        x[17] = x[21];
        x[21] = temp;
        break;
    case 4:
        temp = x[1];
        x[1] = x[23];
        x[23] = x[13];
        x[13] = x[9];
        x[9] = temp;
        temp = x[2];
        x[2] = x[20];
        x[20] = x[14];
        x[14] = x[10];
        x[10] = temp;
        temp = x[4];
        x[4] = x[5];
        x[5] = x[6];
        x[6] = x[7];
        x[7] = temp;
        break;
    case 5:
        temp = x[2];
        x[2] = x[7];
        x[7] = x[12];
        x[12] = x[17];
        x[17] = temp;
        temp = x[3];
        x[3] = x[4];
        x[4] = x[13];
        x[13] = x[18];
        x[18] = temp;
        temp = x[8];
        x[8] = x[9];
        x[9] = x[10];
        x[10] = x[11];
        x[11] = temp;
        break;
            
    case 6:
        temp = x[0];
        x[0] = x[2];
        x[2] = temp;
        temp = x[1];
        x[1] = x[3];
        x[3] = temp;
        temp = x[4];
        x[4] = x[16];
        x[16] = temp;
        temp = x[8];
        x[8] = x[20];
        x[20] = temp;
        temp = x[5];
        x[5] = x[17];
        x[17] = temp;
        temp = x[9];
        x[9] = x[21];
        x[21] = temp;
        break;
    case 7:
        temp = x[1];
        x[1] = x[13];
        x[13] = temp;
        temp = x[23];
        x[23] = x[9];
        x[9] = temp;
        temp = x[2];
        x[2] = x[14];
        x[14] = temp;
        temp = x[20];
        x[20] = x[10];
        x[10] = temp;
        temp = x[4];
        x[4] = x[6];
        x[6] = temp;
        temp = x[5];
        x[5] = x[7];
        x[7] = temp;
        break;
    case 8:
        temp = x[2];
        x[2] = x[12];
        x[12] = temp;
        temp = x[7];
        x[7] = x[17];
        x[17] = temp;
        temp = x[3];
        x[3] = x[13];
        x[13] = temp;
        temp = x[4];
        x[4] = x[18];
        x[18] = temp;
        temp = x[8];
        x[8] = x[10];
        x[10] = temp;
        temp = x[9];
        x[9] = x[11];
        x[11] = temp;
        break;
    }
}
