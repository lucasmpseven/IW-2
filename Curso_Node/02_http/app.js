//SOLICITAR UM MÓDULO INTERNO DO NODE CHAMADO http
var http = require('http')

//Abrindo um servidor http
http.createServer(function(req,res){
    res.end("Oi ETEC")
}).listen(8081)

console.log('Servidor rodando...')