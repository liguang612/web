import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <div>
            <h1>Hello, Quosc!</h1>
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)