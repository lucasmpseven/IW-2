const express = require('express')
const app = express()


app.get("/",function(req,res){
    res.send("ETEC MCM")
})


app.get("/blog",function(req,res){
    res.send("ESSA É A PÁGINA DO MEU BLOG")
})


app.get("/sobre",function(req,res){
    res.send("PAGINA SOBRE")
})

app.get("/cadastro/:nome/:idade",function(req,res){
    res.send('Olá seu nome :' + res.params.nome + "\nSua idade: " + req.params.idade)
    //res.send('Sua idade é :' + req.params.idade)
    //res.send(req.params.idade)
})

app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})

