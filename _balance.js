const { ethers } = require("ethers");
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider('http://small.tixier.org:8545') 
const address = '0xa068D1983274F0bA88e85a7f71493fCFC30F393E'


const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`La balance de ${address} est de ${ethers.utils.formatEther(balance)} Ethers`)
}
main()