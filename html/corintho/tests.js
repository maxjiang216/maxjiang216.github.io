import { createBoard, doPlaceMove } from "./corintho.jsx";

export function runTests() {
    createBoard();
    // Test 1: Place a zbase piece on the board
    doPlaceMove("zbase", 0, 0);
    const test1Result = checkPieceAt("zbase", 0, 0);
    console.log("Test 1 (Place zbase at 0, 0):", test1Result ? "Passed" : "Failed");

    // Test 2: Place a capital piece on top of the zbase
    doPlaceMove("capital", 0, 0);
    const test2Result = checkPieceAt("capital", 0, 0) && checkPieceAt("zbase", 0, 0);
    console.log("Test 2 (Place capital on top of zbase at 0, 0):", test2Result ? "Passed" : "Failed");

    // Test 3: Place a column piece at position (1, 1)
    doPlaceMove("column", 1, 1);
    const test3Result = checkPieceAt("column", 1, 1);
    console.log("Test 3 (Place column at 1, 1):", test3Result ? "Passed" : "Failed");
}

function checkPieceAt(pieceType, row, col) {
    const boardElement = document.querySelector("#board");
    const tiles = Array.from(boardElement.children);
    const tile = tiles.find(
        (tileElement) =>
            tileElement.dataset.row == row && tileElement.dataset.col == col
    );
    return Array.from(tile.children).some(child => child.id.split("-")[0] === pieceType);
}

function checkOnlyOnePieceAt(pieceType, row, col) {
    const boardElement = document.querySelector("#board");
    const tiles = Array.from(boardElement.children);
    const tile = tiles.find(
        (tileElement) =>
            tileElement.dataset.row == row && tileElement.dataset.col == col
    );
    const pieceCount = Array.from(tile.children).filter(child => child.id.split("-")[0] === pieceType).length;
    return pieceCount === 1;
}
