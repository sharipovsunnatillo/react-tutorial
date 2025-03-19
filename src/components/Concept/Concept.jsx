import "./concept.css"

export default function Concept({title, imageUrl, description}) {
    return <div className="concept">
        <img src={imageUrl} alt="image"/>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
}