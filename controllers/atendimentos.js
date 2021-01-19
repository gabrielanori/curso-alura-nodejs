//Responsabilidade Quais são as rotas que a gente tem que fazer pra acessar cada uma dessas rotas
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você esta na rota de atendimentos e está realizando um GET'))

    app.post('/atendimentos', (req, res) =>  {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
        
    })
}