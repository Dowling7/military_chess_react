import React from 'react';
const pieceMappings = {
  '-1': { display: '炸彈', english: 'BOMB' },
  '0': { display: '地雷', english: 'MINE' },
  '1': { display: '工兵', english: 'ENG' },
  '2': { display: '排長', english: 'LT' },
  '3': { display: '連長', english: 'CPT' },
  '4': { display: '營長', english: 'MAJ' },
  '5': { display: '團長', english: 'COL' },
  '6': { display: '旅長', english: 'BG' },
  '7': { display: '師長', english: 'MG' },
  '8': { display: '軍長', english: 'GEN' },
  '9': { display: '司令', english: 'FM' },
  '10': { display: '軍旗', english: 'FLAG' }
};

const Piece = ({ piece }) => {
  console.log(piece); // Check what piece data is being received.

  if (!piece) {
    return <div className="cell"></div>; // Handles null or undefined cases.
  }

  const displayText = pieceMappings[piece.value]?.display || 'Unknown'; // Safe access with fallback.
  return (
    <div className={`cell ${piece?.color}`}>
      <span style={{ color: piece?.color }}>{displayText}</span>
    </div>
  );
};

export default Piece;
