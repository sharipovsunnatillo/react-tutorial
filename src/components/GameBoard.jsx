import Cell from "./Cell.jsx";

export default function GameBoard({cells, onSelect}) {
    return (
        <div className="game-board">
            {
                cells.map((cell, index) => <Cell key={index} turn={cell} onClick={() => onSelect(index)}/>)
            }
        </div>
    )
}