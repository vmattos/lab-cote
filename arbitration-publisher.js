const cote = require('cote')

const requester = new cote.Requester({ name: 'currency update requester', key: 'arbitration' })


setInterval(() => {
  const rate = parseFloat((Math.random() * 0.9).toFixed(2))
  requester.send({ type: 'update rate', currencies: 'usd_eur', rate: rate}, (res) => {
    console.log('Rate:', rate, res)
  })
}, 1000)
