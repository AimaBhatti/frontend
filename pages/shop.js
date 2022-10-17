import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Newsletter from '../components/Newsletter'

export default function shop() {
    return (
        <div>
            <Head>
                <title>Baggage | Shop</title>
            </Head>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Collections</li>
            </ol>

            <section className="banner-bottom py-5">
                <div className="container py-5">
                    <h3 className="title-wthree mb-lg-5 mb-4 text-center">Shop Now</h3>
                    {/* <!--/row--> */}
                    <div className="row shop-wthree-info text-center">
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <Image src="/images/b1.jpg" width={300} height={300} className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <Link href="/single">Messenger Bag </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
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
                                        <Link href="/single">Shoulder Bag (Pink) </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
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
                                        <Link href="/single">Sling Bag </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$599</span> $475.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
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
                                        <Link href="/single">Tote (Blue) </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!--//row--> */}
                    {/* <!--/row1--> */}
                    <div className="row shop-wthree-info text-center">
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <Image src="/images/b5.jpg" width={300} height={300} className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <Link href="/single">Satchel (Yellow) </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$999</span> $875.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <Image src="/images/b6.jpg" width={300} height={300} className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <Link href="/single">Shoulder Bag (Orange)</Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <Image src="/images/b8.jpg" width={300} height={300} className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <Link href="/single">Hobo (Blue) </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <Image src="/images/b7.jpg" width={300} height={300} className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <Link href="/single">Satchel (Pink)</Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$599</span> $475.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <!--//row1--> */}
                    {/* <!--/row--> */}
                    <div className="row shop-wthree-info text-center mb-5">
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <Image src="/images/b3.jpg" width={300} height={300} className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <Link href="/single">Sling Bag </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$599</span> $475.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
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
                                        <Link href="/single">Tote (Blue) </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <Image src="/images/b1.jpg" width={300} height={300} className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <Link href="/single">Messenger Bag </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
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
                                        <Link href="/single">Shoulder Bag (Pink) </Link>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                        <li><Link href="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!--//row--> */}
                    </div>
                    <nav aria-label="Page navigation example mt-5">
                        <ul className="pagination">
                            <li className="page-item">
                                <Link className="page-link" href="#">Previous</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">1</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">2</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">3</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">Next</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Newsletter />
        </div>
    )
}
