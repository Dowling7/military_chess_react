// Piece.js
import React from 'react';

function Piece({ piece, onClick }) {
  return (
    <div className={`space ${piece ? 'occupied' : ''}`} onClick={onClick}>
      {piece && (
        <span className={`piece ${piece.group === 0 ? 'group0' : 'group1'}`}>
          {piece.strength}
        </span>
      )}
    </div>
  );
}

export default Piece;
