require('dotenv').config();

const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = new Web3(new HDWalletProvider(process.env.MNEMONIC, process.env.ROPSTEN_PROVIDER));
