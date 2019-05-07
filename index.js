const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

// configurando pasta views e parametros
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// urlencoded default
app.use(express.urlencoded({ extended: false }))

// variavel global, extencao de arquivos nunjucks
app.set('view engine', 'njk')

// checar age
const checkAge = (req, res, next) => {
  const { age } = req.query
  // retornar outro tipo de inf, retorna "/"
  if (!age) {
    return res.redirect('/')
  }
  // nao aguardar req, seguir
  return next()
}

// rota inicial
app.get('/', (req, res) => {
  return res.render('inicial')
})

// chamada pelo formulario com resultado da condicao
app.post('/check', (req, res) => {
  // capturar age na req.bory
  const { age } = req.body
  // codicao para redirecionamento
  if (age >= 18) {
    // retorna pg major
    return res.redirect(`/major?age=${age}`)
    // retorna pg minor
  } else {
    return res.redirect(`/minor?age=${age}`)
  }
})

// major
app.get('/major', checkAge, (req, res) => {
  // captura age
  const { age } = req.query
  // retorna rederizado pg major
  return res.render('major', { age })
})

// mijor
app.get('/minor', checkAge, (req, res) => {
  // captura age
  const { age } = req.query
  // retorna rederizado pg major
  return res.render('minor', { age })
})

app.listen(3000)
