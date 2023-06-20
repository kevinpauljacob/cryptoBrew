const hre = require("hardhat");

async function main() {
    const cryptoBrew = await hre.ethers.deployContract("CryptoBrew");
    const contract = await cryptoBrew.waitForDeployment();
  
    const address = await contract.getAddress();
    console.log("Address of deployed contract: ", address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  