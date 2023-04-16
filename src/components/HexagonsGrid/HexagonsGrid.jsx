import React from 'react';

const HexagonsGrid = () => {
  const rows = 7;
  const hexagonsPerRow = 12;

  const generateHexagons = () => {
    const hexagons = [];
    for (let i = 0; i < hexagonsPerRow; i++) {
      hexagons.push(<div key={i} className="hexagon"></div>);
    }
    return hexagons;
  };

  const generateRows = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      grid.push(
        <div key={i} className="row">
          {generateHexagons()}
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="container">
      <div className="curser"></div>
      {generateRows()}
    </div>
  );
};
export default HexagonsGrid;