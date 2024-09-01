async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy IdentityManagement contract
    const IdentityManagement = await ethers.getContractFactory("IdentityManagement");
    const identityManagement = await IdentityManagement.deploy();
    await identityManagement.deployed();
    console.log("IdentityManagement deployed to address:", identityManagement.address);

    // Deploy LocationLogging contract
    const LocationLogging = await ethers.getContractFactory("LocationLogging");
    const locationLogging = await LocationLogging.deploy();
    await locationLogging.deployed();
    console.log("LocationLogging deployed to address:", locationLogging.address);

    // Deploy AccessControl contract
    const AccessControl = await ethers.getContractFactory("AccessControl");
    const accessControl = await AccessControl.deploy();
    await accessControl.deployed();
    console.log("AccessControl deployed to address:", accessControl.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
