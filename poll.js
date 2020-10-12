require('dotenv').config();

const { Oracle } = require('./lib');
const { CoinpaprikaClient, CoingeckoClient } = require('./api_clients');

const pollLinkPrice = async() => {
  const price1 = await CoinpaprikaClient.getLinkPrice();
  const price2 = await CoingeckoClient.getLinkPrice();

  return (price1 + price2) / 2;
}

const calculateExchangeRate = (price1, price2) => {
  return (price1 - price2) / (price1 + price2) / 2 + 1;
}

const pushExchangeRate = async() => {
  const exchange_rate = calculateExchangeRate(17, 12) * Math.pow(10, parseInt(process.env.DECIMALS));
  console.log(exchange_rate);
  await Oracle.methods.pushReport(exchange_rate.toString()).send()
    .on('error', (error) => {
      console.error(error);
    });
}

const getData = async() => {
  const res = await Oracle.methods.getData().call();
  console.log(res);
}

pushExchangeRate();
getData();

