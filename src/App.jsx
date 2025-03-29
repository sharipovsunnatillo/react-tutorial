import Players from "./components/Players.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameOver from "./components/GameOver.jsx";
import {useState} from "react";

export default function App() {
    const [players, setPlayers] = useState({X: "X player", O: "O player"});
    const [cells, setCells] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState(null);

    function calculateWinner(newCells) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (newCells[a] && newCells[a] === newCells[b] && newCells[a] === newCells[c]) {
                return players[newCells[a]];
            }
        }
        if (newCells.every(cell => cell !== null)) {
            return "Draw";
        }
        return null;
    }

    function handleMove(index) {
        if (cells[index] || winner) return;

        const newCells = [...cells];
        newCells[index] = turn;
        setCells(newCells);

        const newWinner = calculateWinner(newCells);
        if (newWinner) {
            setWinner(newWinner);
        } else {
            setTurn(prev => (prev === "X" ? "O" : "X"));
        }
    }

    function rematch() {
        setCells(Array(9).fill(null));
        setTurn("X");
        setWinner(null);
    }

    return (
        <main className="container">
            <Players players={players} onChange={setPlayers}/>
            <GameBoard cells={cells} onSelect={handleMove}/>
            <GameOver winner={winner} rematch={rematch}/>
        </main>
    );
}