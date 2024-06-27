const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb+srv://phamthucquyen:Washingtonandlee1!@cluster0.ryzgmod.mongodb.net/e-commerce");

//API Creation

app.get("/", (req, res) => {
    res.send("Express App is running")
})


app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port)
    }
    else {
        console.log("Error : " + error)
    }
})