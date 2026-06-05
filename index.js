const express = require("express");
// import express from "express"
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/name", (req, res) => {
    res.send("itz__arry03");
})

app.get("/insta", (req, res) => {
    // redirect new tab
    res.redirect("https://www.instagram.com/itz_arry03");
    // res.send("https://www.instagram.com/itz_arry03");
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
// export default app;
