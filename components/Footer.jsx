import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className="footer_agileinfo_topf py-5">
                <div className="container py-md-5">
                    <div className="row">
                        <div className="col-lg-3 footer_wthree_gridf mt-lg-5">
                            <h2><Link href="/"><span>B</span>aggage</Link> </h2>
                            <label className="sub-des2">Online Store</label>
                        </div>
                        <div className="col-lg-3 footer_wthree_gridf mt-md-0 mt-4">
                            <ul className="footer_wthree_gridf_list">
                                <li>
                                    <Link href="/"><span className="fa fa-angle-right" aria-hidden="true"></span> Home</Link>
                                </li>
                                <li>
                                    <Link href="/about"><span className="fa fa-angle-right" aria-hidden="true"></span> About</Link>
                                </li>
                                <li>
                                    <Link href="/shop"><span className="fa fa-angle-right" aria-hidden="true"></span> Collections</Link>
                                </li>
                                <li>
                                    <Link href="/single"><span className="fa fa-angle-right" aria-hidden="true"></span> Single</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
                            <ul className="footer_wthree_gridf_list">
                                <li>
                                    <Link href="/single"><span className="fa fa-angle-right" aria-hidden="true"></span> Extra Page</Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="fa fa-angle-right" aria-hidden="true"></span> Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="/single"><span className="fa fa-angle-right" aria-hidden="true"></span> Shop Single</Link>
                                </li>
                                <li>
                                    <Link href="/contact"><span className="fa fa-angle-right" aria-hidden="true"></span> Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
                            <ul className="footer_wthree_gridf_list">
                                <li>
                                    <Link href="/login"><span className="fa fa-angle-right" aria-hidden="true"></span> Login </Link>
                                </li>

                                <li>
                                    <Link href="/register"><span className="fa fa-angle-right" aria-hidden="true"></span>Register</Link>
                                </li>
                                <li>
                                    <Link href="#"><span className="fa fa-angle-right" aria-hidden="true"></span>Privacy & Policy</Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="w3ls-fsocial-grid">
                        <h3 className="sub-w3ls-headf">Follow Us</h3>
                        <div className="social-ficons">
                            <ul>
                                <li><Link href="#"><span className="fa fa-facebook"></span> Facebook</Link></li>
                                <li><Link href="#"><span className="fa fa-twitter"></span> Twitter</Link></li>
                                <li><Link href="#"><span className="fa fa-google"></span>Google</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="move-top text-center mt-lg-4 mt-3">
                        <Link href="#home"><span className="fa fa-angle-double-up" aria-hidden="true"></span></Link>
                    </div>
                </div>
            </div>

            <div className="cpy-right text-center py-3">
                <p>© 2019 Baggage. All rights reserved | Design by
                    <Link href="http://w3layouts.com"> W3layouts.</Link>
                </p>

            </div>
        </>
    )
}
