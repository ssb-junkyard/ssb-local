const test = require('tape')
const secretStack = require('secret-stack')
const caps = require('ssb-caps')

const local = require('../')

const open = secretStack({ caps }).use(local)

test('open and close', (t) => {
  t.plan(1)
  const server = open()
  server.close(() => {
    t.pass('server closed')
    t.end()
  })
})
