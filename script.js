// Client-side JavaScript (script.js)

document.getElementById("full-stack-demo").addEventListener("click", () => {
    fetch("/api/data")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("demo-output").textContent = data.message;
        })
        .catch(error => console.error("Error fetching data:", error));
});

// Frontend demo for React
const App = () => {
    return <h1>Hello from React!</h1>;
};

// Ensure React and ReactDOM are available globally or properly imported if using modules/bundlers.
ReactDOM.render(<App />, document.getElementById("frontend-demo"));
