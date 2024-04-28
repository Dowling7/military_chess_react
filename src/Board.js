import React, { useState, useEffect } from 'react';
import Piece from './Piece';


const Board = () => {
  const pieceValues = [-1, -1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10];
  const [board, setBoard] = useState([]);
  

  useEffect(() => {
    initializeBoard();
  }, []);

  const initializeBoard = () => {
    let initBoard = new Array(5).fill(null).map(() => new Array(13).fill(null));
    let redPieces = pieceValues.map(value => ({ value, color: 'red' }));
    let blackPieces = pieceValues.map(value => ({ value, color: 'black' }));
    let allPieces = [...redPieces, ...blackPieces]; // Combine both arrays
    let shuffledPieces = shuffleAndAssignPieces(allPieces); // Shuffle once after combining
    assignPiecesToBoard(initBoard, shuffledPieces);
  };

  const shuffleAndAssignPieces = (pieces) => {
    for (let i = pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }
    return pieces;
  };

  const assignPiecesToBoard = (initBoard, shuffledPieces) => {
    const emptyCells = new Set(['1,2', '1,4', '2,3', '1,8', '1,10', '3,2', '2,9', '3,4', '3,8', '3,10']);
    let pieceIndex = 0;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 13; j++) {
        if (emptyCells.has(`${i},${j}`) || j === 6) { // Skip over specified empty cells and the middle column
          initBoard[i][j] = null;
        } else {
          if (pieceIndex < shuffledPieces.length) {
            initBoard[i][j] = shuffledPieces[pieceIndex++];
          }
        }
      }
    }
    setBoard(initBoard);
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <Piece key={cellIndex} piece={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
