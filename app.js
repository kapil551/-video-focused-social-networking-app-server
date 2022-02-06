const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// routers

// middlewares

// routes

// middleware handlers

app.get("/", (req, res) => {
    res.send("API is running successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running...");
});