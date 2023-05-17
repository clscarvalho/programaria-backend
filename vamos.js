const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraVamos(request, response) {
 response.send("Vamos, mulheres!")
}

function mostraPorta () {
 console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/vamos', mostraVamos))
app.listen(porta, mostraPorta)