const { ethers } = require("ethers");
require('dotenv').config();
const abi = require('./ABI/erc20.json')

const erc20Address = '0xe6DeE5F4dbD2Cc9Cbc38Df72277E104dE453a3B0'


const provider = new ethers.providers.JsonRpcProvider(process.env.tixierorg)

wallet = new ethers.Wallet(process.env.prvtKeyWalletTest, provider)
const etudiants = ['0xB9a1DB8062311A9ee9161932b71689eE30213229']
const contract = new ethers.Contract(erc20Address,abi, provider)
const contractSigner = contract.connect(wallet)
const main = async () => {

    for (i=0; i<etudiants.length;i++){
        console.log(etudiants[i])
    let balanceOfDest = await contract.balanceOf(etudiants[i])
    console.log(ethers.utils.formatEther(balanceOfDest))

    const mint = await contractSigner.mint(etudiants[i],ethers.utils.parseEther('1000'))

    balanceOfDest = await contract.balanceOf(etudiants[i])
    console.log(ethers.utils.formatEther(balanceOfDest))
}

}
main()