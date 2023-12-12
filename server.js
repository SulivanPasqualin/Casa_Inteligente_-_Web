// const express = require("express")
// const servidor = express()
// const path = require('path');

// servidor.use(express.static(path.join(__dirname, 'public')));

// // Rota Login
// servidor.get("/login",function(req,res){
//     res.sendFile(__dirname + "/views/pages/login.html")
// })

// // Rota Home
// servidor.get("/home",function(req,res){
//     res.sendFile(__dirname + "/views/pages/home.html")
// })

// // Rota Locais
// servidor.get("/locais",function(req,res){
//     res.sendFile(__dirname + "/views/pages/locais.html")
// })

// // Rota Dispositivos
// servidor.get("/dispositivos",function(req,res){
//     res.sendFile(__dirname + "/views/pages/dispositivos.html")
// })

// // Servidor escutando na porta 3000
// servidor.listen(3000,function(){
//     console.log(`Servidor executando...`)
// })



const express = require("express");
const servidor = express();
const path = require('path');

servidor.set('view engine', 'ejs'); // Definir EJS como o mecanismo de visualização
servidor.set('views', path.join(__dirname, 'views')); // Define o diretório onde os arquivos de visualização serão armazenados

// Servir arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')));

// Rota Login
servidor.get("/login", function(req, res) {
    res.render('pages/login'); // Renderizar o arquivo EJS em vez de enviar o HTML diretamente
});

// Rota Home
servidor.get("/", function(req, res) {
    res.status(200).render('pages/home')
});

// Rota comodos
servidor.get("/comodos", function(req, res) {
    res.status(200).render('pages/comodos');
});

// Rota locais
servidor.get("/locais", function(req, res) {
    res.status(200).render('pages/locais');
});

// Rota Dispositivos
servidor.get("/dispositivos", function(req, res) {
    res.status(200).render('pages/dispositivos');
});

// Rota Início
servidor.get("/inicio", function(req, res) {
    res.status(200).render('pages/inicio');
});

// Servidor escutando na porta 3000
servidor.listen(3000, function() {
    console.log(`Servidor executando...`);
});