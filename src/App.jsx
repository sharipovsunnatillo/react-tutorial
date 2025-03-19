import Concept from "./components/Concept/Concept.jsx";
import "./app.css"
import reactLogo from "./assets/react.svg";

function App() {
    const concepts = [
        {

            title: "Components",
            description: "Lorem ipsum dolor sit amet, consectetur nostrum officiis, optio perferendis porro, provident quae sed sunt ut vero?",
            imageUrl: reactLogo
        },
        {
            title: "JSX",
            description: "Lorem ipsum dolor sit amet, consectetur nostrum officiis, optio perferendis porro, provident quae sed sunt ut vero?",
            imageUrl: reactLogo
        },
        {
            title: "Props",
            description: "Lorem ipsum dolor sit amet, consectetur nostrum officiis, optio perferendis porro, provident quae sed sunt ut vero?",
            imageUrl: reactLogo
        },
        {
            title: "State",
            description: "Lorem ipsum dolor sit amet, consectetur nostrum officiis, optio perferendis porro, provident quae sed sunt ut vero?",
            imageUrl: reactLogo
        },
    ]
    return <div className="main">
        <h1>Tutorial</h1>
        <div className="concept-wrapper">
            {concepts.map(concept => (
                <Concept title={concept.title} description={concept.description} imageUrl={concept.imageUrl}/>
            ))}
        </div>
    </div>
}

export default App
