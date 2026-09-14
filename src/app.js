const express = require("express");

const app = express();

// Missleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.json({
        "status": "success",
        "message": "Welcome to Home"
    });
});

app.get("/about", (req, res) => {
    res.json({
        "status": "success",
        "message": "Welcome to about"
    });
});

app.get("/contact", (req, res) => {
    res.json({
        "status": "success",
        "message": "Welcome to Contact"
    });
});

module.exports = app;