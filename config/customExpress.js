//Responsabilidade do arquivo configurar qualquer coisa que precisamos configurar dentro do nosso Express, qualquer modificação é dentro deste arquivo
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express() // criar variavel app

    app.use(bodyParser.urlencoded({extended: true})) // vai add bibliotecas para usar
    app.use(bodyParser.json()) 

    consign() // configura a variavel app
        .include('controllers')
        .into(app)
    return app
}

