import { useState } from "react";

// Função para calcular o vencedor do jogo
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

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// Componente para cada quadrado
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// Componente do tabuleiro
function Board({ squares, onSquareClick, nextPlayer }) {
  const winner = calculateWinner(squares);
  const isTie = !winner && squares.every((square) => square !== null);
  const status = winner
    ? `Winner: ${winner}`
    : isTie
    ? "Empate"
    : `Next Player: ${nextPlayer}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onClick={() => onSquareClick(8)} />
      </div>
    </div>
  );
}

// Componente principal do jogo
export default function Game() {
  const initialSquares = Array(9).fill(null);
  const [history, setHistory] = useState([initialSquares]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const nextPlayer = xIsNext ? "X" : "O";

  const handleSquareClick = (i) => {
    // Não permite jogadas em casas já preenchidas ou se houver vencedor
    if (currentSquares[i] || calculateWinner(currentSquares)) return;

    const nextSquares = currentSquares.slice();
    nextSquares[i] = nextPlayer;
    const newHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
  };

  const jumpTo = (move) => {
    const winner = calculateWinner(currentSquares);
    const isTie = currentSquares.every((square) => square !== null) && !winner;

    // Se for "Go to game start" (move === 0) e o jogo já tiver acabado (empate ou vitória),
    // reinicia o jogo apagando o histórico anterior.
    if (move === 0 && (isTie || winner)) {
      setHistory([initialSquares]);
      setCurrentMove(0);
    } else {
      setCurrentMove(move);
    }
  };

  const moves = history.map((_, move) => (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>
        {move === 0 ? "Go to game start" : `Go to move #${move}`}
      </button>
    </li>
  ));

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentSquares}
          onSquareClick={handleSquareClick}
          nextPlayer={nextPlayer}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
