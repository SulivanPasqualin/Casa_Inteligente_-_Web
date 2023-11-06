const express = require("express")
const servidor = express()
const path = require('path');

servidor.use(express.static(path.join(__dirname, 'public')));

// Rota Login
servidor.get("/login",function(req,res){
    res.sendFile(__dirname + "/views/pages/login.html")
})

// Rota Home
servidor.get("/home",function(req,res){
    res.sendFile(__dirname + "/views/pages/home.html")
})

// Rota Locais
servidor.get("/locais",function(req,res){
    res.sendFile(__dirname + "/views/pages/locais.html")
})

// Rota Dispositivos
servidor.get("/dispositivos",function(req,res){
    res.sendFile(__dirname + "/views/pages/dispositivos.html")
})

// Servidor escutando na porta 3000
servidor.listen(3000,function(){
    console.log(`Servidor executando...`)
})