// Board.js
import React, { useState, useEffect } from 'react';
import Piece from './Piece';

const initialPieces = Array(60).fill(null); // Adjusted for a board with 60 pieces
const cssPosHori = [10, 104, 198, 293, 386];
const cssPosVer = [12, 59, 107, 155, 202, 250, 350, 398, 445, 493, 541, 588];

function Board() {
  const [pieces, setPieces] = useState([...initialPieces]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handlePieceClick = (index) => {
    if (gameOver) return;

    const piece = pieces[index];
    if (!piece) {
      if (selectedPiece && canMove(selectedPiece.position, index)) {
        movePiece(selectedPiece.position, index);
      }
    } else {
      if (piece.group === turn) {
        setSelectedPiece(piece);
      } else if (selectedPiece) {
        attack(selectedPiece.position, index);
      }
    }
  };

  const movePiece = (from, to) => {
    const newPieces = [...pieces];
    newPieces[to] = newPieces[from];
    newPieces[from] = null;
    setPieces(newPieces);
    setSelectedPiece(null);
    changeTurn();
  };

  const attack = (from, to) => {
    const newPieces = [...pieces];
    if (newPieces[to].strength <= newPieces[from].strength) {
      newPieces[to] = newPieces[from];
    }
    newPieces[from] = null;
    setPieces(newPieces);
    setSelectedPiece(null);
    changeTurn();
  };

  const canMove = (from, to) => {
    // Implement logic based on the game rules
    return true;
  };

  const changeTurn = () => {
    setTurn((turn) => 1 - turn);
  };

  const setupBoard = () => {
    const newPieces = pieces.map((_, index) => ({
      position: index,
      group: Math.random() < 0.5 ? 0 : 1,
      strength: Math.floor(Math.random() * 10),
    }));
    setPieces(newPieces);
  };

  useEffect(() => {
    setupBoard();
  }, []);

  return (
    <div className="board">
      {pieces.map((piece, index) => (
        <Piece
          key={index}
          piece={piece}
          onClick={() => handlePieceClick(index)}
          style={{
            left: `${cssPosHori[index % 5]}px`,  // Column based on index modulus 5
            top: `${cssPosVer[Math.floor(index / 5)]}px`   // Calculating vertical position
          }}
        />
      ))}
    </div>
  );
}

export default Board;
