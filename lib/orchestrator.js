require('dotenv').config();

const web3 = require('./web3');
const { ORCHESTRATOR_ABI } = require('../contract_abis');

module.exports = new web3.eth.Contract(ORCHESTRATOR_ABI, process.env.ORCHESTRATOR_CONTRACT_ADDRESS, { from: process.env.ROPSTEN_DEPLOYER_ADDRESS });
