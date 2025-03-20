function App() {
    return <div className="container-fluid p-5 text-light">
        <h1 className="display-5 text-center font-monospace">Components</h1>
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col"><img src="/1.png" className="img-thumbnail p-4 mb-2" alt="image"/>
                    <h2>Header 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus, nam. Expedita in
                        nemo quae quasi, rerum vel! Itaque, repellat.</p>
                </div>
                <div className="col"><img src="/2.png" className="img-thumbnail p-4 mb-2" alt="image"/>
                    <h2>Header 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis debitis est, illo
                        magni odit pariatur quidem sit ullam unde!</p>
                </div>
                <div className="col"><img src="/3.png" className="img-thumbnail p-4 mb-2" alt="image"/>
                    <h2>Header 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ea neque porro provident quia
                        sed tenetur ut voluptate. Alias, placeat.</p>
                </div>
                <div className="col"><img src="/4.png" className="img-thumbnail p-4 mb-2" alt="image"/>
                    <h2>Header 4</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae delectus eum hic ipsa
                        nobis omnis perferendis quas totam veritatis.</p>
                </div>
            </div>
        </div>
        <div className="container text-center">
            <h2 className="display-5 text-center font-monospace mt-5">Examples</h2>
            <ul className="nav nav-underline">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <p className="lead text-start mt-3">Content</p>
        </div>
    </div>
}

export default App
