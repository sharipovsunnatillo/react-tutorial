export default function Cell({turn, onClick}) {
    return (
        <button className="cell" onClick={onClick}>{turn}</button>
    )
}