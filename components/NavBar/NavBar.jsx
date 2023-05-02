import React, { useEffect, useState, useContext } from 'react'
import Style from './NavBar.module.css';
import Image from 'next/image';
import { ERC20ICOContext } from '@/context/FunToken';
// import loder from '../../assets/loder';
// import funToken from '../../assets/funtoken';

const NavBar = () => {
    const { checkConnection, ERC20FunToken, transferToken, tokenHolderData, account, accountBalance, userId, NoOfToken, TokenName, TokenStandrard, TokenSymbol, TokenOwner, TokenOwnerBal, completed } = useContext(ERC20ICOContext)
    return (
        // <Image src="/assets/loder.gif" height={300} width={200} alt='kkk' />
        <div className={Style.navBar}>
            {completed && (<div className={Style.loader}>
                <div className={Style.loader_box}>
                    <Image src="/assets/loder.gif" height={300} width={200} alt='kkk' />
                </div>
            </div>)}
            <div className={Style.navBar_box}>
                <div className={Style.navbar_box_left}>
                    <h1>Funny Token</h1>
                </div>
                <div className={Style.navBar_box_right}>
                    <p>
                        Token Balance  &nbsp; &nbsp;<span>
                            {accountBalance}
                        </span>
                    </p>
                    <p>
                        <span>UserId #{userId}</span>&nbsp; &nbsp;
                        {account}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NavBar