import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
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
                                    <img src="images/b1.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Messenger Bag </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <img src="images/b2.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Shoulder Bag (Pink) </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <img src="images/b3.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Sling Bag </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$599</span> $475.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <img src="images/b4.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Tote (Blue) </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
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
                                    <img src="images/b5.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Satchel (Yellow) </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$999</span> $875.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <img src="images/b6.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Shoulder Bag (Orange)</a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <img src="images/b8.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Hobo (Blue) </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <img src="images/b7.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Satchel (Pink)</a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$599</span> $475.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
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
                                    <img src="images/b3.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Sling Bag </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$599</span> $475.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <img src="images/b4.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Tote (Blue) </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <img src="images/b1.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Messenger Bag </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 shop-info-grid text-center mt-4">
                            <div className="product-shoe-info shoe">
                                <div className="men-thumb-item">
                                    <img src="images/b2.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="item-info-product">
                                    <h4>
                                        <a href="single.html">Shoulder Bag (Pink) </a>
                                    </h4>

                                    <div className="product_price">
                                        <div className="grid-price">
                                            <span className="money"><span className="line">$799</span> $675.00</span>
                                        </div>
                                    </div>
                                    <ul className="stars">
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                                        <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!--//row--> */}
                    </div>
                    <nav aria-label="Page navigation example mt-5">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">Previous</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Newsletter />
        </div>
    )
}
