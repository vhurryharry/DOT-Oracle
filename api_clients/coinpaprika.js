const { Coinpaprika } = require('../lib');

const getLinkPrice = async()=> {
  let price = 0;
  try {
    const response = await Coinpaprika.getTicker({ coinId: 'link-chainlink' });
    if (response && response.price_usd) price = parseFloat(response.price_usd); 
  } catch(err) {
    console.error(err);
  }

  return price;
}

const getDogePrice = async()=> {
  let price = 0;
  try {
    const response = await Coinpaprika.getTicker({ coinId: 'doge-dogecoin' });
    if (response && response.price_usd) price = parseFloat(response.price_usd); 
  } catch(err) {
    console.error(err);
  }

  return price;
}

module.exports = {
  getLinkPrice,
  getDogePrice,
};
