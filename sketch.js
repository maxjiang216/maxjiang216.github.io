var count = 0;
var screenX = 600, screenY = 520;

function setup() {
    createCanvas(screenX, screenY);
    frameRate(60);
}

function draw() {
    textAlign(CENTER);
    textSize(32);
    if (game_state === 0) {
        rect(100, 170, 200, 40, 20);
        text("Start Game", 200, 200);
    }
    else if (game_state === 1) {
        text("Welcome", 200, 200);
        text("click anywhere to begin", 200, 300);
    }
    else if (game_state === 2 || game_state === 3) {
        text("War", 200, 100);
        draw_hand();
    }
    else if (game_state === 4) {
        text("Game Over", 200, 100);
        text("Final score:", 200, 200);
        text(wins+"-"+losses,200, 300);
    }
    
}

function mouseClicked() {
    if (game_state === 0 && in_button(100, 170, 200, 40)) { // start game
        clear();
        game_state = 1;
    }
    else if (game_state == 1) {
        clear();
        shuff();
        deal();
        game_state = 2;
    }
    else if (game_state == 2) {
        if (player.length == 1) {
            if (in_button((screenX-70)/2, screenY-200, 70, 100, 10)) {
                    play_card(0);
                }
        }
        else {
            for (var i = 0; i < player.length; i++) {
                if (in_button(15+i*(screenX-100)/(player.length-1), screenY-200, 70, 100)) {
                    play_card(i);
                }
            }
        }
    }
    else if (game_state == 3) {
        clear();
        game_state = 4;
    }
    else {
        clear();
        wins = 0;
        losses = 0;
        game_state = 1;
    }
}

function in_button(x, y, w, h) { // checks is mouse is in the defined rectangle
    // make a rounded corner version???
    if (mouseX >= x && mouseX <= x+w &&
        mouseY >= y && mouseY <= y+h) {
        return true;
    }
    return false;
}

function shuff() {
    deck = [];
    for (var i = 3; i <= 13; ++i) {
        for (var j = 0; j < 4; ++j) {
            deck.push(i);
        }
    }
    for (var j = 0; j < 3; ++j) {
        deck.push(1);
    }
    deck.push(2);
    var r, temp;
    for (var i = 1; i < deck.length; i++) {
        r = Math.floor(Math.random() * i);
        temp = deck[i];
        deck[i] = deck[r];
        deck[r] = temp;
    }
}

function deal() {
    player = [];
    cpu = [];
    for (var i = 0; i < 16; i++) {
        player.push(deck[0]);
        deck = deck.slice(1,deck.length);
    }
    for (i = 0; i < 16; i++) {
        cpu.push(deck[0]);
        deck = deck.slice(1,deck.length);
    }
}

function draw_hand() {
    textAlign(CENTER);
    if (player.length == 1) {
        rect((screenX-70)/2, screenY-200, 70, 100, 10);
        text(player[0], 35+(screenX-70)/2, screenY-137);
    }
    else {
        for (var i = 0; i < player.length; i++) {
            rect(15+i*(screenX-100)/(player.length-1), screenY-200, 70, 100, 10);
            text(player[i], 50+i*(screenX-100)/(player.length-1), screenY-137);
        }
        if ((screenX-100)/(player.length-1) < 70) {
            for (var i = 0; i < player.length; i++) {
                if (in_button(15+i*(screenX-100)/(player.length-1), screenY-200, 70, 100)) {
                    rect(15+i*(screenX-100)/(player.length-1), screenY-200, 70, 100, 10);
            text(player[i], 50+i*(screenX-100)/(player.length-1), screenY-137);
                }
            }
        }
    }
}

function play_card(n) {
    textSize(20);
    clear();
    var temp1 = player[n], temp2 = cpu[0];
    if (temp1 > temp2) {
        text('Opponent played '+temp2+', you win!', 200, 300);
        wins++;
    }
    else if (temp1 == temp2) {
        text('Opponent played '+temp2+', you tie!', 200, 300);
    }
    else {
        text('Opponent played '+temp2+', you lose!', 200, 300);
        losses++;
    }
    var temp = [];
    for (var i = 0; i < player.length; i++) {
        if (i != n) {
            temp.push(player[i]);
        }
    }
    player = temp;
    cpu.shift();
    if (player.length == 0) {
        game_state = 3;
    }
}