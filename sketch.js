var count = 0;

function setup() {
    createCanvas(400, 400);
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
    if (game_state === 0 && in_button(100, 170, 300, 210)) { // start game
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
        for (var i = 0; i < player.length; i++) {
            if (in_button(15+i*75, 140, 85+i*75, 240)) {
                play_card(i);
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

function in_button(x1, y1, x2, y2) { // checks is mouse is in the defined rectangle
    // make a rounded corner version???
    if (mouseX >= x1 && mouseX <= x2 &&
        mouseY >= y1 && mouseY <= y2) {
        return true;
    }
    return false;
}

function shuff() {
    deck = [];
    for (var i = 1; i <= 13; ++i) {
       for (var j = 0; j < 4; ++j) {
            deck.push(i);
        }
    }
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
    for (var i = 0; i < 5; i++) {
        player.push(deck[0]);
        deck = deck.slice(1,deck.length);
    }
    for (i = 0; i < 5; i++) {
        cpu.push(deck[0]);
        deck = deck.slice(1,deck.length);
    }
}

function draw_hand() {
    textAlign(CENTER);
    for (var i = 0; i < player.length; i++) {
        rect(15+i*75, 140, 70, 100, 20);
        text(player[i], 50+i*75, 200);
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