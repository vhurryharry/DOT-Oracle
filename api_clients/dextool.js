require('dotenv').config();
const axios = require('axios');

const getEthPrice = async() => {
  const response = await axios({
    method: 'GET',
    url: 'https://www.dextools.io/api/common/ethPrice',
    headers: {
      authorization: `Bearer ${process.env.DEXTOOL_AUTHORIZATION}`
    }
  });
  if (response.data.message !== 'OK') return 0;
  return response.data.result.ethusd;
}

const getTokenPrice = async(address) => {
  const response = await axios({
    url: `https://www.dextools.io/api/uniswap/pool?pairSelected=${address}`,
    method: 'GET',
    headers: {
      authorization: `Bearer ${process.env.DEXTOOL_AUTHORIZATION}`
    }
  });
  const rate = response.data.data.pair.reserve1 / response.data.data.pair.reserve0;
  const ethPrice = await getEthPrice();
  return rate * ethPrice;
}

module.exports = {
  getEthPrice,
  getTokenPrice,
};