var count = 0;
var screenX = 600, screenY = 520;
var start_button = {x: screenX/2-100, y: 170, w: 200, h: 40, name: "Start Game"}, play_selected_button = {x: screenX/2-110, y: screenY-80, w: 220, h: 60, name: "Play selected"}, pass_button = {x: screenX-100, y: screenY-80, w: 85, h: 60, name: "Pass"};

function setup() {
    createCanvas(screenX, screenY);
    frameRate(120);
}

function draw() {
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(32);
    if (game_state == 0) {
        draw_button(start_button);
    }
    else if (game_state == 1) {
        text("Welcome", screenX/2, 200);
        text("click anywhere to begin", screenX/2, 300);
    }
    else if (game_state == 2 || game_state == 3) {
        clear();
        text("War", screenX/2, 100);
        textSize(25);
        text("CPU's hand: "+cpu.length, screenX/2, 150);
        textSize(32);
        draw_hand();
        draw_hand(false);
        draw_button(play_selected_button);
        draw_button(pass_button);
    }
    else if (game_state == 4) {
        clear();
        text("Game Over", screenX/2, 100);
        if (player.length > cpu.length) {
            text("You lose!", screenX/2, 200);
            text("You had "+player.length+" cards left", screenX/2, 300);
        }
        else {
            text("You win!", screenX/2, 200);
            text("CPU had "+cpu.length+" cards left", screenX/2, 300);
        }
    }
    
}

function mouseClicked() {
    if (game_state == 0) { // start game
        if (in_button(start_button)) {
            clear();
            game_state = 1;
        }
    }
    else if (game_state == 1) {
        clear();
        shuff();
        deal();
        curr_type = [0, 0, 0];
        game_state = 2;
        if (!turn) {
            cpu_choose();
        }
    }
    else if (game_state == 2) {
        if (player.length == 1) {
            if (in_rect((screenX-70)/2, screenY-200, 70, 100, 10)) {
                    player[0].state = !player[0].state;
                    play_selected_button.name = "Play selected";
                    clear();
                }
        }
        else {
            for (var i = player.length-1; i >= 0; i--) {
                if (in_rect(15+i*(screenX-100)/(player.length-1), screenY-200, 70, 100)) {
                    player[i].state = !player[i].state;
                    play_selected_button.name = "Play selected";
                    clear();
                    break;
                }
            }
        }
        if (turn && in_button(play_selected_button)) {
            if (valid_play(get_play())) { // play selected cards
                play_cards();
                if (game_state == 2) {
                    cpu_choose();
                }
            }
            else { // invalid move
                play_selected_button.name = "Invalid move!";
            }
        }
        if (turn && in_button(pass_button)) {
            current = [];
            curr_type = [0, 0, 0];
            turn = false;
            cpu_choose();
        }
    }
    else if (game_state == 3) {
        clear();
        game_state = 4;
    }
    else if (game_state == 4) {
        clear();
        wins = 0;
        losses = 0;
        game_state = 1;
    }
}

function draw_button(button) {
    fill(255, 255, 255);
    rect(button.x, button.y, button.w, button.h, 20);
    textAlign(CENTER);
    textSize(32);
    fill(0, 0, 0);
    text(button.name, button.x+button.w/2, button.y+button.h/2+10);
    fill(255, 255, 255);
}

function in_button(button) {
    if (mouseX >= button.x && mouseX <= button.x+button.w &&
        mouseY >= button.y && mouseY <= button.y+button.h) {
        return true;
    }
    return false;
}

function in_rect(x, y, w, h) { // checks is mouse is in the defined rectangle
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
        deck.push({number: i, suit: "0", state: false});
        deck.push({number: i, suit: "1", state: false});
        deck.push({number: i, suit: "2", state: false});
        deck.push({number: i, suit: "3", state: false});
    }
    deck.push({number: 1, suit: "0", state: false});
    deck.push({number: 1, suit: "1", state: false});
    deck.push({number: 1, suit: "2", state: false});
    deck.push({number: 2, suit: "0", state: false});
    var r, temp;
    for (var i = 1; i < deck.length; i++) {
        r = Math.floor(Math.random() * i);
        temp = deck[i];
        deck[i] = deck[r];
        deck[r] = temp;
    }
}

function find_card(n, s, p = true) { // check if player has specified card
    if (p) { // player
        for (var i = 0; i < player.length; i++) {
            if (player[i].number == n &&
                player[i].suit == s) {
                return true;
            }
        }
        return false;
    }
    for (var i = 0; i < cpu.length; i++) {
        if (cpu[i].number == n &&
            cpu[i].suit == s) {
            return true;
        }
    }
    return false;
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
    // determine initiative
    for (i = 3; i <= 15; i++) {
        if (find_card((i-1)%13+1, 0)) { // player
            turn = true;
            return;
        }
        if (find_card((i-1)%13+1, 0, false)) { // cpu
            turn = false;
            return;
        }
    }
    for (i = 3; i <= 5; i++) { // very unlikely, search for hearts
        if (find_card(i, 1)) { // player
            turn = true;
            return;
        }
        if (find_card(i, 1, false)) { // cpu
            turn = false;
            return;
        }
    }
}

function draw_card(card, x, y, type = true) {
    // type = (player, current)
    fill(255, 255, 255);
    if (type) {
        if (card.state) {
            strokeWeight(4);
        }
        else {
            strokeWeight(1);
        }
        rect(x, y, 70, 100, 10);
        strokeWeight(1);
        if (card.suit == 1 || card.suit == 3) {
            fill(255, 0, 0);
        }
        else {
            fill(0, 0, 0);
        }
        textSize(32);
        switch(card.number) {
            case 1:
                text("A", 35+x, 63+y);
                break;
            case 11:
                text("J", 35+x, 63+y);
                break;
            case 12:
                text("Q", 35+x, 63+y);
                break;
            case 13:
                text("K", 35+x, 63+y);
                break;
            default:
                text(card.number, 35+x, 63+y);
        }
        textSize(20);
        if (card.suit == 0) {
            text("♠", 17+x, 25+y);
        }
        else if (card.suit == 1) {
            text("♡", 17+x, 25+y);
        }
        else if (card.suit == 2) {
            text("♣", 17+x, 25+y);
        }
        else if (card.suit == 3) {
            text("♢", 17+x, 25+y);
        }
    }
    else {
        strokeWeight(1);
        rect(x, y, 50, 71, 5);
        if (card.suit == 1 || card.suit == 3) {
            fill(255, 0, 0);
        }
        else {
            fill(0, 0, 0);
        }
        textSize(25);
        switch(card.number) {
            case 1:
                text("A", 25+x, 46+y);
                break;
            case 11:
                text("J", 25+x, 46+y);
                break;
            case 12:
                text("Q", 25+x, 46+y);
                break;
            case 13:
                text("K", 25+x, 46+y);
                break;
            default:
                text(card.number, 25+x, 46+y);
        }
        textSize(15);
        if (card.suit == 0) {
            text("♠", 12+x, 18+y);
        }
        else if (card.suit == 1) {
            text("♡", 12+x, 18+y);
        }
        else if (card.suit == 2) {
            text("♣", 12+x, 18+y);
        }
        else if (card.suit == 3) {
            text("♢", 12+x, 18+y);
        }
    }
    fill(255, 255, 255);
}

function draw_hand(type = true) {
    // type = (player, current)
    textAlign(CENTER);
    if (type) {
        if (player.length == 1) {
            draw_card(player[0], (screenX-70)/2, screenY-200);
        }
        else {
            for (var i = 0; i < player.length; i++) {
                draw_card(player[i], 15+i*(screenX-100)/(player.length-1), screenY-200);
            }
            if ((screenX-100)/(player.length-1) < 70) {
                for (var i = player.length-1; i >= 0; i--) {
                    if (in_rect(15+i*(screenX-100)/(player.length-1), screenY-200, 70, 100)) {
                        draw_card(player[i], 15+i*(screenX-100)/(player.length-1), screenY-200);
                        break;
                    }
                }
            }
        }
    }
    else {
        if (current.length == 1) {
            draw_card(current[0], (screenX-50)/2, 175, false);
        }
        else {
            for (var i = 0; i < current.length; i++) {
                draw_card(current[i], 50+i*(screenX-150)/(current.length-1), 1750, false);
            }
            if ((screenX-150)/(current.length-1) < 50) {
                for (var i = current.length-1; i >= 0; i--) {
                    if (in_rect(50+i*(screenX-150)/(current.length-1), 175, 35, 50)) {
                        draw_card(player[i], 50+i*(screenX-150)/(current.length-1), 175, false);
                        break;
                    }
                }
            }
        }
    }
}

function play_type(lst) {
    // also checks validity?
    // [a,b]: [type, length, rank]
    // 0: new
    // 1: single
    // 2: double
    // 3: triple
    // 4: bomb
    // 5: full house
    if (lst.length == 0) {
        return [0, 0, 0];
    }
    if (lst.length == 1) {
        return [1, 1, lst[0].number];
    }
    if (lst.length == 2) {
        if (lst[0].number == lst[1].number) {
            return [2, 1, lst[0].number];
        }
    }
    return [-1, -1, -1]; // invalid move;
}

function get_play() { // returns type of selected cards
    var temp = [];
    for (var i = 0; i < player.length; i++) {
        if (player[i].state) {
            temp.push(player[i]);
        }
    }
    return play_type(temp);
}

function trumps(a, b) {
    // a > b ?
    if (a == 2) {
        return true;
    }
    if (a == 1) {
        if (b != 2 && b != 1) {
            return true;
        }
        return false;
    }
    if (b == 2 || b == 1) {
        return false;
    }
    if (a > b) {
        return true;
    }
    return false;
    
}

function valid_play(lst) {
    if (lst[0] == -1) {
        return false; // invalid move
    }
    if (curr_type[0] == 0 ||
       (curr_type[0] == lst[0] && curr_type[1] == lst[1] && trumps(lst[2], curr_type[2]))) {
        return true; // valid
    }
    return false; // incompatible / too small 
}

function play_cards() {
    var temp = [];
    current = [];
    if (turn) { // player
        for (var i = 0; i < player.length; i++) {
            if (!player[i].state) {
                temp.push(player[i]);
            }
            else {
                current.push(player[i]);
            }
        }
        curr_type = play_type(current);
        player = temp;
        if (player.length == 0) {
            game_state = 3;
        }
    }
    else {
        for (var i = 0; i < cpu.length; i++) {
            if (!cpu[i].state) {
                temp.push(cpu[i]);
            }
            else {
                current.push(cpu[i]);
            }
        }
        curr_type = play_type(current);
        cpu = temp;
        if (cpu.length == 0) {
            game_state = 3;
        }
    }
    turn = !turn;
}

function cpu_choose() {
    if (curr_type[0] == 0) { // fresh
        cpu[0].state = true;
    }
    else if (curr_type[0] == 1) { // single
        for (var i = 0; i < cpu.length; i++) {
            if (valid_play([1,1,cpu[i].number])) {
                cpu[i].state = true;
                break;
            }
        }
    }
    play_cards();
}
