class GameState {
    constructor() {
      this.board = Array.from({ length: 4 }, () =>
        Array.from({ length: 4 }, () => ({ pieces: [], frozen: false }))
      );
      this.players = [
        { id: 0, pieceCounts: { base: 4, column: 4, capital: 4 } },
        { id: 1, pieceCounts: { base: 4, column: 4, capital: 4 } },
      ];
    }
  
    placePiece(playerId, pieceType, row, col) {
      // We don't need to check if the player has the piece, this will be handled by the engine
      this.board[row][col].pieces.push(pieceType);
      this.players[playerId].pieceCounts[pieceType]--;
      // Unfreeze all spaces
      for (let row = 0; row < this.board.length; row++) {
        for (let col = 0; col < this.board[row].length; col++) {
          this.board[row][col].frozen = false;
        }
      }
      // Freeze the target space
      this.board[row][col].frozen = true;
    }
  
    movePiece(sourceRow, sourceCol, targetRow, targetCol) {
      const sourceCell = this.board[sourceRow][sourceCol];
      const targetCell = this.board[targetRow][targetCol];
  
      const targetPieces = targetCell.pieces;
  
      targetCell.pieces.push(...sourceCell.pieces);
      sourceCell.pieces = [];
  
      // Unfreeze all spaces
      for (let row = 0; row < this.board.length; row++) {
        for (let col = 0; col < this.board[row].length; col++) {
          this.board[row][col].frozen = false;
        }
      }
  
      // Freeze the target space
      targetCell.frozen = true;
    }
  }
  
  export { GameState };
  