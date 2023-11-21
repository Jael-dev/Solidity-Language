const { ethers } = require("ethers");
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(process.env.tixierorg)

wallet = new ethers.Wallet(process.env.prvtKeyWalletTest, provider)

const destination = '0xB9a1DB8062311A9ee9161932b71689eE30213229'
const source = '0xa068D1983274F0bA88e85a7f71493fCFC30F393E'


const main = async () => {

    let balanceSource = await provider.getBalance(source)
    console.log(`La balance du wallet source est de ${ethers.utils.formatEther(balanceSource)} ethers` )
    
    let balanceDest = await provider.getBalance(destination)
    console.log(`La balance du wallet de destination est de ${ethers.utils.formatEther(balanceDest)} ethers`)
    const tx = await wallet.sendTransaction({
        to:destination,
        value: ethers.utils.parseEther('0.5')
    })

    await tx.wait()
    let balanceSourceAfter = await provider.getBalance(source)
    console.log(`La balance du wallet source est de ${ethers.utils.formatEther(balanceSourceAfter)} ethers` )
    let balanceDestAfter = await provider.getBalance(destination)
    console.log(`La balance du wallet de destination est de ${ethers.utils.formatEther(balanceDestAfter)} ethers`)

    }
main()