import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function products() {
    return (
        <div>
            <div className="row shop-wthree-info text-center">
                <div className="col-lg-3 shop-info-grid text-center mt-4">
                    <div className="product-shoe-info shoe">
                        <div className="men-thumb-item">
                            <Image src="/images/b1.jpg" width={300} height={300} className="img-fluid" alt="" />

                        </div>
                        <div className="item-info-product">
                            <h4>
                                <Link href="/single"><a>Messenger Bag </a></Link>
                            </h4>

                            <div className="product_price">
                                <div className="grid-price">
                                    <span className="money"><span className="line">$799</span> $675.00</span>
                                </div>
                            </div>
                            <ul className="stars">
                                <li><Link href="#"><a><span className="fa fa-star" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-half-o" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-half-o" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-o" aria-hidden="true"></span></a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 shop-info-grid text-center mt-4">
                    <div className="product-shoe-info shoe">
                        <div className="men-thumb-item">
                            <Image src="/images/b2.jpg" width={300} height={300} className="img-fluid" alt="" />

                        </div>
                        <div className="item-info-product">
                            <h4>
                                <Link href="/single"><a>Shoulder Bag (Pink) </a></Link>
                            </h4>

                            <div className="product_price">
                                <div className="grid-price">
                                    <span className="money"><span className="line">$799</span> $675.00</span>
                                </div>
                            </div>
                            <ul className="stars">
                                <li><Link href="#"><a><span className="fa fa-star" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-half-o" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-half-o" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-o" aria-hidden="true"></span></a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 shop-info-grid text-center mt-4">
                    <div className="product-shoe-info shoe">
                        <div className="men-thumb-item">
                            <Image src="/images/b3.jpg" width={300} height={300} className="img-fluid" alt="" />

                        </div>
                        <div className="item-info-product">
                            <h4>
                                <Link href="/single"><a>Sling Bag </a></Link>
                            </h4>

                            <div className="product_price">
                                <div className="grid-price">
                                    <span className="money"><span className="line">$599</span> $475.00</span>
                                </div>
                            </div>
                            <ul className="stars">
                                <li><Link href="#"><a><span className="fa fa-star" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-half-o" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-half-o" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-o" aria-hidden="true"></span></a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 shop-info-grid text-center mt-4">
                    <div className="product-shoe-info shoe">
                        <div className="men-thumb-item">
                            <Image src="/images/b4.jpg" width={300} height={300} className="img-fluid" alt="" />

                        </div>
                        <div className="item-info-product">
                            <h4>
                                <Link href="/single"><a>Tote (Blue) </a></Link>
                            </h4>

                            <div className="product_price">
                                <div className="grid-price">
                                    <span className="money"><span className="line">$799</span> $675.00</span>
                                </div>
                            </div>
                            <ul className="stars">
                                <li><Link href="#"><a><span className="fa fa-star" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-half-o" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-half-o" aria-hidden="true"></span></a></Link></li>
                                <li><Link href="#"><a><span className="fa fa-star-o" aria-hidden="true"></span></a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
