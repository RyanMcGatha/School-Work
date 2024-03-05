import React, { useState } from "react";
import Square from "./Square";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newBoard));
  };

  const renderSquare = (index) => {
    return <Square value={board[index]} onClick={() => handleClick(index)} />;
  };

  const renderStatus = () => {
    if (winner) {
      return <p className="text-tan-700">Winner: {winner}</p>;
    } else {
      return (
        <p className="text-tan-700"> Next player: {xIsNext ? "X" : "O"}</p>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-tan-100 to-tan-900">
      <div className="mb-4 text-2xl font-bold">{renderStatus()}</div>
      <div className="grid grid-cols-3 gap-4">
        {board.map((square, index) => (
          <div key={index}>{renderSquare(index)}</div>
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-tan-100 text-tan-700 border border-tan-700 rounded-md"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
