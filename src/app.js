const express = require("express");

const app = express();
const logger = require("./middelware/logger")
const useRoute = require("./routes/user.route")


// Missleware
app.use(express.json());
app.use(logger)

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