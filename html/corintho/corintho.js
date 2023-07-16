import {
  GameState
} from "./game.js";

let gameState;

const pieceElements = {
  capital: '<img src="./capital.png" draggable="true" class="piece" alt="capital"/>',
  column: '<img src="./column.png" draggable="true" class="piece" alt="column"/>',
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
  if (gameState.turn === 0 || gameState.turn === 1) {
      drawTurn(gameState);
  }
}

function drawBoard(gameState) {
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
  for (let pieceType in cell.pieces) {
      if (cell.pieces[pieceType]) {
          // Add the piece element to the tile using innerHTML
          const pieceWrapper = document.createElement("div");
          pieceWrapper.innerHTML = pieceElements[pieceType];
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
  tile.ondrop = async (event) => {
      event.preventDefault();

      // Do nothing if it's the CPU's turn
      if (gameState.turn !== 0) {
          return;
      }

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
          if (!gameState.isLegalPlace(pieceType, targetRow, targetCol)) {
              return;
          }
          gameState.placePiece(pieceType, targetRow, targetCol);
      } else {
          if (!gameState.isLegalMove(parseInt(sourceTile.dataset.row),
                  parseInt(sourceTile.dataset.col),
                  targetRow,
                  targetCol)) {
              return;
          }
          gameState.movePiece(
              parseInt(sourceTile.dataset.row),
              parseInt(sourceTile.dataset.col),
              targetRow,
              targetCol
          );
      }
      drawGame(gameState);
      const response = await chooseCPUMove(gameState);
      gameState.legalMoves = response["legal_moves"]
      doCPUMove(gameState, response.move);
      if (response.is_done) {
          endGame(response.has_won ? "loss" : "draw", gameState);
      }
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

function drawTurn(gameState) {
  const turnElement = document.getElementById("turn-counter");
  turnElement.textContent = `It's ${
  gameState.turn === 0 ? "your" : "the CPU's"
} turn!${gameState.turn === 0 ? "" : " (thinking...)"}`;
}

async function chooseCPUMove(gameState) {
    console.log(JSON.stringify({
        gameState: gameState,
        timeLimit: 1,
        searchesPerEval: 100,
        maxNodes: 30000,
    }))
  const serviceUrl = "https://corintho-play-oduku67f7a-uc.a.run.app/choose_move";
  const requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          gameState: gameState,
          timeLimit: 1,
          searchesPerEval: 100,
          maxNodes: 30000,
      }),
  };
  const response = await fetch(serviceUrl, requestOptions);
  if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
  }
  const moveData = await response.json();

  if ("pre-result" in moveData) {
      endGame(moveData["pre-result"], gameState);
  }

  const moveId = moveData.move;
  const mtype = moveId >= 48;
  const pieceTypes = ["base", "column", "capital"];

  if (mtype) {
      moveData.move = {
          "type": true,
          "pieceType": pieceTypes[Math.floor((moveId - 48) / 16)],
          "row": Math.floor((moveId % 16) / 4),
          "col": moveId % 4,
      }
  } else if (moveId < 12) {
      moveData.move = {
          "type": false,
          "sourceRow": Math.floor(moveId / 3),
          "sourceCol": moveId % 3,
          "targetRow": Math.floor(moveId / 3),
          "targetCol": moveId % 3 + 1,
      };
  } else if (moveId < 24) {
      moveData.move = {
          "type": false,
          "sourceRow": Math.floor((moveId - 12) / 4),
          "sourceCol": moveId % 4,
          "targetRow": Math.floor((moveId - 12) / 4) + 1,
          "targetCol": moveId % 4,
      };
  } else if (moveId < 36) {
      moveData.move = {
          "type": false,
          "sourceRow": Math.floor((moveId - 24) / 3),
          "sourceCol": moveId % 3 + 1,
          "targetRow": Math.floor((moveId - 24) / 3),
          "targetCol": moveId % 3,
      };
  } else {
      moveData.move = {
          "type": false,
          "sourceRow": Math.floor((moveId - 32) / 4),
          "sourceCol": moveId % 4,
          "targetRow": Math.floor((moveId - 32) / 4) - 1,
          "targetCol": moveId % 4,
      };
  }

  return moveData;
}

function doCPUMove(gameState, move) {
  if (move === null || gameState.turn !== 1) {
      return false;
  }
  // Place
  if (move.type) {
      gameState.placePiece(move.pieceType, move.row, move.col);
  }
  // Move
  else {
      gameState.movePiece(move.sourceRow, move.sourceCol, move.targetRow, move.targetCol);
  }
  drawGame(gameState);
  return true;
}

function endGame(result, gameState) {
  const turnElement = document.getElementById("turn-counter");
  if (result === "win") {
      turnElement.textContent = "You won!";
  } else if (result === "draw") {
      turnElement.textContent = "It's a draw!";
  } else {
      turnElement.textContent = "You lost!";
  }
  gameState.turn = -1;
  drawGame(gameState);
}

export function initCorintho() {
  document.addEventListener("DOMContentLoaded", () => {
      gameState = new GameState();
      drawGame(gameState);
      addDragEventsToPieces();
  });
}
