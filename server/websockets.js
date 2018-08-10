'use strict'

const WebSocket = require('ws')

const handleMessage = socket => data => {
  const msg = JSON.parse(data)

  console.log('received: ', msg)

  switch(msg.type) {
  default:
    // do nothing
  }
}

const createWebSocketServer = server => {
  const wss = new WebSocket.Server({
    server,
    path: '/chat'
  })

  wss.on('connection', ws => {
    console.log('client connected')

    ws.on('message', handleMessage(ws))
  })

  return wss
}

module.exports = {
  createWebSocketServer
}
