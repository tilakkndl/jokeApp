const dotenv = require("dotenv")
const mongoose = require("mongoose")

const app = require("./app")

dotenv.config({path: "./.config.env"});

const DB = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD)
mongoose.connect(DB)
.then(()=>console.log("Databse connected successfully"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Server running at " + PORT)
})