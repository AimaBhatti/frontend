import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function cart() {
    return (
        <>
            <Head>
                <title>Baggae | Shopping Cart</title>
            </Head>
            <div className="shopping-cart">
                {/* <!-- Title --> */}
                <div className="title">
                    Shopping Cart
                </div>

                {/* <!-- Product #1 --> */}
                <div className="item">
                    <div className="buttons">
                        <Image className="delete-btn" width="22px" height="20px" src="/delete.png" alt='' />
                    </div>

                    <div className="image">
                        {/* <Image width={250} height={250} src="item-1.png" alt="" /> */}
                    </div>

                    <div className="description">
                        <span>Common Projects</span>
                        <span>Bball High</span>
                        <span>White</span>
                    </div>

                    <div className="quantity">
                        <Image className="plus-btn" width="20px" height="20px" src="/plus.png" alt='' />
                        <input type="text" name="name" defaultValue={1} />
                        <Image className="minus-btn" width="20px" height="20px" src="/minus.png" alt='' />
                    </div>

                    <div className="total-price">$549</div>
                </div>

                {/* <!-- Product #2 --> */}
                <div className="item">
                    <div className="buttons">
                        <Image className="delete-btn" width="22px" height="20px" src="/delete.png" alt='' />
                    </div>

                    <div className="image">
                        {/* <Image width={250} height={250} src="item-2.png" alt="" /> */}
                    </div>

                    <div className="description">
                        <span>Maison Margiela</span>
                        <span>Future Sneakers</span>
                        <span>White</span>
                    </div>

                    <div className="quantity">
                        <Image className="plus-btn" width="20px" height="20px" src="/plus.png" alt='' />
                        <input type="text" name="name" defaultValue={1} />
                        <Image className="minus-btn" width="20px" height="20px" src="/minus.png" alt='' />
                    </div>

                    <div className="total-price">$870</div>
                </div>

                {/* <!-- Product #3 --> */}
                <div className="item">
                    <div className="buttons">
                        <Image className="delete-btn" width="22px" height="20px" src="/delete.png" alt='' />
                    </div>

                    <div className="image">
                        {/* <Image width={250} height={250} src="item-3.png" alt="" /> */}
                    </div>

                    <div className="description">
                        <span>Our Legacy</span>
                        <span>Brushed Scarf</span>
                        <span>Brown</span>
                    </div>

                    <div className="quantity">
                        <Image className="plus-btn" width="20px" height="20px" src="/plus.png" alt='' />
                        <input type="text" name="name" defaultValue={1} />
                        <Image className="minus-btn" width="20px" height="20px" src="/minus.png" alt='' />
                    </div>

                    <div className="total-price">$349</div>
                </div>
            </div>
        </>
    )
}
