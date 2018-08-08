'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.disable('x-powered-by')

app.use('/', (req, res, next) => {
  res.json({
    ok: true,
    message: "It's alive!"
  })
})

module.exports = {
  app
}
