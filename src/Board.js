import React, { useState, useEffect } from 'react';
import Piece from './Piece';

const Board = () => {
  const [board, setBoard] = useState([]);
  const [pieces, setPieces] = useState({
    red: [-1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9],
    black: [-1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9]
  });

  useEffect(() => {
    initializeBoard();
  }, []);

  const initializeBoard = () => {
    let newBoard = new Array(5).fill(null).map(() => new Array(13).fill(null));
    setBoard(newBoard);
    shuffleAndAssignPieces();
  };

  const shuffleAndAssignPieces = () => {
    let redPieces = shuffleArray([...pieces.red]);
    let blackPieces = shuffleArray([...pieces.black]);
    let initBoard = [...board];
    // Implement your logic to assign pieces to the board
    setBoard(initBoard);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
