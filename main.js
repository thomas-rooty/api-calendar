const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const routes = require("./routes")

// Connect to MongoDB localhost:27017/todos
mongoose
    .connect("mongodb://localhost:27017/todos")
    .then(() => {
        const app = express()
        app.use(cors())
        app.use(express.json())
        app.use("/api", routes)

        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })