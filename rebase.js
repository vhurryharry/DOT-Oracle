require('dotenv').config();

const { Orchestrator } = require('./lib');

const rebase = async() => {
  console.log('starting rebase');
  await Orchestrator.methods.rebase().send({ from: process.env.DEPLOYER_ADDRESS })
    .on('error', function(error, receipt) {
      console.error(error, receipt);
    });
  console.log('Rebase done');
}

rebase();
/*setInterval(async() => {
  await rebase();
}, 30 * 60 * 1000);*/