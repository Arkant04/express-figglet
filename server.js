const express = require("express")
const app = express()
const port = 8000
const { exec } = require('child_process')
const { error } = require("console")
const { stdout, stderr } = require("process")
const figlet = require("figlet")
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
app.get("/fuentes", (req, res) =>{
    figlet.fonts(function (err, fonts) {
        if (err) {
          console.log("something went wrong...");
          console.dir(err);
          return;
        }
        res.send(fonts);
      });
})

app.get("/figlet", (req, res) =>{
    const texto = req.query.texto
    const fuente = req.query.fuente
    
    figlet.text(
        `${texto}`,
        {
          font: "Doom",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        },
        function (err, data) {
          if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
          }
          res.send(`<pre>${data}</pre>`);
        }
      );

})

app.listen(port, ()=>{
    console.log("Hola estas en el puerto 3000")
})