const express = require('express')
const app = express()
const fs = require('fs')
app.listen(3000, console.log("¡Servidor encendido!"))
app.use(express.json())


app.get("/productos", (req, res) => {
const productos = JSON.parse(fs.readFileSync("productos.json"))
res.json(productos)
})
app.post("/productos", (req, res) => {
    // 1
    const producto = req.body
    // 2
    const productos = JSON.parse(fs.readFileSync("productos.json"))
    // 3
    productos.push(producto)
    // 4
    fs.writeFileSync("productos.json", JSON.stringify(productos))
    // 5
    res.send("Producto agregado con éxito!")
    })
    


app.get("/home", (req, res) => {
    res.send("Hello World Express Js")
})
app.get("/fecha", (req, res) => {
    const fechaActual = () => {return new Date().toString();}
    res.send(`La fecha actual es: ${fechaActual()}`);
})
app.get("/usuarios", (req, res) => {
    const usuarios = JSON.parse(fs.readFileSync("usuarios.json"))
    res.json(usuarios)
})
