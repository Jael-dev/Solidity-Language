const { ethers } = require("ethers");

//const provider = new ethers.providers.JsonRpcProvider('http://small.tixier.org:8545') 
const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/x1-s7vRATO02bfyvxm8PEF6kL0kmvqIC")
const main = async () => {

    const gasPrice = await provider.getGasPrice()
    //prix en ether
    console.log(ethers.utils.formatEther(gasPrice))
    //prix en gwei 
    console.log(ethers.utils.formatUnits(gasPrice,9))
}
main()