import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Newsletter from '../components/Newsletter'

export default function single() {
    return (
        <div>
            <Head>
                <title>Bagagge | Single</title>
            </Head>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Single Page</li>
            </ol>

            <section className="banner-bottom py-5">
                <div className="container py-md-5">
                    {/* <!-- product right --> */}
                    <div className="left-ads-display wthree">
                        <div className="row">
                            <div className="desc1-left col-md-6">
                                <img src="images/bag1.png" className="img-fluid" alt="" />
                            </div>
                            <div className="desc1-right col-md-6 pl-lg-3">
                                <h3>Lorem ipsum dolor sit amet laoret.</h3>
                                <h5>Rs. 499 <span>599</span> <a href="#">Click for offer</a></h5>
                                <div className="available mt-3">
                                    <form action="#" method="post" className="w3pvt-newsletter subscribe-sec">
                                        <input type="email" name="Email" placeholder="Enter your email..." required="" />
                                        <button className="btn submit">Check</button>

                                    </form>
                                    <span><a href="#">login to save in wishlist </a></span>
                                    <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.. </p>
                                </div>
                                <div className="share-desc mt-5">
                                    <div className="share text-left">
                                        <h4>Share Product :</h4>
                                        <div className="social-ficons mt-4">
                                            <ul>
                                                <li><a href="#"><span className="fa fa-facebook"></span> Facebook</a></li>
                                                <li><a href="#"><span className="fa fa-twitter"></span> Twitter</a></li>
                                                <li><a href="#"><span className="fa fa-google"></span>Google</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>


                        </div>
                        <div className="row sub-para-w3pvt my-5">

                            <h3 className="shop-sing">Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
                            <p className="mt-3 italic-blue">Consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
                            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
                        </div>


                        {/* <!--/row--> */}
                        <h3 className="title-wthree-single my-lg-5 my-4 text-left">Featured Bags</h3>
                        <div className="row shop-wthree-info text-center">
                            <div className="col-md-3 shop-info-grid text-center mt-4">
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
                            <div className="col-md-3 shop-info-grid text-center mt-4">
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
                            <div className="col-md-3 shop-info-grid text-center mt-4">
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
                            <div className="col-md-3 shop-info-grid text-center mt-4">
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

                    </div>
                </div>
            </section>
            <Newsletter />
        </div>
    )
}