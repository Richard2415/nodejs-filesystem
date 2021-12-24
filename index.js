const express = require('express')
const data = require('./data')

const api = express()

const HOST = 'localhost'
const PORT = 8888

api.get('/', (req, res) => {
    res.send('Welcome to this API!')
})

api.get('/people', (req, res) => {
    res.status(200).json(data)
})


api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`))