const { Coingecko } = require('../lib');

const getLinkPrice = async()=> {
  let price = 0;
  try {
    const response = await Coingecko.simple.price({ ids: 'chainlink', vs_currencies: 'USD' });
    if (response && response.success) price = parseFloat(response.data.chainlink.usd); 
  } catch(err) {
    console.error(err);
  }

  return price;
}

const getDogePrice = async()=> {
  let price = 0;
  try {
    const response = await Coingecko.simple.price({ ids: 'dogecoin', vs_currencies: 'USD' });
    if (response && response.success) price = parseFloat(response.data.dogecoin.usd); 
  } catch(err) {
    console.error(err);
  }

  return price;
}

module.exports = {
  getLinkPrice,
  getDogePrice,
};
