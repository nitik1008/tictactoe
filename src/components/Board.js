import React from 'react';
import Square from './Square';

const Board = () => {
  return (
    <div>
      <div>
        <Square value={44} />
        <Square value={33} />
        <Square value={77} />
      </div>
      <div>
        <Square value={1} />
        <Square value={21} />
        <Square value={27} />
      </div>
      <div>
        <Square value={11} />
        <Square value={3} />
        <Square value={7} />
      </div>
    </div>
  );
};

export default Board;
