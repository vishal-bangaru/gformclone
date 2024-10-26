require('dotenv').config()
const mongoose = require('mongoose')
//ongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2
mongoose.connect("mongodb+srv://vishalbangaru4:vishalbangaru4@cluster0.8ttchzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("database connected")
}).catch((err) => {
    console.log(err)
})

