import React from 'react';
import ReactDom from 'react-dom';
import './style/style.css'


const App = () => {
    return (
            <div>
                <h1>Hello React</h1>
            </div>
    )
}

ReactDom.render(<App/>, document.getElementById("root"))
