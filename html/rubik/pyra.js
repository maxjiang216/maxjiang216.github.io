function setColorPyra(pos) {
    "use strict";
    if (isHold) {
        var x = document.getElementsByClassName("stickerpyra");
        x[pos].style.fill = colorpyra[hold];
    }
    solNum = solLen;
}

function resetPyra() {
    "use strict";
    var x = document.getElementsByClassName("stickerpyra");
    for (var i = 0; i < x.length; i++) {
        x[i].style.fill = colorpyra[Math.floor(i/9)];
    }
    solNum = solLen;
}

function doSolutionPyra() {
    "use strict";
    if (solNum < solLen) {
        doMovePyra(sol[solNum]);
        solNum++;
    }
}

function doMovePyra(n) {
    "use strict";
    var x = document.getElementsByClassName("stickerpyra"),
        temp;
    switch (n) {
    case 0:
        temp = x[0].style.fill;
        x[0].style.fill = x[35].style.fill;
        x[35].style.fill = x[13].style.fill;
        x[13].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[30].style.fill;
        x[30].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[34].style.fill;
        x[34].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[33].style.fill;
        x[33].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        break;
    case 1:
        temp = x[8].style.fill;
        x[8].style.fill = x[26].style.fill;
        x[26].style.fill = x[27].style.fill;
        x[27].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[24].style.fill;
        x[24].style.fill = x[28].style.fill;
        x[28].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[25].style.fill;
        x[25].style.fill = x[29].style.fill;
        x[29].style.fill = temp;
        temp = x[6].style.fill;
        x[6].style.fill = x[21].style.fill;
        x[21].style.fill = x[30].style.fill;
        x[30].style.fill = temp;
        break;
    case 2:
        temp = x[4].style.fill;
        x[4].style.fill = x[9].style.fill;
        x[9].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[12].style.fill;
        x[12].style.fill = x[24].style.fill;
        x[24].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[11].style.fill;
        x[11].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        temp = x[6].style.fill;
        x[6].style.fill = x[10].style.fill;
        x[10].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        break;
    case 3:
        temp = x[17].style.fill;
        x[17].style.fill = x[31].style.fill;
        x[31].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[15].style.fill;
        x[15].style.fill = x[28].style.fill;
        x[28].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[32].style.fill;
        x[32].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[12].style.fill;
        x[12].style.fill = x[33].style.fill;
        x[33].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        break;
    case 4:
        doMovePyra(0);
        doMovePyra(0);
        break;
    case 5:
        doMovePyra(1);
        doMovePyra(1);
        break;
    case 6:
        doMovePyra(2);
        doMovePyra(2);
        break;
    case 7:
        doMovePyra(3);
        doMovePyra(3);
        break;
            
    case 8:
        temp = x[0].style.fill;
        x[0].style.fill = x[35].style.fill;
        x[35].style.fill = x[13].style.fill;
        x[13].style.fill = temp;
        break;
    case 9:
        temp = x[8].style.fill;
        x[8].style.fill = x[26].style.fill;
        x[26].style.fill = x[27].style.fill;
        x[27].style.fill = temp;
        break;
    case 10:
        temp = x[4].style.fill;
        x[4].style.fill = x[9].style.fill;
        x[9].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        break;
    case 11:
        temp = x[17].style.fill;
        x[17].style.fill = x[31].style.fill;
        x[31].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        break;
    case 12:
        doMovePyra(8);
        doMovePyra(8);
        break;
    case 13:
        doMovePyra(9);
        doMovePyra(9);
        break;
    case 14:
        doMovePyra(10);
        doMovePyra(10);
        break;
    default:
        doMovePyra(11);
        doMovePyra(11);
    }
}

function scramblePyra() {
    "use strict";
    for (var i = 0; i < 100; i++) {
        doMovePyra(Math.floor(Math.random()*16));
    }
    solNum = solLen;
}

function noTipsSolved(state) {
    "use strict";
    var out = true;
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j < 8; j++) {
            if (j != 4 && state[9*i+j] != state[9*i+1]) {
                out = false;
                break;
            }
        }
    }
    return out;
}

function isSolvedPyra(state) {
    "use strict";
    var out = true;
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 9; j++) {
            if (state[9*i+j] != state[9*i]) {
                out = false;
                break;
            }
        }
    }
    return out;
}

function isValidPyra() {
    "use strict";
    var x = document.getElementsByClassName("stickerpyra"),
        cube = [];
    for (var i = 0; i < 36; i++) {
        cube[i] = x[i].style.fill;
    }
    var out = true, count = [0, 0, 0, 0], temp;
    for (var i = 0; i < 36; i++) {
        for (var j = 0; j < 4; j++) {
            if (cube[i] == colorpyra[j]) {
                count[j]++;
                break;
            }
        }
    }
    for (var i = 0; i < 4; i++) {
        if (count[i] != 9) {
            out = false;
            break;
        }
    }
    return out;
}

function copyCubePyra() {
    var x = document.getElementsByClassName("stickerpyra"), out = [];
    for (var i = 0; i < 36; i++) {
        out.push(x[i].style.fill);
    }
    return out;
}

function solveByMovePyra(cube, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial,
        tempcube, done = false;
    for (var i = 0; i < 8; i++) {
        if (lastmove % 4 != i % 4 || currlen == 1) {
            solution = [];
            tempcube = [];
            for (var j = 0; j < 36; j++) {
                tempcube.push(cube[j]);
            }
            doSolMovePyra(tempcube, i);
            solution.push(i);
            if (currlen == maxlen && noTipsSolved(tempcube)) {
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial = solveByMovePyra(tempcube, maxlen, i, currlen + 1);
                if (partial[0] != -1) {
                    for (var j = 0; j < partial.length; j++) {
                        solution.push(partial[j]);
                    }
                    done = true;
                    break;
                }
            }
        }
    }
    if (!done) {
        solution = [-1];
    }
    return solution;   
}

function solveTips(cube, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial,
        tempcube, done = false;
    for (var i = 8; i < 16; i++) {
        if (lastmove % 4 != i % 4 || currlen == 1) {
            solution = [];
            tempcube = [];
            for (var j = 0; j < 36; j++) {
                tempcube.push(cube[j]);
            }
            doSolMovePyra(tempcube, i);
            solution.push(i);
            if (currlen == maxlen && isSolvedPyra(tempcube)) {
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial = solveTips(tempcube, maxlen, i, currlen + 1);
                if (partial[0] != -1) {
                    for (var j = 0; j < partial.length; j++) {
                        solution.push(partial[j]);
                    }
                    done = true;
                    break;
                }
            }
        }
    }
    if (!done) {
        solution = [-1];
    }
    return solution;
}

function completeSolvePyra() {
    "use strict";
    var solution = [], cube = copyCubePyra(), temp;
    if (!isValidPyra()) {
        document.getElementById('solutionpyra').innerHTML = "Invalid state";
    }
    else if (isSolvedPyra(cube)) {
        document.getElementById('solutionpyra').innerHTML = "Already solved";
    }
    else {
        if (!noTipsSolved(cube)) {
            for (var i = 1; i < 12; i++) {
                solution = solveByMovePyra(cube, i);
                if (solution[0] != -1) {
                    for (var j = 0; j < solution.length; j++) {
                        doSolMovePyra(cube, solution[j]);
                    }
                    break;
                }
            }
        }
        for (var i = 1; i < 5; i++) {
            temp = solveTips(cube, i);
            if (temp[0] != -1) {
                for (var j = 0; j < temp.length; j++) {
                    solution.push(temp[j]);
                }
                break;
            }
        }
        if (temp[0] == -1) {
            document.getElementById('solutionpyra').innerHTML = "Invalid state";
        }
        else {
            var out = "", str = translatePyra(solution);
            sol = solution;
            for (var i = 0; i < str.length; i++) {
                out = out + str[i] + ' ';
            }
            document.getElementById('solutionpyra').innerHTML = out;
            solLen = sol.length;
            solNum = 0;
        }
    }
    return solution;
}

function translatePyra(solution) {
    var out = [];
    for(var i = 0; i < solution.length; i++) {
        switch (solution[i] % 4) {
            case 0:
                out.push('U');
                break;
            case 1:
                out.push('R');
                break;
            case 2:
                out.push('L');
                break;
            default:
                out.push('B');
        }
        switch (Math.floor(solution[i] / 4)) {
            case 1:
                out[i] += "'";
                break;
            case 2:
                out[i] = out[i].toLowerCase();
                break;
            case 3:
                out[i] = out[i].toLowerCase() + "'";
        }
    }
    return out;
}

function doSolMovePyra(x, n) {
    var temp;
    switch (n) {
    case 0:
        temp = x[0];
        x[0] = x[35];
        x[35] = x[13];
        x[13] = temp;
        temp = x[1];
        x[1] = x[30];
        x[30] = x[15];
        x[15] = temp;
        temp = x[2];
        x[2] = x[34];
        x[34] = x[14];
        x[14] = temp;
        temp = x[3];
        x[3] = x[33];
        x[33] = x[10];
        x[10] = temp;
        break;
    case 1:
        temp = x[8];
        x[8] = x[26];
        x[26] = x[27];
        x[27] = temp;
        temp = x[3];
        x[3] = x[24];
        x[24] = x[28];
        x[28] = temp;
        temp = x[7];
        x[7] = x[25];
        x[25] = x[29];
        x[29] = temp;
        temp = x[6];
        x[6] = x[21];
        x[21] = x[30];
        x[30] = temp;
        break;
    case 2:
        temp = x[4];
        x[4] = x[9];
        x[9] = x[22];
        x[22] = temp;
        temp = x[1];
        x[1] = x[12];
        x[12] = x[24];
        x[24] = temp;
        temp = x[5];
        x[5] = x[11];
        x[11] = x[23];
        x[23] = temp;
        temp = x[6];
        x[6] = x[10];
        x[10] = x[19];
        x[19] = temp;
        break;
    case 3:
        temp = x[17];
        x[17] = x[31];
        x[31] = x[18];
        x[18] = temp;
        temp = x[15];
        x[15] = x[28];
        x[28] = x[19];
        x[19] = temp;
        temp = x[16];
        x[16] = x[32];
        x[32] = x[20];
        x[20] = temp;
        temp = x[12];
        x[12] = x[33];
        x[33] = x[21];
        x[21] = temp;
        break;
    case 4:
        doSolMovePyra(x,0);
        doSolMovePyra(x,0);
        break;
    case 5:
        doSolMovePyra(x,1);
        doSolMovePyra(x,1);
        break;
    case 6:
        doSolMovePyra(x,2);
        doSolMovePyra(x,2);
        break;
    case 7:
        doSolMovePyra(x,3);
        doSolMovePyra(x,3);
        break;
            
    case 8:
        temp = x[0];
        x[0] = x[35];
        x[35] = x[13];
        x[13] = temp;
        break;
    case 9:
        temp = x[8];
        x[8] = x[26];
        x[26] = x[27];
        x[27] = temp;
        break;
    case 10:
        temp = x[4];
        x[4] = x[9];
        x[9] = x[22];
        x[22] = temp;
        break;
    case 11:
        temp = x[17];
        x[17] = x[31];
        x[31] = x[18];
        x[18] = temp;
        break;
    case 12:
        doSolMovePyra(x,8);
        doSolMovePyra(x,8);
        break;
    case 13:
        doSolMovePyra(x,9);
        doSolMovePyra(x,9);
        break;
    case 14:
        doSolMovePyra(x,10);
        doSolMovePyra(x,10);
        break;
    default:
        doSolMovePyra(x,11);
        doSolMovePyra(x,11);
    }
}
