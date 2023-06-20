const hre = require("hardhat");

async function getBalance(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatEther(balanceBigInt);
}

async function consoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance: `, await getBalance(address));  
  }
}

async function consoleBrews(brews) {
  for (const brew of brews) {
    const name = brew.name;
    const message = brew.message;
    const amount = brew.amount;
    const timestamp = brew.timestamp;
    const from = brew.from;
    console.log(`At ${timestamp}, ${name} - ${from} brewed with message: ${message} ${amount} ETH}`);
  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const cryptoBrew = await hre.ethers.deployContract("CryptoBrew");
  const contract = await cryptoBrew.waitForDeployment();

  const address = await contract.getAddress();
  console.log("Address of deployed contract: ", address);
  const addresses = [owner.address, from1.address, from2.address, from3.address];

  console.log("Balances before brewing: ");
  await consoleBalances(addresses);

  const value = { value: hre.ethers.parseEther("1") };
  await contract.connect(from1).brewCoffee("from1", "Very nice", 1, value);
  await contract.connect(from2).brewCoffee("from2", "Very nice", 1, value);
  await contract.connect(from3).brewCoffee("from3", "Very nice", 1, value);

  console.log("Balances after brewing: ");
  await consoleBalances(addresses);

  const brews= await contract.getBrews();
  consoleBrews(brews);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
