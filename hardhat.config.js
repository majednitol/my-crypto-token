require("@nomicfoundation/hardhat-toolbox");
const API_URL = `https://sepolia.infura.io/v3/1ee37c487cf040c5a16983234a7eb9cd`
const PRIVATE_KEY = "dd14f3a89cc4d828b2d2bf2049ac911adfdba451ab8f5ef7c443cb5c08946946"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  // networks: {
  //   hardhat: {
  //     chainId: 1337,
  //   },
  // }

  networks: {
    sepolia: {
      url: API_URL,
      accounts:[`${PRIVATE_KEY}`]
    }
  }
};
