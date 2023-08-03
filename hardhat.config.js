require("@nomicfoundation/hardhat-toolbox");
require("ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      forking:{
        url: "https://eth-mainnet.g.alchemy.com/v2/6XRxU-rgujGqeQoT68IYBkYMswArLU7Y",
      },
    },
  },
};
