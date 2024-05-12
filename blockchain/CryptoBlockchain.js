const CryptoBlock = require('./CryptoBlock')
class CryptoBlockchain {
    constructor() {
        this.blockchain = [this.createGenesisBlock()]
    }
    createGenesisBlock() {
        return new CryptoBlock(0, '05/12/2024', 'Initial Block', "0")
    }
    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1]
    }
    addNewBlock(newBlock) {
        newBlock.previousHash = this.obtainLatestBlock().hash
        newBlock.hash = newBlock.computeHash()
        this.blockchain.push(newBlock)
    }
}

module.exports = CryptoBlockchain