/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const{ API_URL, PRIVATE_kEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "rinkeby",
  network: {
    hardhat: {},
    rinkeby: {
      url: API_URL,
      accounts: ['0x${PRIVATE_KEY}']
    }
  }
};
