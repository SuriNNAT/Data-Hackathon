require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const { POLYGON_MAINNET_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    polygon: {
      url: POLYGON_MAINNET_URL || '',
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
    },
  },
};
