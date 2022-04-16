const { ethers } = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const Hello_World = await HelloWorld.deploy("Hello world");
    console.log("Contract depolyed to address: ", Hello_World.address);
    
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });