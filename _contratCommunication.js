const { ethers } = require("ethers");
require('dotenv').config();
const abi = require('./ABI/erc20.json')

const erc20Address = '0xe6DeE5F4dbD2Cc9Cbc38Df72277E104dE453a3B0'


const provider = new ethers.providers.JsonRpcProvider(process.env.tixierorg)

wallet = new ethers.Wallet(process.env.prvtKeyWalletTest, provider)

const destination = '0xB9a1DB8062311A9ee9161932b71689eE30213229'
const source = '0xa068D1983274F0bA88e85a7f71493fCFC30F393E'

const contract = new ethers.Contract(erc20Address,abi, provider)
const contractSigner = contract.connect(wallet)
const main = async () => {
    let balanceOfSource = await contract.balanceOf(source)
    console.log(ethers.utils.formatEther(balanceOfSource))

    const mint = await contractSigner.mint(source,ethers.utils.parseEther('100'))

    balanceOfSource = await contract.balanceOf(source)
    console.log(ethers.utils.formatEther(balanceOfSource))

}
main()