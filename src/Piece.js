import React from 'react';

const Piece = ({ piece }) => {
  return (
    <div className="cell">
      {piece !== null ? `Piece: ${piece}` : ""}
    </div>
  );
};

export default Piece;
