#!/usr/bin/env node

'use strict'

const { app } = require('../server')

const server = app.listen(3000, () => {
  console.log('Server started at port 3000')
})
