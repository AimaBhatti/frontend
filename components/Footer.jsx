import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className="footer_agileinfo_topf py-5">
                <div className="container py-md-5">
                    <div className="row">
                        <div className="col-lg-3 footer_wthree_gridf mt-lg-5">
                            <h2><a href="/"><span>B</span>aggage
                            </a> </h2>
                            <label className="sub-des2">Online Store</label>
                        </div>
                        <div className="col-lg-3 footer_wthree_gridf mt-md-0 mt-4">
                            <ul className="footer_wthree_gridf_list">
                                <li>
                                    <a href="/"><span className="fa fa-angle-right" aria-hidden="true"></span> Home</a>
                                </li>
                                <li>
                                    <a href="/about"><span className="fa fa-angle-right" aria-hidden="true"></span> About</a>
                                </li>
                                <li>
                                    <a href="/shop"><span className="fa fa-angle-right" aria-hidden="true"></span> Shop</a>
                                </li>
                                <li>
                                    <a href="/shop"><span className="fa fa-angle-right" aria-hidden="true"></span>Collections</a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
                            <ul className="footer_wthree_gridf_list">
                                <li>
                                    <a href="/single"><span className="fa fa-angle-right" aria-hidden="true"></span> Extra Page</a>
                                </li>

                                <li>
                                    <a href="#"><span className="fa fa-angle-right" aria-hidden="true"></span> Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="/single"><span className="fa fa-angle-right" aria-hidden="true"></span> Shop Single</a>
                                </li>
                                <li>
                                    <a href="/contact"><span className="fa fa-angle-right" aria-hidden="true"></span> Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
                            <ul className="footer_wthree_gridf_list">
                                <li>
                                    <a href="/login"><span className="fa fa-angle-right" aria-hidden="true"></span> Login </a>
                                </li>

                                <li>
                                    <a href="/register"><span className="fa fa-angle-right" aria-hidden="true"></span>Register</a>
                                </li>
                                <li>
                                    <a href="#"><span className="fa fa-angle-right" aria-hidden="true"></span>Privacy & Policy</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="w3ls-fsocial-grid">
                        <h3 className="sub-w3ls-headf">Follow Us</h3>
                        <div className="social-ficons">
                            <ul>
                                <li><a href="#"><span className="fa fa-facebook"></span> Facebook</a></li>
                                <li><a href="#"><span className="fa fa-twitter"></span> Twitter</a></li>
                                <li><a href="#"><span className="fa fa-google"></span>Google</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="move-top text-center mt-lg-4 mt-3">
                        <a href="#home"><span className="fa fa-angle-double-up" aria-hidden="true"></span></a>
                    </div>
                </div>
            </div>

            <div className="cpy-right text-center py-3">
                <p>© 2019 Baggage. All rights reserved | Design by
                    <a href="http://w3layouts.com"> W3layouts.</a>
                </p>

            </div>
        </>
    )
}
