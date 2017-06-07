const cote = require('cote')

const responder = new cote.Responder({ name: 'arbitration API', key: 'arbitration' })
const publisher = new cote.Publisher({ name: 'aritration service' })

const rates = {}

responder.on('update rate', (req, cb) => {
  rates[req.currencies] = req.rate
  cb('ok')

  publisher.publish('update rate', req)
})
