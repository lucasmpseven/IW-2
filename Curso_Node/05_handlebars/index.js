const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// configuração

    // template Engine
    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

    // conexão com banco de dados
    const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: 'mysql'
    })

// rotas
app.get('/cadastro',function(req,res){
    //res.send('ROTA DE CADASTRO DE POSTS')
    res.render('formulario')
})

app.post('/add',function(req,res){
    res.send('formulario recebido')
})

app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})