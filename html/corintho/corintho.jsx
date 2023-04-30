document.addEventListener("DOMContentLoaded", () => {
    const boardElement = document.getElementById("board");
    const pieces = document.getElementsByClassName("piece");
  
    const pieceCounter = {
      capital: 0,
      column: 0,
      zbase: 0,
    };
  
    function updateCounter(pieceType) {
      const counterElement = document.getElementById(`counter-${pieceType}`);
      counterElement.textContent = 4 - pieceCounter[pieceType];
    }
  
    function doPlaceMove(pieceType, row, column) {
      const boardElement = document.querySelector("#board");
      const tiles = Array.from(boardElement.children);
      const tile = tiles.find(
        (tileElement) =>
          tileElement.dataset.row == row && tileElement.dataset.col == column
      );
      const pieceId = `${pieceType.toLowerCase()}`;
      const piece = document.getElementById(pieceId);
  
      const newPiece = piece.cloneNode(true);
      newPiece.id = `${pieceId}-${Date.now()}`;
      addDragEventToPiece(newPiece);
      tile.appendChild(newPiece);
  
      // Sort the pieces based on their pieceType
      const sortedPieces = Array.from(tile.children).sort((a, b) =>
        a.id.split("-")[0].localeCompare(b.id.split("-")[0])
      );
  
      // Clear the tile and re-append the sorted pieces
      tile.innerHTML = "";
      for (const piece of sortedPieces) {
        tile.appendChild(piece);
      }
  
      pieceCounter[pieceType]++;
      updateCounter(pieceType);
    }
  
    function doMoveMove(sourceRow, sourceCol, targetRow, targetCol) {
      const boardElement = document.querySelector("#board");
      const tiles = Array.from(boardElement.children);
      const sourceTile = tiles.find(
        (tileElement) =>
          tileElement.dataset.row == sourceRow &&
          tileElement.dataset.col == sourceCol
      );
      const targetTile = tiles.find(
        (tileElement) =>
          tileElement.dataset.row == targetRow &&
          tileElement.dataset.col == targetCol
      );
  
      // Move all pieces from the source tile to the target tile
      for (const child of Array.from(sourceTile.children)) {
        if (child.classList.contains("piece")) {
          const movedPiece = child;
          addDragEventToPiece(movedPiece);
          targetTile.appendChild(movedPiece);
        }
      }
  
      // Sort the pieces based on their pieceType
      const sortedPieces = Array.from(targetTile.children).sort((a, b) =>
        a.id.split("-")[0].localeCompare(b.id.split("-")[0])
      );
  
      // Clear the target tile and re-append the sorted pieces
      targetTile.innerHTML = "";
      for (const piece of sortedPieces) {
        targetTile.appendChild(piece);
      }
    }
  
    function createBoard() {
      const letters = ["a", "b", "c", "d"];
      const numbers = ["1", "2", "3", "4"];
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          const tile = document.createElement("div");
          tile.classList.add("tile");
          tile.dataset.row = row;
          tile.dataset.col = col;
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
            // Filter tile.children to only include elements with the 'piece' class
            const pieces = Array.from(tile.children).filter((child) =>
              child.classList.contains("piece")
            );
            // Check if the tile already has a piece of the same type
            const existingPiece = Array.from(pieces).find(
              (child) => child.id.split("-")[0] === pieceType
            );
            if (existingPiece) {
              return; // If there's already a piece of the same type, do nothing
            }
            if (pieceType === "zbase" && pieces.length > 0) {
              return; // Cannot place a base on top of another piece
            }
            if (pieces.length > 0 && pieces[0].id.split("-")[0] === "capital") {
              return; // Cannot place a piece on top of a capital
            }
            if (
              pieceType === "capital" &&
              pieces.length == 1 &&
              pieces[0].id.split("-")[0] === "zbase"
            ) {
              return; // Cannot place capital on top of base
            }
            if (sourceTile.classList.contains("piece-container")) {
              if (pieceCounter[pieceType] < 4) {
                doPlaceMove(pieceType, targetRow, targetCol);
              }
            } else {
              doMoveMove(
                parseInt(sourceTile.dataset.row),
                parseInt(sourceTile.dataset.col),
                targetRow,
                targetCol
              );
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
  