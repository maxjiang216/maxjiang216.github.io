var count = 0;
var screenX = window.screen.width * 0.8,
    screenY = window.screen.height * 0.8;
var start_button = {
        x: screenX / 2 - 100,
        y: 170,
        w: 200,
        h: 40,
        name: "Start Game"
    },
    play_selected_button = {
        x: screenX / 2 - 110,
        y: screenY - 80,
        w: 220,
        h: 60,
        name: "Play selected"
    },
    pass_button = {
        x: screenX - 105,
        y: screenY - 80,
        w: 90,
        h: 60,
        name: "Pass"
    },
    clear_button = {
        x: 15,
        y: screenY - 80,
        w: 90,
        h: 60,
        name: "Clear"
    },
    rules_button = {
        x: screenX - 105,
        y: 20,
        w: 90,
        h: 60,
        name: "Rules"
    },
    back_button = {
        x: 15,
        y: 20,
        w: 90,
        h: 60,
        name: "Back"
    };

function setup() {
    createCanvas(screenX, screenY);
    frameRate(30);
}

function draw() {
    fill(245, 245, 245);
    textAlign(CENTER);
    textSize(32);
    if (game_state == 0) {
        draw_button(start_button);
    } else if (game_state == 1) {
        text("Welcome", screenX / 2, 200);
        text("click anywhere to begin", screenX / 2, 300);
    } else if (game_state == 2) {
        clear();
        text("Card Game", screenX / 2, 100);
        textSize(25);
        text("CPU's hand: " + cpu.length, screenX / 2, 150);
        textSize(32);
        draw_hand();
        draw_hand(false);
        draw_button(play_selected_button);
        draw_button(pass_button);
        draw_button(clear_button);
        draw_button(rules_button);
    } else if (game_state == 3) {
        clear();
        text("Game Over", screenX / 2, 100);
        text("click anywhere to continue", screenX / 2, 300);
    } else if (game_state == 4) {
        clear();
        text("Game Over", screenX / 2, 100);
        if (player.length > cpu.length) {
            text("You lose!", screenX / 2, 200);
            text("You had " + player.length + " cards left", screenX / 2, 300);
        } else {
            text("You win!", screenX / 2, 200);
            text("CPU had " + cpu.length + " cards left", screenX / 2, 300);
        }
    } else if (game_state == 5) {
        clear();
        textSize(50);
        textAlign(CENTER);
        text("Rules", screenX / 2, 100);
        textSize(22);
        textAlign(LEFT);
        text("In this game, players take turns playing sets of cards. The goal of the game is to play all your cards before your opponent, in this case, the CPU player.\n\nA normal poker deck is used, except that the Jokers, 1 Ace, and 3 Twos are discarded, leaving a deck of 48 cards. These 48 cards are separated randomly into 3 equal piles of 16 cards, with each player taking one of the 3 piles. As you will have noticed, you and the CPU each start with 16 cards (the unused pile is there so that you cannot determine the opponent's cards from your own).\n\nThe first player is determined by the player who has the 3♠. In the case where neither player has the 3♠, the player with the 4♠ goes first, and in the case where neither player has a 4♠, 5♠, 6♠, 7♠,..., K♠, A♠, 2♠ are used until a first player is determined. Note that A♠ and 2♠ are always present in the deck. (For those curious: in the vanishingly improbable case that neither player has any ♠, ♡ is used, again starting from 3.)", 50, 150, screenX - 100, screenY - 50);
        textSize(32);
        textAlign(CENTER);
        draw_button(rules_button);
        draw_button(back_button);
    } else if (game_state == 6) {
        clear();
        textSize(50);
        textAlign(CENTER);
        text("Rules cont.", screenX / 2, 100);
        textSize(20);
        textAlign(LEFT);
        text("The first player is allowed to play any play. Following that, players must play plays of the same type that are of greater rank as the previous player. The only exception is that bombs trump any other play (except bombs of greater rank, of course). If they cannot do so or choose not to do so, they may pass. After a player passes, the other player can play like the first player, playing any play he wishes, and the game proceeds similarly. A player may not pass on the first turn or after a pass. The first player to play all his cards is the winner, and his score is equal to the number of cards his opponent has left.\n\nThe valid plays are the following:\n\nSingle cards. The greater the number, the greater the rank, with the exception that A is larger than K and 2 is greater than A.\n\nStraights. These must be at least 5 cards of consecutive numbers. Straights must be of the same length (number of cards) to be considered the same type. Note that A can come after K or before 2 in a straight, but 2 cannot come after A.\n\nDoubles. These are 2 cards of the same number. Again, double A trumps double K.", 50, 150, screenX - 100, screenY - 50);
        textSize(32);
        textAlign(CENTER);
        draw_button(rules_button);
        draw_button(back_button);
    } else if (game_state == 7) {
        clear();
        textSize(50);
        textAlign(CENTER);
        text("Rules cont.", screenX / 2, 100);
        textSize(17);
        textAlign(LEFT);
        text("Valid plays cont.\n\nDouble straight. Any number of doubles of consecutive numbers can be played together, ex. 3♡3♠4♡4♠. The number of cards must be the same for double straights to counts as the same type. Double A comes after double K.\n\nTriples. 3 cards of the same number. Note that there are only 3 A's so 3 A's counts as a bomb.\n\nTriple straights. Any number of triples of consecutive numbers can be played together. 3 A's can be used as part of a triple straight, after K (although it is hard to see when this would be advantageous).\n\nFull houses. These are a triple and a double, e.g. 3♡3♠4♣4♡4♠. Rank is determined by the triple (the double does not affect the play in any way, since only one player can have a triple of a given number). 3 A's can be used for the triple (although it is hard to see when this would be advantageous).\n\nBombs. These are all 4 of the same number, or all 3 A's. Players may optionally add an arbitrary single card \"add-on\" to the bomb (this does not affect the rank). Bombs can be played against plays of any other type, and bombs can trump bombs of smaller rank.", 50, 150, screenX - 100, screenY - 50);
        textSize(32);
        textAlign(CENTER);
        draw_button(rules_button);
        draw_button(back_button);
    }
}

function mouseClicked() {
    if (game_state == 0) { // start game
        if (in_button(start_button)) {
            clear();
            game_state = 1;
        }
    } else if (game_state == 1) {
        clear();
        shuff();
        deal();
        curr_type = [0, 0, 0];
        game_state = 2;
        if (!turn) {
            cpu_choose();
        }
    } else if (game_state == 2) {
        if (player.length == 1) {
            if (in_rect((screenX - 70) / 2, screenY - 200, 70, 100, 10)) {
                player[0].state = !player[0].state;
                play_selected_button.name = "Play selected";
                clear();
            }
        } else {
            for (var i = player.length - 1; i >= 0; i--) {
                if (in_rect(15 + i * (screenX - 100) / (player.length - 1), screenY - 200, 70, 100)) {
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
            } else { // invalid move
                play_selected_button.name = "Invalid move!";
            }
        }
        if (turn && in_button(pass_button)) {
            if (current.length > 0) { // cannot pass fresh
                current = [];
                curr_type = [0, 0, 0];
                turn = false;
                cpu_choose();
            }
        }
        if (in_button(clear_button)) {
            for (var i = 0; i < player.length; i++) {
                player[i].state = false;
            }
        }
        if (in_button(rules_button)) {
            game_state = 5;
            rules_button.name = "Next";
        }
    } else if (game_state == 3) {
        clear();
        current = [];
        curr_type = [0, 0, 0];
        game_state = 4;
    } else if (game_state == 4) {
        clear();
        wins = 0;
        losses = 0;
        game_state = 1;
    } else if (game_state == 5) {
        if (in_button(rules_button)) {
            game_state = 6;
            rules_button.name = "Next";
        }
        if (in_button(back_button)) {
            game_state = 2;
            rules_button.name = "Rules";
        }

    } else if (game_state == 6) {
        if (in_button(rules_button)) {
            game_state = 7;
            rules_button.name = "Done";
        }
        if (in_button(back_button)) {
            game_state = 5;
            rules_button.name = "Next";
        }
    } else if (game_state == 7) {
        if (in_button(rules_button)) {
            game_state = 2;
            rules_button.name = "Rules";
        }
        if (in_button(back_button)) {
            game_state = 6;
            rules_button.name = "Next";
        }
    }
}

function draw_button(button) {
    fill(255, 255, 255);
    rect(button.x, button.y, button.w, button.h, 20);
    textAlign(CENTER);
    textSize(32);
    fill(0, 0, 0);
    text(button.name, button.x + button.w / 2, button.y + button.h / 2 + 10);
    fill(255, 255, 255);
}

function in_button(button) {
    if (mouseX >= button.x && mouseX <= button.x + button.w &&
        mouseY >= button.y && mouseY <= button.y + button.h) {
        return true;
    }
    return false;
}

function in_rect(x, y, w, h) { // checks is mouse is in the defined rectangle
    // make a rounded corner version???
    if (mouseX >= x && mouseX <= x + w &&
        mouseY >= y && mouseY <= y + h) {
        return true;
    }
    return false;
}

function shuff() {
    deck = [];
    for (var i = 3; i <= 13; ++i) {
        deck.push({
            number: i,
            suit: "0",
            state: false
        });
        deck.push({
            number: i,
            suit: "1",
            state: false
        });
        deck.push({
            number: i,
            suit: "2",
            state: false
        });
        deck.push({
            number: i,
            suit: "3",
            state: false
        });
    }
    deck.push({
        number: 1,
        suit: "0",
        state: false
    });
    deck.push({
        number: 1,
        suit: "1",
        state: false
    });
    deck.push({
        number: 1,
        suit: "2",
        state: false
    });
    deck.push({
        number: 2,
        suit: "0",
        state: false
    });
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
        deck = deck.slice(1, deck.length);
    }
    player = sort_hand(player);
    for (i = 0; i < 16; i++) {
        cpu.push(deck[0]);
        deck = deck.slice(1, deck.length);
    }
    cpu = sort_hand(cpu);
    // determine initiative
    for (i = 3; i <= 15; i++) {
        if (find_card((i - 1) % 13 + 1, 0)) { // player
            turn = true;
            return;
        }
        if (find_card((i - 1) % 13 + 1, 0, false)) { // cpu
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
        } else {
            strokeWeight(1);
        }
        rect(x, y, 70, 100, 10);
        strokeWeight(1);
        if (card.suit == 1 || card.suit == 3) {
            fill(255, 0, 0);
        } else {
            fill(0, 0, 0);
        }
        textSize(32);
        switch (card.number) {
            case 1:
                text("A", 35 + x, 63 + y);
                break;
            case 11:
                text("J", 35 + x, 63 + y);
                break;
            case 12:
                text("Q", 35 + x, 63 + y);
                break;
            case 13:
                text("K", 35 + x, 63 + y);
                break;
            default:
                text(card.number, 35 + x, 63 + y);
        }
        textSize(20);
        if (card.suit == 0) {
            text("♠", 17 + x, 25 + y);
        } else if (card.suit == 1) {
            text("♡", 17 + x, 25 + y);
        } else if (card.suit == 2) {
            text("♣", 17 + x, 25 + y);
        } else if (card.suit == 3) {
            text("♢", 17 + x, 25 + y);
        }
    } else {
        strokeWeight(1);
        rect(x, y, 50, 71, 5);
        if (card.suit == 1 || card.suit == 3) {
            fill(255, 0, 0);
        } else {
            fill(0, 0, 0);
        }
        textSize(25);
        switch (card.number) {
            case 1:
                text("A", 25 + x, 46 + y);
                break;
            case 11:
                text("J", 25 + x, 46 + y);
                break;
            case 12:
                text("Q", 25 + x, 46 + y);
                break;
            case 13:
                text("K", 25 + x, 46 + y);
                break;
            default:
                text(card.number, 25 + x, 46 + y);
        }
        textSize(15);
        if (card.suit == 0) {
            text("♠", 12 + x, 18 + y);
        } else if (card.suit == 1) {
            text("♡", 12 + x, 18 + y);
        } else if (card.suit == 2) {
            text("♣", 12 + x, 18 + y);
        } else if (card.suit == 3) {
            text("♢", 12 + x, 18 + y);
        }
    }
    fill(255, 255, 255);
}

function draw_hand(type = true) {
    // type = (player, current)
    textAlign(CENTER);
    if (type) {
        if (player.length == 1) {
            draw_card(player[0], (screenX - 70) / 2, screenY - 200);
        } else {
            for (var i = 0; i < player.length; i++) {
                draw_card(player[i], 15 + i * (screenX - 100) / (player.length - 1), screenY - 200);
            }
            if ((screenX - 100) / (player.length - 1) < 70) {
                for (var i = player.length - 1; i >= 0; i--) {
                    if (in_rect(15 + i * (screenX - 100) / (player.length - 1), screenY - 200, 70, 100)) {
                        draw_card(player[i], 15 + i * (screenX - 100) / (player.length - 1), screenY - 200);
                        break;
                    }
                }
            }
        }
    } else {
        if (current.length == 1) {
            draw_card(current[0], (screenX - 50) / 2, 175, false);
        } else {
            for (var i = 0; i < current.length; i++) {
                draw_card(current[i], 50 + i * (screenX - 150) / (current.length - 1), 175, false);
            }
            if ((screenX - 150) / (current.length - 1) < 50) {
                for (var i = current.length - 1; i >= 0; i--) {
                    if (in_rect(50 + i * (screenX - 150) / (current.length - 1), 175, 35, 50)) {
                        draw_card(player[i], 50 + i * (screenX - 150) / (current.length - 1), 175, false);
                        break;
                    }
                }
            }
        }
    }
}

function sort_hand(lst) {
    var temp_lst = lst;
    for (var i = lst.length - 1; i > 0; i--) { // bubble sort because I'm lazy
        for (var j = 0; j < i; j++) {
            if (trumps(lst[j].number, lst[j + 1].number)) { // switch
                var temp = temp_lst[j];
                temp_lst[j] = temp_lst[j + 1];
                temp_lst[j + 1] = temp;
            }
        }
    }
    return temp_lst;
}

function play_type(lst) {
    // also checks validity?
    // [a,b]: [type, length, rank]
    // rank based on largest number (since 23456 < JQKA2 but 2 > J)
    // 0: new
    // 1: single
    // 2: double
    // 3: triple
    // 4: bomb
    // 5: full house
    lst = sort_hand(lst);
    if (lst.length == 0) { // fresh
        return [0, 0, 0];
    }
    if (lst.length == 1) { // single
        return [1, 1, lst[0].number];
    }
    if (lst.length == 2) { // double
        if (lst[0].number == lst[1].number) {
            return [2, 1, lst[0].number];
        }
    }
    if (lst.length == 3) {
        if (lst[0].number == lst[1].number &&
            lst[1].number == lst[2].number &&
            lst[2].number == 1) { // A-bomb
            return [4, 0, 1];
        }
        if (lst[0].number == lst[1].number &&
            lst[1].number == lst[2].number) { // A-bomb
            return [3, 1, lst[0].number];
        }
    }
    if (lst.length == 4) {
        if (lst[0].number == lst[1].number &&
            lst[1].number % 13 + 1 == lst[2].number &&
            lst[2].number == lst[3].number) { // double 2-chain
            return [2, 2, lst[2].number];
        }
        if (lst[0].number == lst[1].number &&
            lst[1].number == lst[2].number &&
            lst[2].number == lst[3].number) { // non-A bomb without add-on
            return [4, 0, lst[0].number];
        }
        if ((lst[0].number == lst[1].number &&
                lst[1].number == lst[2].number &&
                lst[2].number == 1) ||
            (lst[1].number == lst[2].number &&
                lst[2].number == lst[3].number &&
                lst[3].number == 1)) { // A-bomb with add-on (1112, a111)
            return [4, 1, 1];
        }
    }
    if (lst.length == 5) {
        if (lst[0].number + 1 == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number % 13 + 1 == lst[4].number) { // single 5-chain
            return [1, 5, lst[4].number] // No J, Q, K, A, 2
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 1 &&
            lst[4].number == 2) { // A, 2, 3, 4, 5
            return [1, 5, 5];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 2) { // 2, 3, 4, 5, 6
            return [1, 5, 6];
        }
        if ((lst[0].number == lst[1].number &&
                lst[1].number == lst[2].number &&
                lst[2].number == lst[3].number) ||
            (lst[1].number == lst[2].number &&
                lst[2].number == lst[3].number &&
                lst[3].number == lst[4].number)) { // non-A bomb with add-on (aaaab, abbbb)
            return [4, 1, lst[1].number];
        }
        if ((lst[0].number == lst[1].number &&
                lst[2].number == lst[3].number &&
                lst[3].number == lst[4].number) ||
            (lst[0].number == lst[1].number &&
                lst[1].number == lst[2].number &&
                lst[3].number == lst[4].number)) { // full house (aabbb, aaabb)
            return [5, 0, lst[2].number];
        }
    }
    if (lst.length == 6) {
        if (lst[0].number + 1 == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number % 13 + 1 == lst[5].number) { // single 6-chain
            return [1, 6, lst[5].number];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 1 &&
            lst[5].number == 2) { // A, 2, 3, 4, 5, 6
            return [1, 6, 6];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 2) { // 2, 3, 4, 5, 6, 7
            return [1, 6, 7];
        }
        if (lst[0].number == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number == lst[3].number &&
            lst[3].number % 13 + 1 == lst[4].number &&
            lst[4].number == lst[5].number) { // double 3-chain
            return [2, 3, lst[4].number];
        }
        if (lst[0].number == lst[1].number &&
            lst[1].number == lst[2].number &&
            lst[2].number % 13 + 1 == lst[3].number &&
            lst[3].number == lst[4].number &&
            lst[4].number == lst[5].number) { // triple 2-chain
            return [3, 2, lst[3].number];
        }
    }
    if (lst.length == 7) {
        if (lst[0].number + 1 == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number + 1 == lst[5].number &&
            lst[5].number % 13 + 1 == lst[6].number) { // single 7-chain
            return [1, 7, lst[6].number];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 1 &&
            lst[6].number == 2) { // A, 2, 3, 4, 5, 6, 7
            return [1, 7, 7];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 2) { // 2, 3, 4, 5, 6, 7, 8
            return [1, 7, 8];
        }
    }
    if (lst.length == 8) {
        if (lst[0].number + 1 == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number + 1 == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number % 13 + 1 == lst[7].number) { // single 8-chain
            return [1, 8, lst[7].number];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 1 &&
            lst[7].number == 2) { // A, 2, 3, 4, 5, 6, 7, 8
            return [1, 8, 8];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 2) { // 2, 3, 4, 5, 6, 7, 8, 9
            return [1, 8, 9];
        }
        if (lst[0].number == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number == lst[5].number &&
            lst[5].number % 13 + 1 == lst[6].number &&
            lst[6].number == lst[7].number) { // double 4-chain
            return [2, 4, lst[6].number];
        }
    }
    if (lst.length == 9) {
        if (lst[0].number + 1 == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number + 1 == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number + 1 == lst[7].number &&
            lst[7].number % 13 + 1 == lst[8].number) { // single 9-chain
            return [1, 9, lst[8].number];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 1 &&
            lst[8].number == 2) { // A, 2, 3, 4, 5, 6, 7, 8, 9
            return [1, 9, 9];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 10 &&
            lst[8].number == 2) { // 2, 3, 4, 5, 6, 7, 8, 9, 10
            return [1, 9, 10];
        }
        if (lst[0].number == lst[1].number &&
            lst[1].number == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number == lst[4].number &&
            lst[4].number == lst[5].number &&
            lst[5].number % 13 + 1 == lst[6].number &&
            lst[6].number == lst[7].number &&
            lst[7].number == lst[8].number) { // triple 3-chain
            return [3, 3, lst[6].number];
        }
    }
    if (lst.length == 10) {
        if (lst[0].number + 1 == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number + 1 == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number + 1 == lst[7].number &&
            lst[7].number + 1 == lst[8].number &&
            lst[8].number % 13 + 1 == lst[9].number) { // single 10-chain
            return [1, 10, lst[9].number];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 10 &&
            lst[8].number == 1 &&
            lst[9].number == 2) { // A, 2, 3, 4, 5, 6, 7, 8, 9, 10
            return [1, 10, 10];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 10 &&
            lst[8].number == 11 &&
            lst[9].number == 2) { // 2, 3, 4, 5, 6, 7, 8, 9, 11
            return [1, 10, 11];
        }
        if (lst[0].number == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number == lst[7].number &&
            lst[7].number % 13 + 1 == lst[8].number &&
            lst[8].number == lst[9].number) { // double 5-chain
            return [2, 5, lst[8].number];
        }
    }
    if (lst.length == 11) {
        if (lst[0].number + 1 == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number + 1 == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number + 1 == lst[7].number &&
            lst[7].number + 1 == lst[8].number &&
            lst[8].number + 1 == lst[9].number &&
            lst[9].number % 13 + 1 == lst[10].number) { // single 11-chain
            return [1, 11, lst[10].number];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 10 &&
            lst[8].number == 11 &&
            lst[9].number == 1 &&
            lst[10].number == 2) { // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
            return [1, 11, 11];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 10 &&
            lst[8].number == 11 &&
            lst[9].number == 12 &&
            lst[10].number == 2) { // 2, 3, 4, 5, 6, 7, 8, 9, 11, 12
            return [1, 11, 12];
        }
    }
    if (lst.length == 12) {
        if (lst[0].number + 1 == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number + 1 == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number + 1 == lst[7].number &&
            lst[7].number + 1 == lst[8].number &&
            lst[8].number + 1 == lst[9].number &&
            lst[9].number + 1 == lst[10].number &&
            lst[10].number % 13 + 1 == lst[11].number) { // single 12-chain
            return [1, 12, lst[11].number];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 10 &&
            lst[8].number == 11 &&
            lst[9].number == 12 &&
            lst[10].number == 1 &&
            lst[11].number == 2) { // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
            return [1, 12, 12];
        }
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 10 &&
            lst[8].number == 11 &&
            lst[9].number == 12 &&
            lst[10].number == 13 &&
            lst[11].number == 2) { // 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13
            return [1, 12, 13];
        }
        if (lst[0].number == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number == lst[7].number &&
            lst[7].number + 1 == lst[8].number &&
            lst[8].number == lst[9].number &&
            lst[9].number % 13 + 1 == lst[10].number &&
            lst[10].number == lst[11].number) { // double 6-chain
            return [2, 6, lst[10].number];
        }
        if (lst[0].number == lst[1].number &&
            lst[1].number == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number == lst[4].number &&
            lst[4].number == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number == lst[7].number &&
            lst[7].number == lst[8].number &&
            lst[8].number % 13 + 1 == lst[9].number &&
            lst[9].number == lst[10].number &&
            lst[10].number == lst[11].number) { // triple 4-chain
            return [3, 4, lst[9].number];
        }
    }
    if (lst.length == 13) {
        if (lst[0].number == 3 &&
            lst[1].number == 4 &&
            lst[2].number == 5 &&
            lst[3].number == 6 &&
            lst[4].number == 7 &&
            lst[5].number == 8 &&
            lst[6].number == 9 &&
            lst[7].number == 10 &&
            lst[8].number == 11 &&
            lst[9].number == 12 &&
            lst[10].number == 13 &&
            lst[11].number == 1 &&
            lst[12].number == 2) { // 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, A
            return [1, 13, 1];
        }
    }
    if (lst.length == 14) {
        if (lst[0].number == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number == lst[7].number &&
            lst[7].number + 1 == lst[8].number &&
            lst[8].number == lst[9].number &&
            lst[9].number + 1 == lst[10].number &&
            lst[10].number == lst[11].number &&
            lst[11].number % 13 + 1 == lst[12].number &&
            lst[12].number == lst[13].number) { // double 7-chain
            return [2, 7, lst[12].number];
        }
    }
    if (lst.length == 15) {
        if (lst[0].number == lst[1].number &&
            lst[1].number == lst[2].number &&
            lst[2].number + 1 == lst[3].number &&
            lst[3].number == lst[4].number &&
            lst[4].number == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number == lst[7].number &&
            lst[7].number == lst[8].number &&
            lst[8].number + 1 == lst[9].number &&
            lst[9].number == lst[10].number &&
            lst[10].number == lst[11].number &&
            lst[11].number % 13 + 1 == lst[12].number &&
            lst[12].number == lst[13].number &&
            lst[13].number == lst[14].number) { // triple 5-chain
            return [3, 5, lst[12].number];
        }
    }
    if (lst.length == 16) {
        if (lst[0].number == lst[1].number &&
            lst[1].number + 1 == lst[2].number &&
            lst[2].number == lst[3].number &&
            lst[3].number + 1 == lst[4].number &&
            lst[4].number == lst[5].number &&
            lst[5].number + 1 == lst[6].number &&
            lst[6].number == lst[7].number &&
            lst[7].number + 1 == lst[8].number &&
            lst[8].number == lst[9].number &&
            lst[9].number + 1 == lst[10].number &&
            lst[10].number == lst[11].number &&
            lst[11].number + 1 == lst[12].number &&
            lst[12].number == lst[13].number &&
            lst[13].number % 13 + 1 == lst[14].number &&
            lst[14].number == lst[15].number) { // double 8-chain
            return [2, 8, lst[14].number];
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
        (curr_type[0] == lst[0] && curr_type[1] == lst[1] && trumps(lst[2], curr_type[2])) ||
        (lst[0] == 4 && !(curr_type[0] == 4 && !trumps(lst[2], curr_type[2])))) { // fresh, normal, bomb
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
            } else {
                current.push(player[i]);
            }
        }
        curr_type = play_type(current);
        player = temp;
        if (player.length == 0) {
            game_state = 3;
        }
    } else {
        for (var i = 0; i < cpu.length; i++) {
            if (!cpu[i].state) {
                temp.push(cpu[i]);
            } else {
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
    console.log(current);
    console.log(curr_type);
}

function find_chain(lst, type = 1) { // returns list indicating which numbers have at least (type) of that number
    // input is lst of cards

    //lst = sort_hand(lst); // if sorts, indexes will make no sense
    var out = [];
    for (var i = 0; i <= 13; i++) {
        out.push(-1);
    }
    for (var i = 0; i < lst.length - type + 1; i++) {
        var match = true,
            curr = lst[i].number;
        for (var j = i + 1; j < i + type; j++) {
            if (lst[j].number != curr) {
                match = false;
                break;
            }
        }
        if (match) {
            out[curr] = max(out[curr], i); // returns last index where (type) of that number is found
        }
    }
    console.log(lst);
    console.log(out);
    return out;
}


function cpu_choose() {
    if (curr_type[0] == 0) { // fresh
        cpu[0].state = true;
    } else if (curr_type[0] == 1) { // single
        if (curr_type[1] == 1) {
            for (var i = 0; i < cpu.length; i++) {
                if (valid_play(play_type([cpu[i]]))) {
                    cpu[i].state = true;
                    break;
                }
            }
        } else {
            // chain
            var avail = find_chain(cpu);
            // curr_type[1] might be 1 (biggest), but no plays in this case anyway
            for (var i = max(curr_type[1], curr_type[2]); i <= 14; i++) { // iterate by largest card in chain
                var match = true;
                for (var j = i; j > i - curr_type[1]; j--) {
                    if (avail[(j - 1) % 13 + 1] == -1) {
                        match = false;
                        break;
                    }
                }
                if (match && trumps(i, curr_type[2])) { // only check if top card trumps current top card (2-A can only be played once)
                    for (j = i; j > i - curr_type[1]; j--) {
                        cpu[avail[(j - 1) % 13 + 1]].state = true;
                    }
                    break;
                }
            }
        }
    } else if (curr_type[0] == 2) { // double
        var avail = find_chain(cpu, 2);
        // curr_type[1] might be 1 (biggest), but no plays in this case anyway
        for (var i = max(curr_type[1], curr_type[2]); i <= 14; i++) { // iterate by largest card in chain
            var match = true;
            for (var j = i; j > i - curr_type[1]; j--) {
                if (avail[(j - 1) % 13 + 1] == -1) {
                    match = false;
                    break;
                }
            }
            if (match && trumps(i, curr_type[2])) { // only check if top card trumps current top card (not necessary?)
                for (j = i; j > i - curr_type[1]; j--) {
                    cpu[avail[(j - 1) % 13 + 1]].state = true;
                    cpu[avail[(j - 1) % 13 + 1] + 1].state = true;
                }
                break;
            }
        }
    } else if (curr_type[0] == 3) { // triple
        var avail = find_chain(cpu, 3);
        // curr_type[1] might be 1 (biggest), but no plays in this case anyway
        for (var i = max(curr_type[1], curr_type[2]); i <= 14; i++) { // iterate by largest card in chain
            var match = true;
            for (var j = i; j > i - curr_type[1]; j--) {
                if (avail[(j - 1) % 13 + 1] == -1) {
                    match = false;
                    break;
                }
            }
            if (match && trumps(i, curr_type[2])) { // only check if top card trumps current top card (not necessary?)
                for (j = i; j > i - curr_type[1]; j--) {
                    cpu[avail[(j - 1) % 13 + 1]].state = true;
                    cpu[avail[(j - 1) % 13 + 1] + 1].state = true;
                    cpu[avail[(j - 1) % 13 + 1] + 2].state = true;
                }
                break;
            }
        }
    } else if (curr_type[0] == 5) { // full house
        var done = false;
        for (var i = 0; i < cpu.length - 2; i++) {
            if (cpu[i].number == cpu[i + 1].number &&
                cpu[i + 1].number == cpu[i + 2].number &&
                trumps(cpu[i].number, curr_type[2])) { // valid triple
                console.log(cpu[i]);
                for (var j = 0; j < cpu.length - 1; j++) {
                    if ((j < i - 1 || j > i + 2) &&
                        cpu[j].number == cpu[j + 1].number) {
                        cpu[j].state = true;
                        cpu[j + 1].state = true;
                        cpu[i].state = true;
                        cpu[i + 1].state = true;
                        cpu[i + 2].state = true;
                        done = true;
                        break;
                    }
                }
                if (done) {
                    break;
                }
            }
        }
    } else { // no plays or bomb: play bomb
        for (var i = 0; i < cpu.length - 2; i++) {
            if (i < cpu.length - 3 &&
                valid_play(play_type([cpu[i], cpu[i + 1], cpu[i + 2], cpu[i + 3]]))) { // non-A bomb
                cpu[i].state = true;
                cpu[i + 1].state = true;
                cpu[i + 2].state = true;
                cpu[i + 3].state = true;
                if (i != 0) { // add-on
                    cpu[0].state = true;
                } else if (cpu.length > 4) {
                    cpu[4].state = true;
                }
                break;
            }
            if (valid_play(play_type([cpu[i], cpu[i + 1], cpu[i + 2]]))) { // A-bomb
                cpu[i].state = true;
                cpu[i + 1].state = true;
                cpu[i + 2].state = true;
                if (i != 0) { // add-on
                    cpu[0].state = true;
                } else if (cpu.length > 3) {
                    cpu[4].state = true;
                }
                break;
            }
        }
    }
    play_cards();
}