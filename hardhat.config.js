require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const ALCHEMY_MUMBAI_RPC_ENDPOINT = process.env.NEXT_PUBLIC_ALCHEMY_MUMBAI_RPC_ENDPOINT;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: ALCHEMY_MUMBAI_RPC_ENDPOINT,
      accounts: [PRIVATE_KEY],
    }
  }
};
