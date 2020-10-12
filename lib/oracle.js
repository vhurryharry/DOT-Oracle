require('dotenv').config();

const web3 = require('./web3');
const { ORACLE_ABI } = require('../contract_abis');

module.exports = new web3.eth.Contract(ORACLE_ABI, process.env.ORACLE_CONTRACT_ADDRESS, { from: process.env.DEPLOYER_ADDRESS });
