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

    function createBoard() {
        const letters = ['a', 'b', 'c', 'd'];
        const numbers = ['1', '2', '3', '4'];
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
                    const sourceTile = piece.parentElement;
                    // Check if the tile already has a piece of the same type
                    const existingPiece = Array.from(tile.children).find(
                        (child) => child.id.split("-")[0] === pieceType
                    );
                    if (existingPiece) {
                        return; // If there's already a piece of the same type, do nothing
                    }
                    if (pieceType === "zbase" && tile.children.length > 0) {
                        return; // Cannot place a base on top of another piece
                    }
                    if (tile.children.length > 0 && tile.children[0].id.split("-")[0] === "capital") {
                        return; // Cannot place a piece on top of a capital
                    }
                    if (pieceType === "capital" && tile.children.length == 1 && tile.children[0].id.split("-")[0] === "zbase") {
                        return; // Cannot place capital on top of base
                    }
                    if (sourceTile.classList.contains("piece-container")) {
                        if (pieceCounter[pieceType] < 4) {
                            const newPiece = piece.cloneNode(true);
                            newPiece.id = `${pieceId}-${Date.now()}`;
                            addDragEventToPiece(newPiece);
                            tile.appendChild(newPiece);
                            // Sort the pieces based on their pieceType
                            const sortedPieces = Array.from(tile.children).sort(
                                (a, b) => a.id.split("-")[0].localeCompare(b.id.split("-")[0])
                            );
                            // Clear the tile and re-append the sorted pieces
                            tile.innerHTML = "";
                            for (const piece of sortedPieces) {
                                tile.appendChild(piece);
                            }
                            pieceCounter[pieceType]++;
                            updateCounter(pieceType);
                        }
                    } else {
                        // If the source is another tile on the board
                        // Move all pieces from the source tile to the target tile
                        while (sourceTile.firstChild) {
                            const movedPiece = sourceTile.firstChild;
                            addDragEventToPiece(movedPiece);
                            tile.appendChild(movedPiece);
                            // Sort the pieces based on their pieceType
                            const sortedPieces = Array.from(tile.children).sort(
                                (a, b) => a.id.split("-")[0].localeCompare(b.id.split("-")[0])
                            );
                            // Clear the tile and re-append the sorted pieces
                            tile.innerHTML = "";
                            for (const piece of sortedPieces) {
                                tile.appendChild(piece);
                            }
                        }
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