const express = require("express")
const app = express()
const port = 8000
const { exec } = require('child_process')
const { error } = require("console")
const { stdout, stderr } = require("process")
//const comando = "cat >> Hola.txt"
const comando = "figlet Hola mundo"
//const ping = "ping -c4 google.com"
app.use(express.static("public"))

app.get("/", (req, res) =>{
    exec(comando, (error, stdout, stderr) => {
        console.log(error, stdout, stderr)
        console.log(`stdout:${stdout}`);
        res.send(`<pre>${stdout}</pre>`)
    })
})

app.get("/ping", (req, res) =>{
    const url = req.query.url
    const comando = `ping -c4 ${url}`
    exec(comando, (error, stdout, stderr) => {
        console.log(error, stdout, stderr)
        console.log(`stdout:${stdout}`);
        res.send(`<pre>${stdout}</pre>`)
    })
})

app.listen(port, ()=>{
    console.log("Hola estas en el puerto 3000")
})