import { GameState } from "./game";

let gameState;

const pieceElements = {
  capital:
    '<img src="./capital.png" draggable="true" class="piece" alt="capital"/>',
  column:
    '<img src="./column.png" draggable="true" class="piece" alt="column"/>',
  base: '<img src="./base.png" draggable="true" class="piece" alt="base"/>',
};

function addDragEventToPiece(piece) {
  piece.ondragstart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };
}

function addDragEventsToPieces() {
  const pieces = document.getElementsByClassName("piece");
  for (const piece of pieces) {
    addDragEventToPiece(piece);
  }
}

function drawGame(gameState) {
  drawBoard(gameState);
  drawPieceBank(gameState);
}

function drawBoard(gameState) {
  console.log(gameState);
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = "";

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const cell = gameState.board[row][col];
      const tile = createTile(row, col, cell);
      boardElement.appendChild(tile);
    }
  }
  addDragEventsToPieces();
}

function createTile(row, col, cell) {
  const letters = ["a", "b", "c", "d"];
  const numbers = ["1", "2", "3", "4"];
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.dataset.row = row;
  tile.dataset.col = col;

  // Add pieces to the tile based on the cell.pieces list
  for (const pieceType of cell.pieces) {
    // Get the piece element from the pieceElements object
    const pieceElement = pieceElements[pieceType];

    if (pieceElement) {
      // Add the piece element to the tile using innerHTML
      const pieceWrapper = document.createElement("div");
      pieceWrapper.innerHTML = pieceElement;
      const clonedPiece = pieceWrapper.firstChild;
      clonedPiece.removeAttribute("id");
      clonedPiece.id = `${pieceType}-${row}-${col}`;
      tile.appendChild(clonedPiece);
    }
  }

  // Add 'frozen' class if the space is frozen
  if (cell.frozen) {
    tile.classList.add("frozen");
  }

  tile.ondragover = (event) => {
    event.preventDefault();
  };
  tile.ondrop = (event) => {
    event.preventDefault();
    const pieceId = event.dataTransfer.getData("text");
    const piece = document.getElementById(pieceId);

    // Check if the dropped item is a piece; do nothing if it's not
    if (piece === null || !piece.classList.contains("piece")) {
      return;
    }

    const pieceType = pieceId.split("-")[0];
    const sourceTile = piece.parentElement;
    const targetRow = parseInt(tile.dataset.row);
    const targetCol = parseInt(tile.dataset.col);
    if (sourceTile.classList.contains("piece-container")) {
      gameState.placePiece(0, pieceType, targetRow, targetCol);
    } else {
      gameState.movePiece(
        parseInt(sourceTile.dataset.row),
        parseInt(sourceTile.dataset.col),
        targetRow,
        targetCol
      );
    }
    drawGame(gameState);
  };

  if ((row + col) % 2 === 0) {
    tile.classList.add("light");
  } else {
    tile.classList.add("dark");
  }

  // Add letter labels to the bottom row
  if (row === 3) {
    const label = document.createElement("div");
    label.classList.add("label");
    label.classList.add("column");
    label.textContent = letters[col];
    if ((row + col) % 2 === 0) {
      label.classList.add("dark");
    } else {
      label.classList.add("light");
    }
    tile.appendChild(label);
  }
  if (col === 3) {
    const label = document.createElement("div");
    label.classList.add("label");
    label.classList.add("row");
    label.textContent = numbers[row];
    if ((row + col) % 2 === 0) {
      label.classList.add("dark");
    } else {
      label.classList.add("light");
    }
    tile.appendChild(label);
  }
  return tile;
}

function updateCounter(gameState, pieceType, cpu) {
  let counterElement;
  if (cpu) {
    counterElement = document.getElementById(`counter-${pieceType}-cpu`);
  } else {
    counterElement = document.getElementById(`counter-${pieceType}`);
  }
  counterElement.textContent =
    gameState.players[cpu ? 1 : 0].pieceCounts[pieceType];
}

function drawPieceBank(gameState) {
  for (const pieceType of ["base", "column", "capital"]) {
    updateCounter(gameState, pieceType, true);
    updateCounter(gameState, pieceType, false);
  }
}

export function initCorintho() {
  document.addEventListener("DOMContentLoaded", () => {
    gameState = new GameState();
    drawGame(gameState);
    addDragEventsToPieces();
  });
}
