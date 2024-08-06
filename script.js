document.getElementById("full-stack-demo").addEventListener("click", () => {
    fetch("/api/data")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
});

const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from Node.js and Express!" });
});

app.listen(3000, () => {
    console.log("Backend demo listening on port 3000");
});

const React = require("react");
const ReactDOM = require("react-dom");

const App = () => {
    return <h1>Hello from React!</h1>;
};

ReactDOM.render(<App />, document.getElementById("frontend-demo"));

