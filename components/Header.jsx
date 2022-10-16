import React from 'react'
import Link from 'next/link'
export default function Header() {
    return (
        <div className="main-banner" id="home">
            <header className="header">
                <div className="container-fluid px-lg-5">
                    {/* <!-- nav --> */}
                    <nav className="py-4">
                        <div id="logo">
                            <h1> <a href="index.html"><span className="fa fa-bold" aria-hidden="true"></span>ootie</a></h1>
                        </div>

                        <label htmlFor="drop" className="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu mt-2">
                            <li className="active"><Link href='/'>Home</Link></li>
                            <li><Link href='/about'>About</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li>
                                {/* <!-- First Tier Drop Down --> */}
                                <label htmlFor="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                                <a href="#">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                                <input type="checkbox" id="drop-2" />
                                <ul>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/shop">Shop Now</Link></li>
                                    <li><Link href="/shop-single">Single Page</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    {/* <!-- //nav --> */}
                </div>
            </header>

            <div className="banner-info">
                <p>Trending of the week</p>
                <h3 className="mb-4">Casual Shoes for Men</h3>
                <div className="ban-buttons">
                    <Link href="/shop-single" className="btn">Shop Now</Link>
                    <Link href="/single" className="btn active">Read More</Link>
                </div>
            </div>
        </div>
    )
}