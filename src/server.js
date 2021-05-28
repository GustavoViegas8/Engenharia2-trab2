const express = require('express')
const routes = require('./routes/routes')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  //console.log(`Servidor Rodando na Rota: http://localhost:3000`)
})