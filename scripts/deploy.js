
const hre = require("hardhat");
async function main() {

  // const Lock = await hre.ethers.getContractFactory("lock");
  // const lock = await Lock.deploy();

  // await lock.deployed();
  // console.log(`${lock.address}`);

  const BooToken = await hre.ethers.getContractFactory("BooToken");
  const bootoken = await BooToken.deploy();
  await bootoken.deployed();

  console.log(` Boo deployed to ${bootoken.address}`);

  
  const LifeToken = await hre.ethers.getContractFactory("LifeToken");
  const lifetoken = await LifeToken.deploy();
  await lifetoken.deployed();

  console.log(` life deployed to ${lifetoken.address}`);


  
  const SingleSwapToken= await hre.ethers.getContractFactory("SingleSwapToken");
  const singleSwapToken = await SingleSwapToken.deploy();
  await singleSwapToken.deployed();

  console.log(` SingleSwapToken deployed to ${singleSwapToken.address}`);


  
const SwapMultiHop= await hre.ethers.getContractFactory("SwapMultiHop");
const swapMultiHop = await SwapMultiHop.deploy();
await swapMultiHop.deployed();

console.log(` SwapMultiHop deployed to ${swapMultiHop.address}`);

// console.log("hello")

}
// Boo deployed to 0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af
// life deployed to 0xde79380FBd39e08150adAA5C6c9dE3146f53029e
// SingleSwapToken deployed to 0xbFD3c8A956AFB7a9754C951D03C9aDdA7EC5d638
// SwapMultiHop deployed to 0x38F6F2caE52217101D7CA2a5eC040014b4164E6C






main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
