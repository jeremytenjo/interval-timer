const path = require('path')

const liveServer = require('live-server')

liveServer.start({
  root: path.join(process.cwd(), 'build'),
  open: true,
})
