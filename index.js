'use strict'

require('dotenv').config({ silent: true })
require('now-logs')('phim-master.herokuapp.com')
require('./lib/array-concatAll')

const server = require('./lib/server')

server.listen(process.env.PORT, () => {
  console.log(`app run on http://0.0.0.0:${process.env.PORT}`)
})
