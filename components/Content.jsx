import React from 'react'

export default function Content() {
    return (
        <>
            <section className="banner-bottom py-5">
                <div className="container py-md-3">
                    <div className="row grids-wthree-info text-center">
                        <div className="col-lg-4 ab-content">
                            <div className="ab-info-con">
                                <h4>Fast & Free Delivery</h4>
                                <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 ab-content">
                            <div className="ab-info-con">
                                <h4>Safe & Secure Payments</h4>
                                <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 ab-content">
                            <div className="ab-info-con">
                                <h4>100% Money Back Guarantee</h4>
                                <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="collections">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 ab-content-img">

                        </div>
                        <div className="col-md-4 ab-content text-center p-lg-5 p-3 my-lg-5">
                            <h4>Travel Must Haves</h4>
                            <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            <a href="shop.html" className="btn shop mt-3">Shop Now</a>

                        </div>
                    </div>
                </div>
            </section>

            <section className="banner-bottom py-5">
                <div className="container py-md-5">

                    <h3 className="title-wthree mb-lg-5 mb-4 text-center">Safety Meets Style </h3>
                    <div className="row text-center">


                        <div className="col-md-4 content-gd-wthree">
                            <img src="images/c1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-4 content-gd-wthree ab-content py-lg-5 my-lg-5">
                            <h4>Need Extra Space ?</h4>
                            <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            <a href="shop.html" className="btn shop mt-3">Shop Now</a>

                        </div>
                        <div className="col-md-4 content-gd-wthree">
                            <img src="images/c2.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="mid-section">
                <div className="d-lg-flex p-0">
                    <div className="col-lg-6 bottom-w3pvt-left p-lg-0">
                        <img src="images/ab1.jpg" className="img-fluid" alt="" />
                        <div className="pos-wthree">
                            <h4 className="text-wthree">50% Off Any <br />Women's Bags</h4>
                            <a href="shop.html" className="btn shop mt-3">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-lg-6 bottom-w3pvt-left bottom-w3pvt-right p-lg-0">
                        <img src="images/ab2.jpg" className="img-fluid" alt="" />
                        <div className="pos-w3pvt">
                            <h4 className="text-w3pvt">30% Off Any <br />Men's Bags</h4>
                            <a href="shop.html" className="btn shop mt-3">Shop Now</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banner-bottom py-5">
                <div className="container py-md-5">


                    <div className="row">
                        <div className="col-lg-4 gallery-content-info text-center mt-lg-5">
                            <h3 className="title-wthree mb-lg-5 mb-4">Trending Now </h3>
                            <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            <a href="shop.html" className="btn shop mt-3">Shop Now</a>

                        </div>
                        <div className="col-lg-8 gallery-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <a href="#gal1"><img src="images/g1.jpg" alt="Baggage" className="img-fluid mt-4" /></a>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <a href="#gal2"><img src="images/g2.jpg" alt="Baggage" className="img-fluid mt-4" /></a>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <a href="#gal3"><img src="images/g3.jpg" alt="Baggage" className="img-fluid mt-4" /></a>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <a href="#gal1"><img src="images/g4.jpg" alt="Baggage" className="img-fluid mt-4" /></a>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <a href="#gal2"><img src="images/g5.jpg" alt="Baggage" className="img-fluid mt-4" /></a>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <a href="#gal3"><img src="images/g6.jpg" alt="Baggage" className="img-fluid mt-4" /></a>
                                </div>

                            </div>
                            {/* <!-- gallery popups --> */}
                            {/* <!-- popup--> */}
                            <div id="gal1" className="popup-effect">
                                <div className="popup">
                                    <img src="images/g1.jpg" alt="Popup image" className="img-fluid mt-4" />
                                    <a className="close" href="#gallery">&times;</a>
                                </div>
                            </div>
                            {/* <!-- //popup --> */}
                            {/* <!-- popup--> */}
                            <div id="gal2" className="popup-effect">
                                <div className="popup">
                                    <img src="images/g2.jpg" alt="Popup image" className="img-fluid mt-4" />
                                    <a className="close" href="#gallery">&times;</a>
                                </div>
                            </div>
                            {/* <!-- //popup --> */}
                            {/* <!-- popup--> */}
                            <div id="gal3" className="popup-effect">
                                <div className="popup">
                                    <img src="images/g3.jpg" alt="Popup image" className="img-fluid mt-4" />
                                    <a className="close" href="#gallery">&times;</a>
                                </div>
                            </div>
                            {/* <!-- //popup --> */}
                            {/* <!-- //gallery popups --> */}

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
