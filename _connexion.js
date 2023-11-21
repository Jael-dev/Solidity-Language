const { ethers } = require("ethers");

//const provider = new ethers.providers.JsonRpcProvider('http://small.tixier.org:8545') 

//le provider sera le point de liaison avec la blockchain que l'on utilise. 
// pour voir la liste des points d'entrées en fonction des blockchain voir chainlist

const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/x1-s7vRATO02bfyvxm8PEF6kL0kmvqIC")
//ici notre provider permet d'acceder a la bc ethereum
const main = async () => {
    const bloc = await provider.getBlockNumber()
    // interrogation du block actuel sur ethereum
    console.log("The bloc number is",bloc)
    const networkId = await provider.getNetwork()
    // connaitre le network id pour la bc ethereum ce sera 1
    console.log("The network is",networkId)
    const gasPrice = await provider.getGasPrice()
    // prix du gas actuel. 
    console.log("The price is",gasPrice)
}
main()