const express = require('express')
const data = require('./data')

const api = express()

const HOST = 'localhost'
const port = process.env.PORT || 8888

api.get('/', (req, res) => {
    res.send('Welcome to my API!')
})

api.get('/people', (req, res) => {
    res.status(200).json(data)
})


api.listen(port, () => console.log(`API running at ${HOST}:${port}!`))