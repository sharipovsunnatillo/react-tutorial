function App() {
    return <main className="container">
        <div className="players">
            <div className="player">
                <span className="name">Player 1</span>
                <button className="btn">Edit</button>
            </div>
            <div className="player">
                <span className="name">Player 1</span>
                <button className="btn">Edit</button>
            </div>
        </div>
        <div className="game-board">
            <div className="row">
                <div className="cell"><span className="symbol">0</span></div>
                <div className="cell"><span className="symbol">0</span></div>
                <div className="cell"><span className="symbol">0</span></div>
            </div>
            <div className="row">
                <div className="cell"><span className="symbol">0</span></div>
                <div className="cell"><span className="symbol">0</span></div>
                <div className="cell"><span className="symbol">0</span></div>
            </div>
            <div className="row">
                <div className="cell"><span className="symbol">0</span></div>
                <div className="cell"><span className="symbol">0</span></div>
                <div className="cell"><span className="symbol">0</span></div>
            </div>
        </div>
    </main>
}

export default App
