import Image from 'next/image'
import React, { useState } from 'react'
import Style from './Transfer.module.css';

const Transfer = ({ NoOfToken, TokenName, TokenOwnerBal, transferToken }) => {
    const [transferAccount, setTransferAccount] = useState("")
    const [tokenNumber, setTokenNumber] = useState(0)

    return (
        <div className={Style.transfer}>
            <div className={Style.transfer_box}>
                <div className={Style.transfer_box_left}>
                    <h1>Token Analytic</h1>
                    <div className={Style.transfer_box_left_box}>
                        <p>
                            Token Name
                            <span>
                                {TokenName}
                            </span>
                        </p>
                        <p>
                            Token supply
                            <span>
                                {NoOfToken}
                            </span>
                        </p>
                        <p>
                            Token Symbol
                            <span className={Style.funToken}>
                                <Image src="/assets/funtoken.png" alt='symbol' width={70} height={70} className={Style.funToken_img} />
                            </span>
                        </p>
                        <p>Token Left
                            <span>
                                {TokenOwnerBal}
                            </span>
                        </p>


                    </div>

                </div>
                <div className={Style.transfer_box_right}>
                    <h2>
                        Transfer Token
                    </h2>
                    <input placeholder='Address' type="text" onClick={(e) => { setTransferAccount(e.target.value) }} />

                    <input placeholder='Enter token number' type='number' min={1} onClick={(e) => { setTokenNumber(e.target.value) }} />
                    <div className={Style.transfer_box_right_btn}>
                        <button onClick={() => transferToken(transferAccount, tokenNumber)}>Send Token</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer