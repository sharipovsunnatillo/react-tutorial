import { useState } from "react";

const Player = ({ name, onChange }) => {
    const [editing, setEditing] = useState(false);

    function handleEdit(event) {
        setEditing(previous => !previous);
        onChange(event.target.value);
    }
    
    return <div className="player">
        {!editing && <span className="name">{name}</span>}
        {editing && <input type="text" defaultValue={name} />}
        <button className="btn" onClick={(event)=>handleEdit(event)}>
            {editing ? "Save" : "Edit"}
        </button>
    </div>
}

function App() {

  return (
    <main className="container">
      <div className="players">
        <Player name="Player 1" />
        <Player name="Player 2" />
      </div>
      <div className="game-board">
        <div className="row">
          <div className="cell">
            <span className="symbol">0</span>
          </div>
          <div className="cell">
            <span className="symbol">0</span>
          </div>
          <div className="cell">
            <span className="symbol">0</span>
          </div>
        </div>
        <div className="row">
          <div className="cell">
            <span className="symbol">0</span>
          </div>
          <div className="cell">
            <span className="symbol">0</span>
          </div>
          <div className="cell">
            <span className="symbol">0</span>
          </div>
        </div>
        <div className="row">
          <div className="cell">
            <span className="symbol">0</span>
          </div>
          <div className="cell">
            <span className="symbol">0</span>
          </div>
          <div className="cell">
            <span className="symbol">0</span>
          </div>
        </div>
      </div>
      <div className="game-over">
        <p>Player 1 won or draw</p>
        <button className="btn">Rematch</button>
      </div>
    </main>
  );
}

export default App;
