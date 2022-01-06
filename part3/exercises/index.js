const express = require('express')
const { json } = require('express/lib/response')
const app = express()
const morgan = require('morgan')
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
morgan.token('body', req => JSON.stringify(req.body))



let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  const amount = persons.length
  const date = new Date()
  res.send(`<p>Phonebook has info ${amount} for people</p>${date}`)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const pers = persons.find(p => p.id === id)
  if (pers) {
    res.json(pers)
  } else {
    res.status(404).end()
  }
  
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(p => p.id !== id)

  res.status(204).end()
})

const generateId = () => {
  return Math.floor(Math.random() * 10000) + 1
}
app.post('/api/persons', (req, res) => {
  const body = req.body
  if (!body.number) {
    return res.status(400).json({
      error: 'number missing'
    })
  }
  
  if (persons.map(p => p.number).includes(body.number) || (persons.map(p => p.name).includes(body.name))) {
    return res.status(400).json({
      error: 'number or name already is in the phonebook'
    })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)
  res.json(person)
  
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})