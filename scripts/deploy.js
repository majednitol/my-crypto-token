const { ethers } = require("hardhat")

async function main  () {
    const [deployer] = await ethers.getSigners()
    const FunToken = await ethers.getContractFactory("FunToken")
    const FunTokenSale = await ethers.getContractFactory("FunTokenSale")
    const funToken = await FunToken.deploy(10000000)
    const tokenPrice = 1000000000
    const funTokenSale = await FunTokenSale.deploy(funToken.address, tokenPrice)
    await funToken.deployed()
    await funTokenSale.deployed()
    console.log("funToken.address :",funToken.address);
    console.log("funTokenSale.address :",funTokenSale.address);
}

main().then(() => {
    process.exit(0)
}).catch((err) => {
    console.error(err)
    process.exit(1)
})


//  *******for FUNTOKENSALE contract *******



