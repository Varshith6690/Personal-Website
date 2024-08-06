// Server-side JavaScript (server.js)

const express = require("express");
const path = require("path");
const app = express();

// Serve static files (e.g., index.html, styles.css, script.js)
app.use(express.static(path.join(__dirname, "public")));

// API route
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from Node.js and Express!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend demo listening on port ${PORT}`);
});
