const cote = require('cote')

const requester = new cote.Requester({ name: 'currency conversion requester' })
const request = { type: 'convert', from: 'usd', to: 'eur', amount: 100 }

setInterval(() => {
  requester.send(request, (res) => {
    console.log(res)
  })
}, 1000)

