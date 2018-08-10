'use strict'

const http = require('http')
const express = require('express')
const WebSocket = require('ws')
const bodyParser = require('body-parser')
const { createWebSocketServer } = require('./websockets')

const app = express()

app.use(bodyParser.json())

app.disable('x-powered-by')

app.use('/', (req, res, next) => {
  res.json({
    ok: true,
    message: "It's alive!"
  })
})

const server = http.createServer(app)

// ----------------------------------


// TODO: move to seperate module
const handleMessage = socket => data => {
  const msg = JSON.parse(data)

  console.log('received: ', msg)

  switch(msg.type) {
  default:
    // do nothing
    socket.send(JSON.stringify({
      type: 'message',
      username: 'bill',
      body: 'This is a test message from the server.',
      createdAt: Date.now()
    }))
  }
}

const wss = new WebSocket.Server({
  server,
  path: '/chat'
})

wss.on('connection', socket => {
  console.log('client connected')

  socket.on('message', handleMessage(socket))
})

server.listen(3000, () => {
  console.log('Server started on port 3000')
})
