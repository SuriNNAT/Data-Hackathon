const { ethers } = require("ethers");

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const blockNumber = await provider.getBlockNumber();
  console.log("Current block number:", blockNumber);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});