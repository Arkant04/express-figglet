const express = require("express")
const app = express()
const port = 3000
const { exec } = require('child_process')
const { error } = require("console")
const { stdout, stderr } = require("process")
const comando = "cat >> Hola.txt"

app.get("/", (req, res) =>{
    exec(comando, (error, stdout, stderr) => {
        console.log(error, stdout, stderr)
        console.log(`stdout:${stdout}`);
        res.send(stdout)
    })
})

app.listen(port, ()=>{
    console.log("Hola estas en el puerto 3000")
})