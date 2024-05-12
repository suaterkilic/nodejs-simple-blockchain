const CryptoBlock = require('./blockchain/CryptoBlock')
const CryptoBlockchain = require('./blockchain/CryptoBlockchain')


const blockchain = new CryptoBlockchain()
blockchain.addNewBlock(new CryptoBlock(1, '05/12/2024', {
    sender: "Nikola Tesla",
    recipient: "Albert Einstein",
    quantity: 50
}))
blockchain.addNewBlock(new CryptoBlock(2, '06/12/2024', {
    sender: "Pablo Picasso",
    recipient: "Van Gogh",
    quantity: 100
}))

console.log(JSON.stringify(blockchain, null, 4));