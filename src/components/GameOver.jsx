export default function GameOver({winner, rematch}) {
    return (
        <div className="game-over">
            {winner && <p>{winner === "Draw" ? "DRAW" : `Winner is ${winner}`}</p>}
            <button disabled={!winner} onClick={rematch}>Rematch</button>
        </div>
    )
}