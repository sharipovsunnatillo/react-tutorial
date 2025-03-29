import {useState} from "react";

export default function Player({name, onChange}) {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    function handleClick() {
        setEditing(prev => {
            if (prev) {
                onChange(newName)
            }
            return !prev;
        })
    }

    function saveNameChanges(event) {
        return setNewName(event.target.value);
    }

    return (
        <div className="player">
            {!editing && <p>{newName}</p>}
            {editing && <input type="text" value={newName} onChange={saveNameChanges}/>}
            <button onClick={handleClick}>{editing ? "save" : "edit"}</button>
        </div>
    )
}