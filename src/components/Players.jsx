import Player from "./Player.jsx";

export default function Players({players, onChange}) {
    return (
        <div className="players">
            <Player name={players.X} onChange={(name) => onChange({...players, X: name})}/>
            <Player name={players.O} onChange={(name) => onChange({...players, O: name})}/>
        </div>
    )
}