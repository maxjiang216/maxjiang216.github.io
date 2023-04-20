document.addEventListener("DOMContentLoaded", () => {
  const boardElement = document.getElementById("board");
const pieces = document.getElementsByClassName("piece");

const pieceCounter = {
  capital: 0,
  column: 0,
  base: 0,
};

function updateCounter(pieceType) {
  const counterElement = document.getElementById(`counter-${pieceType}`);
  counterElement.textContent = 4 - pieceCounter[pieceType];
}

function createBoard() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.ondragover = (event) => {
        event.preventDefault();
      };
      tile.ondrop = (event) => {
        event.preventDefault();
        const pieceId = event.dataTransfer.getData("text");
        const piece = document.getElementById(pieceId);
        const pieceType = pieceId.split("-")[0];
        if (pieceCounter[pieceType] < 4) {
          const newPiece = piece.cloneNode(true);
          newPiece.id = `${pieceId}-${Date.now()}`;
          addDragEventToPiece(newPiece);
          tile.appendChild(newPiece);
          pieceCounter[pieceType]++;
          updateCounter(pieceType);
        }
      };

      if ((row + col) % 2 === 0) {
        tile.classList.add("light");
      } else {
        tile.classList.add("dark");
      }

      boardElement.appendChild(tile);
    }
  }
}

function addDragEventToPiece(piece) {
  piece.ondragstart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };
}

function addDragEventsToPieces() {
  for (const piece of pieces) {
    addDragEventToPiece(piece);
  }
}


createBoard();
addDragEventsToPieces();

});