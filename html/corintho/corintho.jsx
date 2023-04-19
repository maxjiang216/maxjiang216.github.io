const boardElement = document.getElementById("board");
const pieces = document.querySelectorAll(".piece");
const pieceCounts = {};

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
        const newPiece = piece.cloneNode(true);
        newPiece.id = `${pieceId}-${Date.now()}`;
        addDragEventToPiece(newPiece);
        tile.appendChild(newPiece);
        const pieceType = pieceId.split("-")[0];
        updatePieceCount(pieceType, -1);
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
    const pieceId = event.target.id;
    const pieceType = pieceId.split("-")[0];
    if (pieceCounts[pieceType] >= 4) {
      event.preventDefault();
    } else {
      updatePieceCount(pieceType, 1);
      pieceCounts[pieceType] += 1;
    }
  };
}

function addDragEventsToPieces() {
  for (const piece of pieces) {
    const pieceId = piece.id;
    const pieceType = pieceId.split("-")[0];
    pieceCounts[pieceType] = 0;
    addDragEventToPiece(piece);

    // Add piece count element
    const pieceCountElement = document.createElement("div");
    pieceCountElement.classList.add("piece-count");
    pieceCountElement.innerText = `${4 - pieceCounts[pieceType]}`;
    pieceCountElement.style.backgroundColor = "#fff";
    pieceCountElement.style.color = "#222";
    pieceCountElement.style.borderRadius = "50%";
    pieceCountElement.style.width = "20px";
    pieceCountElement.style.height = "20px";
    pieceCountElement.style.fontSize = "12px";
    pieceCountElement.style.display = "flex";
    pieceCountElement.style.alignItems = "center";
    pieceCountElement.style.justifyContent = "center";
    piece.style.position = "relative";
    piece.appendChild(pieceCountElement);
    pieceCountElement.style.position = "absolute";
    pieceCountElement.style.bottom = "0";
    pieceCountElement.style.right = "0";
  }
}

function updatePieceCount(pieceType, change) {
  pieceCounts[pieceType] += change;
  const pieceCountElement = document.querySelector(`.piece#${pieceType}`).nextSibling;
  pieceCountElement.innerText = `${4 - pieceCounts[pieceType]} left`;
}

createBoard();
addDragEventsToPieces();