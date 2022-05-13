function setColor3(pos) {
    "use strict";
    if (isHold) {
        var x = document.getElementsByClassName("sticker3");
        x[pos].style.fill = color[hold];
    }
    solNum = solLen;
}

function reset3() {
    "use strict";
    var x = document.getElementsByClassName("sticker3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.fill = color[Math.floor(i/9)];
    }
    solNum = solLen;
}

function doSolution3() {
    "use strict";
    if (solNum < solLen) {
        doMove3(sol[solNum]);
        solNum++;
    }
}

function doMove3(n) {
    "use strict";
    var x = document.getElementsByClassName("sticker3"),
        temp;
    switch (n) {
    case 0:
        temp = x[0].style.fill;
        x[0].style.fill = x[6].style.fill;
        x[6].style.fill = x[8].style.fill;
        x[8].style.fill = x[2].style.fill;
        x[2].style.fill = temp;
        temp = x[9].style.fill;
        x[9].style.fill = x[45].style.fill;
        x[45].style.fill = x[36].style.fill;
        x[36].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[11].style.fill;
        x[11].style.fill = x[47].style.fill;
        x[47].style.fill = x[38].style.fill;
        x[38].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[3].style.fill;
        x[3].style.fill = x[7].style.fill;
        x[7].style.fill = x[5].style.fill;
        x[5].style.fill = temp;  
        temp = x[10].style.fill;
        x[10].style.fill = x[46].style.fill;
        x[46].style.fill = x[37].style.fill;
        x[37].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        break;
    case 1:
        temp = x[2].style.fill;
        x[2].style.fill = x[20].style.fill;
        x[20].style.fill = x[29].style.fill;
        x[29].style.fill = x[51].style.fill;
        x[51].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[26].style.fill;
        x[26].style.fill = x[35].style.fill;
        x[35].style.fill = x[45].style.fill;
        x[45].style.fill = temp;
        temp = x[9].style.fill;
        x[9].style.fill = x[15].style.fill;
        x[15].style.fill = x[17].style.fill;
        x[17].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[23].style.fill;
        x[23].style.fill = x[32].style.fill;
        x[32].style.fill = x[48].style.fill;
        x[48].style.fill = temp;  
        temp = x[10].style.fill;
        x[10].style.fill = x[12].style.fill;
        x[12].style.fill = x[16].style.fill;
        x[16].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        break;
    case 2:
        temp = x[6].style.fill;
        x[6].style.fill = x[44].style.fill;
        x[44].style.fill = x[29].style.fill;
        x[29].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[38].style.fill;
        x[38].style.fill = x[27].style.fill;
        x[27].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        temp = x[18].style.fill;
        x[18].style.fill = x[24].style.fill;
        x[24].style.fill = x[26].style.fill;
        x[26].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[41].style.fill;
        x[41].style.fill = x[28].style.fill;
        x[28].style.fill = x[12].style.fill;
        x[12].style.fill = temp;
        temp = x[19].style.fill;
        x[19].style.fill = x[21].style.fill;
        x[21].style.fill = x[25].style.fill;
        x[25].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        break;
    case 3:
        temp = x[15].style.fill;
        x[15].style.fill = x[24].style.fill;
        x[24].style.fill = x[42].style.fill;
        x[42].style.fill = x[51].style.fill;
        x[51].style.fill = temp;
        temp = x[17].style.fill;
        x[17].style.fill = x[26].style.fill;
        x[26].style.fill = x[44].style.fill;
        x[44].style.fill = x[53].style.fill;
        x[53].style.fill = temp;
        temp = x[27].style.fill;
        x[27].style.fill = x[33].style.fill;
        x[33].style.fill = x[35].style.fill;
        x[35].style.fill = x[29].style.fill;
        x[29].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[25].style.fill;
        x[25].style.fill = x[43].style.fill;
        x[43].style.fill = x[52].style.fill;
        x[52].style.fill = temp;
        temp = x[28].style.fill;
        x[28].style.fill = x[30].style.fill;
        x[30].style.fill = x[34].style.fill;
        x[34].style.fill = x[32].style.fill;
        x[32].style.fill = temp;
        break;
    case 4:
        temp = x[0].style.fill;
        x[0].style.fill = x[53].style.fill;
        x[53].style.fill = x[27].style.fill;
        x[27].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[6].style.fill;
        x[6].style.fill = x[47].style.fill;
        x[47].style.fill = x[33].style.fill;
        x[33].style.fill = x[24].style.fill;
        x[24].style.fill = temp;
        temp = x[36].style.fill;
        x[36].style.fill = x[42].style.fill;
        x[42].style.fill = x[44].style.fill;
        x[44].style.fill = x[38].style.fill;
        x[38].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[50].style.fill;
        x[50].style.fill = x[30].style.fill;
        x[30].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        temp = x[37].style.fill;
        x[37].style.fill = x[39].style.fill;
        x[39].style.fill = x[43].style.fill;
        x[43].style.fill = x[41].style.fill;
        x[41].style.fill = temp;
        break;
    case 5:
        temp = x[0].style.fill;
        x[0].style.fill = x[11].style.fill;
        x[11].style.fill = x[35].style.fill;
        x[35].style.fill = x[42].style.fill;
        x[42].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[17].style.fill;
        x[17].style.fill = x[33].style.fill;
        x[33].style.fill = x[36].style.fill;
        x[36].style.fill = temp;
        temp = x[45].style.fill;
        x[45].style.fill = x[51].style.fill;
        x[51].style.fill = x[53].style.fill;
        x[53].style.fill = x[47].style.fill;
        x[47].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[14].style.fill;
        x[14].style.fill = x[34].style.fill;
        x[34].style.fill = x[39].style.fill;
        x[39].style.fill = temp;
        temp = x[46].style.fill;
        x[46].style.fill = x[48].style.fill;
        x[48].style.fill = x[52].style.fill;
        x[52].style.fill = x[50].style.fill;
        x[50].style.fill = temp;
        break;
            
    case 6:
        for(var i=0; i < 3; i++){
            doMove3(0);
        }
        break;
    case 7:
        for(var i=0; i < 3; i++){
            doMove3(1);
        }
        break;
    case 8:
        for(var i=0; i < 3; i++){
            doMove3(2);
        }
        break;
    case 9:
        for(var i=0; i < 3; i++){
            doMove3(3);
        }
        break;
    case 10:
        for(var i=0; i < 3; i++){
            doMove3(4);
        }
        break;
    case 11:
        for(var i=0; i < 3; i++){
            doMove3(5);
        }
        break;
            
    case 12:
        doMove3(0);
        doMove3(0);
        break;
    case 13:
        doMove3(1);
        doMove3(1);
        break;
    case 14:
        doMove3(2);
        doMove3(2);
        break;
    case 15:
        doMove3(3);
        doMove3(3);
        break;
    case 16:
        doMove3(4);
        doMove3(4);
        break;
    default:
        doMove3(5);
        doMove3(5);
    }
}

function doSolMove3(cube, m) {
    "use strict";
    var temp;
    
    switch (m) {
        // U
        case 0:
            temp = cube.permc[0];
            cube.permc[0] = cube.permc[3];
            cube.permc[3] = cube.permc[2];
            cube.permc[2] = cube.permc[1];
            cube.permc[1] = temp;
            temp = cube.perme[0];
            cube.perme[0] = cube.perme[3];
            cube.perme[3] = cube.perme[2];
            cube.perme[2] = cube.perme[1];
            cube.perme[1] = temp;
            break;
        // R
        case 1:
            cube.orientc[cube.permc[1]] = (cube.orientc[cube.permc[1]] + 1) % 3;
            cube.orientc[cube.permc[2]] = (cube.orientc[cube.permc[2]] + 2) % 3;
            cube.orientc[cube.permc[5]] = (cube.orientc[cube.permc[5]] + 1) % 3;
            cube.orientc[cube.permc[6]] = (cube.orientc[cube.permc[6]] + 2) % 3;
            temp = cube.permc[1];
            cube.permc[1] = cube.permc[2];
            cube.permc[2] = cube.permc[5];
            cube.permc[5] = cube.permc[6];
            cube.permc[6] = temp;
            temp = cube.perme[1];
            cube.perme[1] = cube.perme[6];
            cube.perme[6] = cube.perme[9];
            cube.perme[9] = cube.perme[5];
            cube.perme[5] = temp;
            break;
        // F
        case 2:
            cube.orientc[cube.permc[2]] = (cube.orientc[cube.permc[2]] + 1) % 3;
            cube.orientc[cube.permc[3]] = (cube.orientc[cube.permc[3]] + 2) % 3;
            cube.orientc[cube.permc[4]] = (cube.orientc[cube.permc[4]] + 1) % 3;
            cube.orientc[cube.permc[5]] = (cube.orientc[cube.permc[5]] + 2) % 3;
            cube.oriente[cube.perme[2]] = (cube.oriente[cube.perme[2]] + 1) % 2;
            cube.oriente[cube.perme[6]] = (cube.oriente[cube.perme[6]] + 1) % 2;
            cube.oriente[cube.perme[7]] = (cube.oriente[cube.perme[7]] + 1) % 2;
            cube.oriente[cube.perme[8]] = (cube.oriente[cube.perme[8]] + 1) % 2;
            temp = cube.permc[2];
            cube.permc[2] = cube.permc[3];
            cube.permc[3] = cube.permc[4];
            cube.permc[4] = cube.permc[5];
            cube.permc[5] = temp;
            temp = cube.perme[2];
            cube.perme[2] = cube.perme[7];
            cube.perme[7] = cube.perme[8];
            cube.perme[8] = cube.perme[6];
            cube.perme[6] = temp;
            break;
        // D
        case 3:
            temp = cube.permc[4];
            cube.permc[4] = cube.permc[7];
            cube.permc[7] = cube.permc[6];
            cube.permc[6] = cube.permc[5];
            cube.permc[5] = temp;
            temp = cube.perme[8];
            cube.perme[8] = cube.perme[11];
            cube.perme[11] = cube.perme[10];
            cube.perme[10] = cube.perme[9];
            cube.perme[9] = temp;
            break;
        // L
        case 4:
            cube.orientc[cube.permc[0]] = (cube.orientc[cube.permc[0]] + 2) % 3;
            cube.orientc[cube.permc[3]]=(cube.orientc[cube.permc[3]]+1)%3;
            cube.orientc[cube.permc[4]]=(cube.orientc[cube.permc[4]]+2)%3;
            cube.orientc[cube.permc[7]]=(cube.orientc[cube.permc[7]]+1)%3;
            temp=cube.permc[0];
            cube.permc[0]=cube.permc[7];
            cube.permc[7]=cube.permc[4];
            cube.permc[4]=cube.permc[3];
            cube.permc[3]=temp;
            temp = cube.perme[3];
            cube.perme[3] = cube.perme[4];
            cube.perme[4] = cube.perme[11];
            cube.perme[11] = cube.perme[7];
            cube.perme[7] = temp;
            break;
        // B
        case 5:
            cube.orientc[cube.permc[0]]=(cube.orientc[cube.permc[0]]+1)%3;
            cube.orientc[cube.permc[1]]=(cube.orientc[cube.permc[1]]+2)%3;
            cube.orientc[cube.permc[6]]=(cube.orientc[cube.permc[6]]+1)%3;
            cube.orientc[cube.permc[7]]=(cube.orientc[cube.permc[7]]+2)%3;
            cube.oriente[cube.perme[0]]=(cube.oriente[cube.perme[0]]+1)%2;
            cube.oriente[cube.perme[4]]=(cube.oriente[cube.perme[4]]+1)%2;
            cube.oriente[cube.perme[5]]=(cube.oriente[cube.perme[5]]+1)%2;
            cube.oriente[cube.perme[10]]=(cube.oriente[cube.perme[10]]+1)%2;
            temp=cube.permc[0];
            cube.permc[0]=cube.permc[1];
            cube.permc[1]=cube.permc[6];
            cube.permc[6]=cube.permc[7];
            cube.permc[7]=temp;
            temp = cube.perme[0];
            cube.perme[0] = cube.perme[5];
            cube.perme[5] = cube.perme[10];
            cube.perme[10] = cube.perme[4];
            cube.perme[4] = temp;
            break;

        // U'
        case 6:
            doSolMove3(cube, 0);
            doSolMove3(cube, 12);
            break;
        // R'
        case 7:
            doSolMove3(cube, 1);
            doSolMove3(cube, 13);
            break;
        // F'
        case 8:
            doSolMove3(cube, 2);
            doSolMove3(cube, 14);
            break;
        // D'
        case 9:
            doSolMove3(cube, 3);
            doSolMove3(cube, 15);
            break;
        // L'
        case 10:
            doSolMove3(cube, 4);
            doSolMove3(cube, 16);
            break;
        // B'
        case 11:
            doSolMove3(cube, 5);
            doSolMove3(cube, 17);
            break;

        // U2
        case 12:
            doSolMove3(cube, 0);
            doSolMove3(cube, 0);
            break;
        // R2
        case 13:
            doSolMove3(cube, 1);
            doSolMove3(cube, 1);
            break;
        // F2
        case 14:
            doSolMove3(cube, 2);
            doSolMove3(cube, 2);
            break;
        // D2
        case 15:
            doSolMove3(cube, 3);
            doSolMove3(cube, 3);
            break;
        // L2
        case 16:
            doSolMove3(cube, 4);
            doSolMove3(cube, 4);
            break;
        // B2
        default:
            doSolMove3(cube, 5);
            doSolMove3(cube, 5);
    }
}

function RULDMove(m) {
    var out;
    if (m % 4 == 2) {
        out = Math.floor(m / 4) * 6 + 3;
    }
    else if (m % 4 == 3) {
        out = Math.floor(m / 4) * 6 + 4;
    }
    else {
        out = Math.floor(m / 3) * 6 + m % 4;
    }
    return out;
}

function RULMove(m) {
    var out;
    if (m % 3 == 2) {
        out = Math.floor(m / 3) * 6 + 4;
    }
    else {
        out = Math.floor(m / 3) * 6 + m % 3;
    }
    return out;
}

function scramble3() {
    "use strict";
    for (var i = 0; i < 100; i++) {
        doMove3(Math.floor(Math.random()*18));
    }
    solNum = solLen;
}

function toCubie() {
    "use strict";
    var x = document.getElementsByClassName("sticker3"), cube = [], out = {permc : [], orientc : [], perme : [], oriente : []}, temp;
    for (var i = 0; i < 54; i++) {
        cube.push(x[i].style.fill);
    }
    for (var i = 0; i < 8; i++) {
        out.orientc.push(0);
    }
    for (var i = 0; i < 12; i++) {
        out.oriente.push(0);
    }
    for (var i = 0; i < 8; i++) {
        temp = getCorner(cube, i);
        out.permc.push(temp[0]);
        out.orientc[temp[0]] = temp[1];
    }
    
    for (var i = 0; i < 12; i++) {
        temp = getEdge(cube, i);
        out.perme.push(temp[0]);
        out.oriente[temp[0]] = temp[1];
    }
    
    return out;
}

function copyCube3(cube) {
    var out = {permc : [], orientc : [], perme : [], oriente : []};
    for (var i = 0; i < 8; i++) {
        out.permc.push(cube.permc[i]);
        out.orientc.push(cube.orientc[i]);
    }
    for (var i = 0; i < 12; i++) {
        out.perme.push(cube.perme[i]);
        out.oriente.push(cube.oriente[i]);
    }
    return out;
}

function getCorner(cube, n) {
    var out = [], corner = [];
    switch (n) {
        case 0:
            corner.push(cube[0]);
            corner.push(cube[47]);
            corner.push(cube[36]);
            break;
        case 1:
            corner.push(cube[2]);
            corner.push(cube[11]);
            corner.push(cube[45]);
            break;
        case 2:
            corner.push(cube[8]);
            corner.push(cube[20]);
            corner.push(cube[9]);
            break;
        case 3:
            corner.push(cube[6]);
            corner.push(cube[38]);
            corner.push(cube[18]);
            break;
        case 4:
            corner.push(cube[27]);
            corner.push(cube[24]);
            corner.push(cube[44]);
            break;
        case 5:
            corner.push(cube[29]);
            corner.push(cube[15]);
            corner.push(cube[26]);
            break;
        case 6:
            corner.push(cube[35]);
            corner.push(cube[51]);
            corner.push(cube[17]);
            break;
        default:
            corner.push(cube[33]);
            corner.push(cube[42]);
            corner.push(cube[53]);
    }
    var out = [];
    if (contains(corner, cube[4]) &&
        contains(corner, cube[49]) &&
        contains(corner, cube[40]) &&
        corner[contains(corner, cube[4]) % 3] == cube[49]) {
        out.push(0);
        out.push(contains(corner, cube[4]) - 1);
    }
    else if (contains(corner, cube[4]) &&
             contains(corner, cube[13]) &&
             contains(corner, cube[49]) &&
             corner[contains(corner, cube[4]) % 3] == cube[13]) {
        out.push(1);
        out.push(contains(corner, cube[4]) - 1);
    }
    else if (contains(corner, cube[4]) &&
             contains(corner, cube[22]) &&
             contains(corner, cube[13]) &&
             corner[contains(corner, cube[4]) % 3] == cube[22]) {
        out.push(2);
        out.push(contains(corner, cube[4]) - 1);
    }
    else if (contains(corner, cube[4]) &&
             contains(corner, cube[40]) &&
             contains(corner, cube[22]) &&
             corner[contains(corner, cube[4]) % 3] == cube[40]) {
        out.push(3);
        out.push(contains(corner, cube[4]) - 1);
    }
    else if (contains(corner, cube[31]) &&
             contains(corner, cube[22]) &&
             contains(corner, cube[40]) &&
             corner[contains(corner,cube[31]) % 3] == cube[22]) {
        out.push(4);
        out.push(contains(corner, cube[31]) - 1);
    }
    else if (contains(corner, cube[31]) &&
             contains(corner, cube[13]) &&
             contains(corner, cube[22]) &&
             corner[contains(corner, cube[31]) % 3] == cube[13]) {
        out.push(5);
        out.push(contains(corner, cube[31]) - 1);
    }
    else if (contains(corner, cube[31]) &&
             contains(corner, cube[49]) &&
             contains(corner, cube[13]) &&
             corner[contains(corner, cube[31]) % 3] == cube[49]) {
        out.push(6);
        out.push(contains(corner, cube[31]) - 1);
    }
    else if (contains(corner, cube[31]) &&
             contains(corner, cube[40]) &&
             contains(corner, cube[49]) &&
             corner[contains(corner, cube[31]) % 3] == cube[40]) {
        out.push(7);
        out.push(contains(corner, cube[31]) - 1);
    }
    
    return out;
}

function getEdge(cube, n) {
    var out = [], edge = [];
    switch (n) {
        case 0:
            edge.push(cube[1]);
            edge.push(cube[46]);
            break;
        case 1:
            edge.push(cube[5]);
            edge.push(cube[10]);
            break;
        case 2:
            edge.push(cube[7]);
            edge.push(cube[19]);
            break;
        case 3:
            edge.push(cube[3]);
            edge.push(cube[37]);
            break;
        case 4:
            edge.push(cube[50]);
            edge.push(cube[39]);
            break;
        case 5:
            edge.push(cube[48]);
            edge.push(cube[14]);
            break;
        case 6:
            edge.push(cube[23]);
            edge.push(cube[12]);
            break;
        case 7:
            edge.push(cube[21]);
            edge.push(cube[41]);
            break;
        case 8:
            edge.push(cube[28]);
            edge.push(cube[25]);
            break;
        case 9:
            edge.push(cube[32]);
            edge.push(cube[16]);
            break;
        case 10:
            edge.push(cube[34]);
            edge.push(cube[52]);
            break;
        default:
            edge.push(cube[30]);
            edge.push(cube[43]);
    }
    var out = [];
    if (contains(edge, cube[4]) &&
        contains(edge, cube[49])) {
        out.push(0);
        out.push(contains(edge, cube[4]) - 1);
    }
    else if (contains(edge, cube[4]) &&
        contains(edge, cube[13])) {
        out.push(1);
        out.push(contains(edge, cube[4]) - 1);
    }
    else if (contains(edge, cube[4]) &&
        contains(edge, cube[22])) {
        out.push(2);
        out.push(contains(edge, cube[4]) - 1);
    }
    else if (contains(edge, cube[4]) &&
        contains(edge, cube[40])) {
        out.push(3);
        out.push(contains(edge, cube[4]) - 1);
    }
    else if (contains(edge, cube[49]) &&
        contains(edge, cube[40])) {
        out.push(4);
        out.push(contains(edge, cube[49]) - 1);
    }
    else if (contains(edge, cube[49]) &&
        contains(edge, cube[13])) {
        out.push(5);
        out.push(contains(edge, cube[49]) - 1);
    }
    else if (contains(edge, cube[22]) &&
        contains(edge, cube[13])) {
        out.push(6);
        out.push(contains(edge, cube[22]) - 1);
    }
    else if (contains(edge, cube[22]) &&
        contains(edge, cube[40])) {
        out.push(7);
        out.push(contains(edge, cube[22]) - 1);
    }
    else if (contains(edge, cube[31]) &&
        contains(edge, cube[22])) {
        out.push(8);
        out.push(contains(edge, cube[31]) - 1);
    }
    else if (contains(edge, cube[31]) &&
        contains(edge, cube[13])) {
        out.push(9);
        out.push(contains(edge, cube[31]) - 1);
    }
    else if (contains(edge, cube[31]) &&
        contains(edge, cube[49])) {
        out.push(10);
        out.push(contains(edge, cube[31]) - 1);
    }
    else if (contains(edge, cube[31]) &&
        contains(edge, cube[40])) {
        out.push(11);
        out.push(contains(edge, cube[31]) - 1);
    }
    
    return out;
}

function contains(s, c) {
    var out = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == c) {
            out = i + 1;
            break;
        }
    }
    return out;
}

function solvedc(cube, c) {
    "use strict";
    return (cube.permc[c] == c && !cube.orientc[c]);
}

function solvede(cube, e) {
    "use strict";
    return (cube.perme[e] == e && !cube.oriente[e]);
}

function isSolvedRubik(cube) {
    var out = true;
    for (var i = 0; i < 8; i++) {
        if (!solvedc(cube, i)) {
            out = false;
            break;
        }
    }
    if (out) {
        for (var i = 0; i < 12; i++) {
            if (!solvede(cube, i)) {
                out = false;
                break;
            }
        }
    }
    return out;
}

function completeSolve3() {
    var solution = [], temp, cube = toCubie(),
        tempo = 0, tempp = [], valid = true;
    for (var i = 0; i < 20; i++) {
        tempp.push(0);
    }
    for (var i = 0; i < 8; i++) {
        tempo += cube.orientc[i];
        tempp[cube.permc]++;
        if (cube.orientc[i] == undefined ||
            cube.permc[i] == undefined ||
            tempp[cube.permc] > 1) {
            valid = false;
            break;
        }
    }
    if (tempo % 3) {
        valid = false;
    }
    tempo = 0;
    for (var i = 0; i < 12; i++) {
        tempo += cube.oriente[i];
        tempp[cube.perme+8]++;
        if (cube.oriente[i] == undefined ||
            cube.perme[i] == undefined ||
            tempp[cube.perme+8] > 1) {
            valid = false;
            break;
        }
    }
    if (tempo % 2) {
        valid = false;
    }
    if (!valid) {
        document.getElementById('solution3').innerHTML = "Invalid state";
    }
    else if (isSolvedRubik(cube)) {
        document.getElementById('solution3').innerHTML = "Already solved";
    }
    else {
        if (!oriented(cube)) {
            solution = orientCube(cube);
        }
        if (!crossSolved(cube)) {
            temp = solveCross(cube);
            for (var i = 0; i < temp.length; i++) {
                solution.push(temp[i]);
            }
        }
        for (var i = 1; i < 5; i++) {
            if (numPairsSolved(cube) < i) {
                temp = solveF2L(cube, i);
                for (var j = 0; j < temp.length; j++) {
                    solution.push(temp[j]);
                }
            }
        }
        if (!OLLDone(cube)) {
            temp = solveOLL(cube);
            for (var i = 0; i < temp.length; i++) {
                solution.push(temp[i]);
            }
        }
        if (!CPLLDone(cube)) {
            temp = solveCPLL(cube);
            for (var i = 0; i < temp.length; i++) {
                solution.push(temp[i]);
            }
        }
        if (!EPLLDone(cube)) {
            temp = solveEPLL(cube);
            if (temp == undefined) {
                valid = false;
                document.getElementById('solution3').innerHTML = "Invalid state";
            }
            else {
                for (var i = 0; i < temp.length; i++) {
                    solution.push(temp[i]);
                }
            }
        }
        if (valid) {
            solution = simplify(solution);
            var out = "", str = translate3(solution);
            sol = solution;
            for (var i = 0; i < str.length; i++) {
                out = out + str[i] + ' ';
            }
            document.getElementById('solution3').innerHTML = out;
            solLen = sol.length;
            solNum = 0;
        }
    }
    return solution;
}

function orientCube(cube) {
    var solution = [], temp;
    for (var i = 1; i < 15; i++) {
        temp = [];
        temp = orientCubeByMove(cube, i);
        if (temp[0] != -1) {
            break;
        }
    }
    for (var i = 0; i < temp.length; i++) {
        doSolMove3(cube, temp[i]);
        solution.push(temp[i]);
    }
    return solution;
}

function orientCubeByMove(cube, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial = [], temp, done = false;
    console.log(maxlen);
    for (var i = 0; i < 18; i++) {
        if (currlen == 1 || lastmove % 6 != i % 6) {
            solution = [];
            temp = copyCube3(cube);
            doSolMove3(temp, i);
            solution.push(i);
            if (currlen == maxlen && oriented(temp)) {
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial = orientCubeByMove(temp, maxlen, i, currlen + 1);
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
        solution = [];
        solution.push(-1);
    }
    return solution;
}

function oriented(cube) {
    var out = true;
    for (var i = 0; i < 12; i++) {
        if (cube.oriente[i]) {
            out = false;
            break;
        }
    }
    return out;
}

function solveCross(cube) {
    var solution = [], temp;
    for (var i = 1; i < 15; i++) {
        temp = [];
        temp = solveCrossByMove(cube, i);
        if (temp[0] != -1) {
            break;
        }
    }
    for (var i = 0; i < temp.length; i++) {
        doSolMove3(cube, temp[i]);
        solution.push(temp[i]);
    }
    return solution;
}

function solveCrossByMove(cube, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial = [], temp, done = false;
    for (var i = 0; i < 12; i++) {
        if (currlen == 1 || lastmove % 4 != i % 4) {
            solution = [];
            temp = copyCube3(cube);
            doSolMove3(temp, RULDMove(i));
            solution.push(RULDMove(i));
            if (currlen == maxlen && crossSolved(temp)) {
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial = solveCrossByMove(temp, maxlen, i, currlen + 1);
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
        solution = [];
        solution.push(-1);
    }
    return solution;
}

function crossSolved(cube) {
    return (solvede(cube, 8) && solvede(cube, 9) && solvede(cube, 10) && solvede(cube, 11));
}

function thisCrossSolved(cube, n) {
    var out = false;
    if (!n && solvede(cube, 0) && solvede(cube, 1) && solvede(cube, 2) && solvede(cube, 3)) {
        out = true;
    }
    else if (n == 1 && solvede(cube, 1) && solvede(cube, 5) && solvede(cube, 6) && solvede(cube, 9)) {
        out = true;
    }
    else if (n == 2 && solvede(cube, 2) && solvede(cube, 6) && solvede(cube, 7) && solvede(cube, 8)) {
        out = true;
    }
    else if (n == 3 && solvede(cube, 8) && solvede(cube, 9) && solvede(cube, 10) && solvede(cube, 11)) {
        out = true;
    }
    else if (n == 4 && solvede(cube, 3) && solvede(cube, 4) && solvede(cube, 7) && solvede(cube, 11)) {
        out = true;
    }
    else if (n == 5 && solvede(cube, 0) && solvede(cube, 4) && solvede(cube, 5) && solvede(cube, 10)) {
        out = true;
    }
    return out;
}

function solveF2L(cube, n) {
    var solution = [], temp;
    for (var i = 1; i < 15; i++) {
        temp = [];
        temp = solveF2LByMove(cube, n, i);
        if (temp[0] != -1) {
            break;
        }
    }
    for (var i = 0; i < temp.length; i++) {
        doSolMove3(cube, temp[i]);
        solution.push(temp[i]);
    }
    return solution;
}

function solveF2LByMove(cube, n, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial = [], temp, done = false;
    for (var i = 0; i < 9; i++) {
        if (currlen == 1 || lastmove % 3 != i % 3) {
            solution = [];
            temp = copyCube3(cube);
            doSolMove3(temp, RULMove(i));
            solution.push(RULMove(i));
            if (currlen == maxlen && numPairsSolved(temp) >= n) {
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial = solveF2LByMove(temp, n, maxlen, i, currlen + 1);
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
        solution = [];
        solution.push(-1);
    }
    return solution;
}

function numPairsSolved(cube) {
    var out = 0;
    if (crossSolved(cube)) {
        if (solvedc(cube, 4) && solvede(cube,7)) {
            out++;
        }
        if (solvedc(cube,5) && solvede(cube,6)) {
            out++;
        }
        if (solvedc(cube,6) && solvede(cube,5)) {
            out++;
        }
        if (solvedc(cube,7) && solvede(cube,4)) {
            out++;
        }
    }
    return out;
}

function solveOLL(cube) {
    var oll = getOLL(cube), solution;
    switch (oll) {
        case 1:
            solution = [14,13,2,16,8,13,2,16,2];
            break;
        case 2:
            solution = [2,1,8,4,2,7,8,10];
            break;
        case 3:
            solution = [7,8,10,2,1,8,4,2];
            break;
        case 4:
            solution = [10,0,1,6,4,0,7];
            break;
        case 5:
            solution = [13,9,1,12,7,3,1,12,1];
            break;
        case 6:
            solution = [7,2,1,11,7,8,1,5];
            break;
        case 7:
            solution = [7,8,1,11,7,2,1,5];
            break;
        case 8:
            solution = [7,12,1,0,7,0,1];
            break;
        case 9:
            solution = [2,1,11,7,8,1,5,7];
            break;
        case 10:
            solution = [1,12,7,6,1,6,7];
            break;
        case 11:
            solution = [1,11,7,2,1,5,7,8];
            break;
        case 12:
            solution = [7,6,1,6,7,12,1];
            break;
        case 13:
            solution = [4,12,10,6,4,6,10];
            break;
        case 14:
            solution = [2,12,14,6,14,6,14,12,2];
            break;
        case 15:
            solution = [14,9,2,12,8,3,2,12,2];
            break;
        case 16:
            solution = [1,0,7,0,1,6,7,0,1,12,7];
            break;
        case 17:
            solution = [4,12,16,6,16,6,16,12,4];
            break;
        case 18:
            solution = [13,3,7,12,1,9,7,12,7];
            break;
        case 19:
            solution = [8,4,2,7,8,10,2,1];
            break;
        case 20:
            solution = [4,6,7,0,10,6,1];
            break;
        case 21:
            solution = [7,8,4,2,1,8,10,2];
            break;
        case 22:
            solution = [1,12,13,6,13,6,13,12,1];
            break;
        case 23:
            solution = [1,12,7,6,1,0,7,6,1,6,7];
            break;
        case 24:
            solution = [10,12,4,0,10,0,4];
            break;
        case 25:
            solution = [5,12,17,6,17,6,17,12,5];
            break;
        default:
            solution = [1,0,7,0,1,12,7];
    }
    for (var i = 0; i < solution.length; i++) {
        doSolMove3(cube, solution[i]);
    }
    return solution;
}

function getOLL(cube) {
    return (((3 - cube.orientc[cube.permc[0]]) % 3) + 3 * ((3 - cube.orientc[cube.permc[1]]) % 3) + 9 * ((3 - cube.orientc[cube.permc[2]]) % 3));
}

function OLLDone(cube) {
    var out = true;
    for (var i = 0; i < 3; i++) {
        if (cube.orientc[i]) {
            out = false;
            break;
        }
    }
    return out;
}

function solveCPLL(cube) {
    var cpll = getCPLL(cube), solution;
    switch (cpll) {
        case 19:
            solution = [6];
            break;
        case 14:
            solution = [12];
            break;
        case 57:
            solution = [0];
            break;
            
        case 9:
            solution = [7,2,7,17,1,8,7,17,13];
            break;
        case 39:
            solution = [6,7,2,7,17,1,8,7,17,13];
            break;
        case 28:
            solution = [12,7,2,7,17,1,8,7,17,13];
            break;
        case 50:
            solution = [0,7,2,7,17,1,8,7,17,13];
            break;
        
        case 35:
            solution = [7,2,7,17,1,8,7,17,13,12];
            break;
        case 13:
            solution = [6,7,2,7,17,1,8,7,17,13,12];
            break;
        case 54:
            solution = [12,7,2,7,17,1,8,7,17,13,12];
            break;
        case 24:
            solution = [0,7,2,7,17,1,8,7,17,13,12];
            break;
            
        case 56:
            solution = [13,14,7,11,1,14,7,5,7];
            break;
        case 33:
            solution = [6,13,14,7,11,1,14,7,5,7];
            break;
        case 7:
            solution = [12,13,14,7,11,1,14,7,5,7];
            break;
        case 30:
            solution = [0,13,14,7,11,1,14,7,5,7];
            break;
            
        case 18:
            solution = [13,14,7,11,1,14,7,5,7,12];
            break;
        case 11:
            solution = [6,13,14,7,11,1,14,7,5,7,12];
            break;
        case 45:
            solution = [12,13,14,7,11,1,14,7,5,7,12];
            break;
        case 52:
            solution = [0,13,14,7,11,1,14,7,5,7,12];
            break;
            
        case 28:
            solution = [1,11,1,14,7,5,1,14,13];
            break;
        case 50:
            solution = [6,1,11,1,14,7,5,1,14,13];
            break;
        case 9:
            solution = [12,1,11,1,14,7,5,1,14,13];
            break;
        case 39:
            solution = [0,1,11,1,14,7,5,1,14,13];
            break;
            
        case 54:
            solution = [1,11,1,14,7,5,1,14,13,12];
            break;
        case 24:
            solution = [6,1,11,1,14,7,5,1,14,13,12];
            break;
        case 35:
            solution = [12,1,11,1,14,7,5,1,14,13,12];
            break;
        case 13:
            solution = [0,1,11,1,14,7,5,1,14,13,12];
            break;
            
        case 45:
            solution = [16,17,10,8,4,17,10,2,10];
            break;
        case 52:
            solution = [6,16,17,10,8,4,17,10,2,10];
            break;
        case 18:
            solution = [12,16,17,10,8,4,17,10,2,10];
            break;
        case 11:
            solution = [0,16,17,10,8,4,17,10,2,10];
            break;
            
        case 7:
            solution = [16,17,10,8,4,17,10,2,10,12];
            break;
        case 30:
            solution = [6,16,17,10,8,4,17,10,2,10,12];
            break;
        case 56:
            solution = [12,16,17,10,8,4,17,10,2,10,12];
            break;
        case 33:
            solution = [0,16,17,10,8,4,17,10,2,10,12];
            break;
            
        case 6:
            solution = [13,6,13,6,13,0,2,0,8,13,2,6,8];
            break;
        case 27:
            solution = [6,13,6,13,6,13,0,2,0,8,13,2,6,8];
            break;
        case 44:
            solution = [12,13,6,13,6,13,0,2,0,8,13,2,6,8];
            break;
        case 49:
            solution = [0,13,6,13,6,13,0,2,0,8,13,2,6,8];
    }
    for (var i = 0; i < solution.length; i++) {
        doSolMove3(cube, solution[i]);
    }
    return solution;
}
            
function getCPLL(cube) {
    return cube.permc[0] + 4 * cube.permc[1] + 16 * cube.permc[2];
}

function CPLLDone(cube) {
    var out = true;
    for (var i = 0; i < 3; i++) {
        if (cube.permc[i] != i) {
            out = false;
            break;
        }
    }
    return out;
}

function solveEPLL(cube) {
    var epll = getEPLL(cube), solution;
    switch (epll) {
        case 28:
            solution = [14,6,7,4,14,1,10,6,14];
            break;
        case 56:
            solution = [14,0,7,4,14,1,10,0,14];
            break;
        case 7:
            solution = [16,6,8,5,16,2,11,6,16];
            break;
        case 54:
            solution = [16,0,8,5,16,2,11,0,16];
            break;
        case 35:
            solution = [17,6,1,10,17,7,4,6,17];
            break;
        case 45:
            solution = [17,0,1,10,17,7,4,0,17];
            break;
        case 18:
            solution = [13,6,2,11,13,8,5,6,13];
            break;
        case 9:
            solution = [13,0,2,11,13,8,5,0,13];
            break;
        case 49:
            solution = [1,10,12,15,1,10,3,13,16,6,14,17];
            break;
        case 27:
            solution = [1,10,12,15,1,10,9,13,16,0,14,17];
            break;
        case 14:
            solution = [0,13,14,17,16,9,13,14,17,16];
    }
    return solution;
}

function getEPLL(cube) {
    return cube.perme[0] + 4 * cube.perme[1] + 16 * cube.perme[2];
}

function EPLLDone(cube) {
    var out = true;
    for (var i = 0; i < 3; i++) {
        if (cube.perme[i] != i) {
            out = false;
            break;
        }
    }
    return out;
}

function simplify(solution) {
    var change = false;
    do {
        change = false;
        for (var i = 1; i < solution.length; i++) {
            if (solution[i] % 6 == solution[i-1] % 6) {
                if (solution[i] > 11 && solution[i-1] < 11) {
                    solution[i-1] = (1-Math.floor(solution[i-1]/6)) * 6 + solution[i-1] % 6;
                    solution.splice(i,1);
                }
                else if (solution[i-1] > 11 && solution[i] < 11) {
                    solution[i-1] = (1-Math.floor(solution[i]/6)) * 6 + solution[i] % 6;
                    solution.splice(i,1);
                }
                else if (solution[i] > 11 && solution[i-1] > 11) {
                    solution.splice(i - 1,2);
                }
                else if (Math.floor(solution[i]/6) == Math.floor(solution[i - 1] / 6)) {
                    solution[i-1] = 12 + solution[i] % 6;
                    solution.splice(i,1);
                }
                else {
                    solution.splice(i - 1,2);
                }
                change = true;
                break;
            }
        }
    } while (change);
    return solution;
}

function translate3(solution) {
    var out = [], temp;
    for (var i = 0; i < solution.length; i++) {
        switch (solution[i] % 6) {
            case 0:
                temp = 'U';
                break;
            case 1:
                temp = 'R';
                break;
            case 2:
                temp = 'F';
                break;
            case 3:
                temp = 'D';
                break;
            case 4:
                temp = 'L';
                break;
            default:
                temp = 'B';
                break;
        }
        switch (Math.floor(solution[i] / 6)) {
            case 1:
                temp += "'";
                break;
            case 2:
                temp += '2';
        }
        
        out.push(temp);
        temp = '';
    }
    return out;
}
