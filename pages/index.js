

import { ERC20ICOContext } from '@/context/FunToken'
import Image from 'next/image'
import React,{useContext,useEffect,useState} from 'react'
import Style from '../styles/index.module.css';
import Transfer from '@/components/Transfer/Transfer';
import User from '@/components/User/User';

const index = () => {
  const {providers, contractData,   transferToken,  account, accountBalance, userId, NoOfToken, TokenName, TokenStandrard, TokenSymbol, TokenOwner, TokenOwnerBal, completed ,holderArray} = useContext(ERC20ICOContext)
  const [myAccount, setMyAccount] = useState('')
  const [amount, setAmount] = useState('')
  
  useEffect(() => {
    
    
    
    
    
  
    
  }, [])
  
  return (
    <div className={Style.home}>
     <div className={Style.heroSection}>
     <div className={Style.heroSection_left}>
    
          <h1>Ico Launching Funny Token (Fun)</h1>
          <p>
          Tempory incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation consequat.
          </p>
          <div className={Style.heroSection_left_btn}>
            <button className={Style.btn}>Whitepaper</button>
            <button className={Style.btn}>product intro</button>
          </div>
        </div>
        <div className={Style.heroSection_right}>
          <Image src="/assets/funtoken.png" alt='banner' width={300} height={300} className={Style.heroSection_right_img_one} />
          <Image src="/assets/funtoken.png" alt='banner' width={200} height={200} className={Style.heroSection_right_img} /><Image src="/assets/funtoken.png" alt='banner' width={100} height={100} className={Style.heroSection_right_img} />
          <Image src="/assets/funtoken.png" alt='banner' width={50} height={50} className={Style.heroSection_right_img} />
          <Image src="/assets/funtoken.png" alt='banner' width={20} height={20}  className={Style.heroSection_right_img} />
        </div>
      
      </div>
      <Transfer NoOfToken={NoOfToken} TokenName={TokenName} TokenStandrard={TokenStandrard} TokenSymbol={TokenSymbol} TokenOwnerBal={TokenOwnerBal} transferToken={ transferToken} />
      <User holderArray={holderArray } />
      
    </div>
  )
}

export default index