import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function cart() {
    return (
        <>
            <Head>
                <title>Baggae | Shopping Cart</title>
            </Head>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                <div className="col align-self-center text-right text-muted">3 items</div>
                            </div>
                        </div>
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    {/* <Image width="250px" height="250px" className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" alt='' /> */}

                                </div>
                                <div className="col">
                                    <div className="row text-muted">Shirt</div>
                                    <div className="row">Cotton T-shirt</div>
                                </div>
                                <div className="col">
                                    <a href="#">-</a>
                                    <a href="#" className="border">1</a>
                                    <a href="#">+</a>
                                </div>
                                <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    {/* <Image width="250px" height="250px" className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" alt='' /> */}

                                </div>
                                <div className="col">
                                    <div className="row text-muted">Shirt</div>
                                    <div className="row">Cotton T-shirt</div>
                                </div>
                                <div className="col">
                                    <a href="#">-</a>
                                    <a href="#" className="border">1</a>
                                    <a href="#">+</a>
                                </div>
                                <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    {/* <Image width="250px" height="250px" className="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg" alt='' /> */}
                                </div>
                                <div className="col">
                                    <div className="row text-muted">Shirt</div>
                                    <div className="row">Cotton T-shirt</div>
                                </div>
                                <div className="col">
                                    <a href="#">-</a>
                                    <a href="#" className="border">1</a>
                                    <a href="#">+</a>
                                </div>
                                <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="back-to-shop">
                            <a href="#">&leftarrow;</a><span className="text-muted">Back to shop</span>
                        </div>
                    </div>
                    <div className="col-md-4 summary">
                        <div><h5><b>Summary</b></h5></div>
                        <hr></hr>
                        <div className="row">
                            <div className="col">ITEMS 3</div>
                            <div className="col text-right">&euro; 132.00</div>
                        </div>
                        <form id='cart-form'>
                            <p>SHIPPING</p>
                            <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                        </form>
                        <div className="row">
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">&euro; 137.00</div>
                        </div>
                        <Link href="/checkout"><button id="btn">CHECKOUT</button></Link>
                    </div>
                </div>

            </div>
        </>
    )
}
