import React, { useState,useEffect } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers';
import { BigNumber } from "bignumber.js";

import { funTokenABI, funTokenAddress ,funTokenSaleABI,funTokenSaleAddress} from './constants';




// const fetchContractERC20 = (singerOrProvider) =>
// {
  
//   new ethers.Contract(funTokenAddress, funTokenABI, singerOrProvider)
// }
//   const fetchFunTokenSaleContract = (signerOrProvider) =>
//   new ethers.Contract(funTokenSaleAddress, funTokenSaleABI, signerOrProvider);
export const ERC20ICOContext = React.createContext()
export const ERC20Provider = ({ children }) => {
  const [holderArray, setHolderArray] = useState([])
  const [account, setAccount] = useState('')
  const [accountBalance, setAccountBalance] = useState('')
  const [userId, setUserId] = useState('')
  const [NoOfToken, setNoOfToken] = useState('')
  const [TokenName, setTokenName] = useState('')
  const [TokenStandrard, setTokenStandrard] = useState('')
  const [TokenSymbol, setTokenSymbol] = useState('')
  const [TokenOwnerBal, setTokenOwnerBal] = useState('')
  const [TokenOwner, setTokenOwner] = useState('')
  const [completed, setCompleted] = useState(false);
  const [contractData, setContractData] = useState(null)
  const [providers, setProviders] = useState(null)
 

  

  useEffect(() => {
    const loadProvider = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/MhmkaAHDQ4TU4WKCFUUzD9sztrO_7fZM`);
        window.ethereum.on("chainChanged", () => {
          window.location.reload()
        })
        window.ethereum.on("accountsChanged", () => {
          window.location.reload()
        })
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        setAccount(accounts)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(funTokenAddress, funTokenABI, provider)
        setContractData(contract)
        setProviders(provider)
      } else {
        console.error("Metamask is not installed");
      }
    }
    loadProvider();
  }, []);
  const connectWallect = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/MhmkaAHDQ4TU4WKCFUUzD9sztrO_7fZM`);
      window.ethereum.on("chainChanged", () => {
        window.location.reload()
      })
      window.ethereum.on("accountsChanged", () => {
        window.location.reload()
      })
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      setAccount(accounts)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(funTokenAddress, funTokenABI, provider)
      setContractData(contract)
      setProviders(provider)
    } else {
      console.error("Metamask is not installed");
    }
  }
 useEffect(() => {
   
   const ERC20FunToken = async () => {
    try {
      
      const supply = await contractData.totalSupply()
      const totalSupply = supply.toNumber()
      setNoOfToken(totalSupply)
      const tokenName = await contractData.name()
      setTokenName(tokenName)
      const symbol = await contractData.symbol()
      setTokenSymbol(symbol)
      const tokenStandrard = await contractData.standard()
      setTokenStandrard(tokenStandrard)
      const ownerOfContract = await contractData.ownerOfContract()
      setTokenOwner(ownerOfContract)
     
      const balanceToken = await contractData.balanceOf("0xA07cDb8d3E91e30606D5604284295A19102D531C")
      setTokenOwnerBal(balanceToken.toNumber())
      // console.log("TokenOwnerBal", TokenOwnerBal);
      const allTokenHolder = await contractData.balanceOf(account[0])
      setAccountBalance(allTokenHolder.toNumber())
      // console.log("allTokenHolder",allTokenHolder.toNumber());
      const totalHolder = await contractData.userId()
      setUserId(totalHolder.toNumber())
      // console.log("userId", userId);

      // console.log("owner",TokenOwner);
     
    } catch (error) {
      
    }
   }
   const tokenHolderData = async () => {
    try {
      const allTokenHolder = await contractData.getTokenHolder();
      // console.log(allTokenHolder);
      allTokenHolder.map(async (el) => {
        const singleHolderData = await contractData.getTokenHolderData(el);
        holderArray.push(singleHolderData);
        
      });
    } catch (error) {
      console.log('something went wrong in getting data', error);
     }
    //  console.log("jjjj",holderArray);
  };
  
      
      
   ERC20FunToken()
   tokenHolderData()
 }, [contractData])
 
  
  
  

  const transferToken = async(address,value) => {
    if (!address || !value) return console.log("No Data");
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      window.ethereum.on("chainChanged", () => {
        window.location.reload()
      })
      window.ethereum.on("accountsChanged", () => {
        window.location.reload()
      })
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      setAccount(accounts)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(funTokenAddress, funTokenABI, signer)
      
      await contract.transfer(address,BigInt(value * 1))
      
      
      window.location.reload()
      
    } else {
      console.error("Metamask is not installed");
    }
  }
return (
      <ERC20ICOContext.Provider value={{providers,connectWallect, contractData, transferToken,account,accountBalance,userId,NoOfToken,TokenName,TokenStandrard,TokenSymbol,TokenOwner,TokenOwnerBal,completed,holderArray}}>
          {children}
    </ERC20ICOContext.Provider>
  )
}

