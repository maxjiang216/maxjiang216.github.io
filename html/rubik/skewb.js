function setColorSkewb(pos) {
    "use strict";
    if (isHold) {
        var x = document.getElementsByClassName("stickerskewb");
        x[pos].style.fill = color[hold];
    }
    solNum = solLen;
}

function resetSkewb() {
    "use strict";
    var x = document.getElementsByClassName("stickerskewb");
    for (var i = 0; i < x.length; i++) {
        x[i].style.fill = color[Math.floor(i/5)];
    }
    solNum = solLen;
}

function doSolutionSkewb() {
    "use strict";
    if (solNum < solLen) {
        doMoveSkewb(sol[solNum]);
        solNum++;
    }
}

function doMoveSkewb(n) {
    "use strict";
    var x = document.getElementsByClassName("stickerskewb"),
        temp;
    switch (n) {
    case 0:
        temp = x[0].style.fill;
        x[0].style.fill = x[25].style.fill;
        x[25].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[27].style.fill;
        x[27].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[28].style.fill;
        x[28].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[26].style.fill;
        x[26].style.fill = x[24].style.fill;
        x[24].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[19].style.fill;
        x[19].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        break;
    case 1:
        temp = x[5].style.fill;
        x[5].style.fill = x[15].style.fill;
        x[15].style.fill = x[25].style.fill;
        x[25].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[17].style.fill;
        x[17].style.fill = x[28].style.fill;
        x[28].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[18].style.fill;
        x[18].style.fill = x[29].style.fill;
        x[29].style.fill = temp;
        temp = x[9].style.fill;
        x[9].style.fill = x[19].style.fill;
        x[19].style.fill = x[26].style.fill;
        x[26].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[13].style.fill;
        x[13].style.fill = x[24].style.fill;
        x[24].style.fill = temp;
        break;
    case 2:
        temp = x[10].style.fill;
        x[10].style.fill = x[20].style.fill;
        x[20].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        temp = x[11].style.fill;
        x[11].style.fill = x[24].style.fill;
        x[24].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        temp = x[13].style.fill;
        x[13].style.fill = x[22].style.fill;
        x[22].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        temp = x[14].style.fill;
        x[14].style.fill = x[23].style.fill;
        x[23].style.fill = x[16].style.fill;
        x[16].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[28].style.fill;
        x[28].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        break;
    case 3:
        temp = x[15].style.fill;
        x[15].style.fill = x[20].style.fill;
        x[20].style.fill = x[25].style.fill;
        x[25].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[21].style.fill;
        x[21].style.fill = x[29].style.fill;
        x[29].style.fill = temp;
        temp = x[18].style.fill;
        x[18].style.fill = x[23].style.fill;
        x[23].style.fill = x[27].style.fill;
        x[27].style.fill = temp;
        temp = x[19].style.fill;
        x[19].style.fill = x[24].style.fill;
        x[24].style.fill = x[28].style.fill;
        x[28].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[8].style.fill;
        x[8].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        break;
    case 4:
        doMoveSkewb(0);
        doMoveSkewb(0);
        break;
    case 5:
        doMoveSkewb(1);
        doMoveSkewb(1);
        break;
    case 6:
        doMoveSkewb(2);
        doMoveSkewb(2);
        break;
    default:
        doMoveSkewb(3);
        doMoveSkewb(3);
    }
}

function scrambleSkewb() {
    "use strict";
    for (var i = 0; i < 100; i++) {
        doMoveSkewb(Math.floor(Math.random()*8));
    }
    solNum = solLen;
}

function isSolvedSkewb(state) {
    "use strict";
    var out = true;
    for (var i = 0; i < 6; i++) {
        for (var j = 1; j < 5; j++) {
            if (state[5*i+j] != state[5*i]) {
                out = false;
                break;
            }
        }
    }
    return out;
}

function isValidSkewb() {
    "use strict";
    var x = document.getElementsByClassName("stickerskewb"),
        cube = [];
    for (var i = 0; i < 30; i++) {
        cube[i] = x[i].style.fill;
    }
    var out = true, count = [0, 0, 0, 0, 0, 0], temp;
    for (var i = 0; i < 30; i++) {
        for (var j = 0; j < 6; j++) {
            if (cube[i] == color[j]) {
                count[j]++;
                break;
            }
        }
    }
    for (var i = 0; i < 6; i++) {
        if (count[i] != 5) {
            out = false;
            break;
        }
    }
    return out;
}

function copyCubeSkewb() {
    var x = document.getElementsByClassName("stickerskewb"), out = [];
    for (var i = 0; i < 30; i++) {
        out.push(x[i].style.fill);
    }
    return out;
}

function solveByMoveSkewb(cube, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial,
        tempcube, done = false;
    for (var i = 0; i < 8; i++) {
        if (lastmove % 4 != i % 4 || currlen == 1) {
            solution = [];
            tempcube = [];
            for (var j = 0; j < 30; j++) {
                tempcube.push(cube[j]);
            }
            doSolMoveSkewb(tempcube, i);
            solution.push(i);
            if (currlen == maxlen && isSolvedSkewb(tempcube)) {
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial = solveByMoveSkewb(tempcube, maxlen, i, currlen + 1);
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

function completeSolveSkewb() {
    "use strict";
    var solution, cube = copyCubeSkewb();
    if (!isValidSkewb()) {
        document.getElementById('solutionskewb').innerHTML = "Invalid state";
    }
    else if (isSolvedSkewb(cube)) {
        document.getElementById('solutionskewb').innerHTML = "Already solved";
    }
    else {
        for (var i = 1; i < 12; i++) {
            solution = solveByMoveSkewb(cube, i);
            if (solution[0] != -1) {
                for (var j = 0; j < solution.length; j++) {
                    doSolMoveSkewb(cube, solution[j]);
                }
                break;
            }
        }
        if (solution[0] == -1) {
            document.getElementById('solutionskewb').innerHTML = "Invalid state";
        }
        else {
            var out = "", str = translateSkewb(solution);
            sol = solution;
            for (var i = 0; i < str.length; i++) {
                out = out + str[i] + ' ';
            }
            document.getElementById('solutionskewb').innerHTML = out;
            solLen = sol.length;
            solNum = 0;
        }
    }
    return solution;
}

function translateSkewb(solution) {
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
        if (Math.floor(solution[i] / 4)) {
            out[i] += "'";
        }
    }
    return out;
}

function doSolMoveSkewb(x, n) {
    var temp;
    switch (n) {
    case 0:
        temp = x[0];
        x[0] = x[25];
        x[25] = x[20];
        x[20] = temp;
        temp = x[1];
        x[1] = x[27];
        x[27] = x[21];
        x[21] = temp;
        temp = x[2];
        x[2] = x[28];
        x[28] = x[22];
        x[22] = temp;
        temp = x[4];
        x[4] = x[26];
        x[26] = x[24];
        x[24] = temp;
        temp = x[7];
        x[7] = x[19];
        x[19] = x[11];
        x[11] = temp;
        break;
    case 1:
        temp = x[5];
        x[5] = x[15];
        x[15] = x[25];
        x[25] = temp;
        temp = x[7];
        x[7] = x[17];
        x[17] = x[28];
        x[28] = temp;
        temp = x[8];
        x[8] = x[18];
        x[18] = x[29];
        x[29] = temp;
        temp = x[9];
        x[9] = x[19];
        x[19] = x[26];
        x[26] = temp;
        temp = x[2];
        x[2] = x[13];
        x[13] = x[24];
        x[24] = temp;
        break;
    case 2:
        temp = x[10];
        x[10] = x[20];
        x[20] = x[15];
        x[15] = temp;
        temp = x[11];
        x[11] = x[24];
        x[24] = x[17];
        x[17] = temp;
        temp = x[13];
        x[13] = x[22];
        x[22] = x[19];
        x[19] = temp;
        temp = x[14];
        x[14] = x[23];
        x[23] = x[16];
        x[16] = temp;
        temp = x[4];
        x[4] = x[28];
        x[28] = x[9];
        x[9] = temp;
        break;
    case 3:
        temp = x[15];
        x[15] = x[20];
        x[20] = x[25];
        x[25] = temp;
        temp = x[16];
        x[16] = x[21];
        x[21] = x[29];
        x[29] = temp;
        temp = x[18];
        x[18] = x[23];
        x[23] = x[27];
        x[27] = temp;
        temp = x[19];
        x[19] = x[24];
        x[24] = x[28];
        x[28] = temp;
        temp = x[1];
        x[1] = x[8];
        x[8] = x[14];
        x[14] = temp;
        break;
    case 4:
        doSolMoveSkewb(x, 0);
        doSolMoveSkewb(x, 0);
        break;
    case 5:
        doSolMoveSkewb(x, 1);
        doSolMoveSkewb(x, 1);
        break;
    case 6:
        doSolMoveSkewb(x, 2);
        doSolMoveSkewb(x, 2);
        break;
    default:
        doSolMoveSkewb(x, 3);
        doSolMoveSkewb(x, 3);
    }
}
