const express = require("express")
const morgan = require("morgan")

const app = express()

const userRouter = require("./routes/userRoutes")
const globelErrorHandler = require("./controllers/errorController")

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/users", userRouter)

app.use("/api/", (req, res)=>{
    res.send("success")
})

app.use(globelErrorHandler)

module.exports = app;