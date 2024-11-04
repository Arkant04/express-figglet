const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) =>{
    res.send("Hola mundi")
})

app.listen(port, ()=>{
    console.log("Hola estas en el puerto 3000")
})