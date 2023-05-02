import Image from 'next/image'
import React from 'react'
import Style from './User.module.css';
const User = ({ holderArray }) => {
    return (
        <div className={Style.user}>
            {holderArray.map((el, i) => (
                <div key={i + 1} className={Style.user_box}>
                    <h4 className={Style.user_box_name}>
                        User #{el[0].toNumber()}
                    </h4>
                    <div className={Style.user_box_price_box}>
                        <p className={Style.user_box_price}>
                            {el[3].toNumber()} Token
                        </p>
                        <p className={Style.user_box_status}>
                            ${el[3].toNumber() * 50} /{el[3].toNumber()} Your Token worth
                        </p>
                    </div>
                    <div className={Style.user_box_img}>
                        <Image src="/assets/funtoken.png" alt='avator' width={35} height={35} className={Style.user_box_img_img} />
                        <p>
                            To: {el[1].slice(0, 22)}...
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default User