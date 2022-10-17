import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
	return (
		<div className="main-sec inner-page">
			<header className="py-sm-3 pt-3 pb-2" id="home">
				<div className="container">
					{/* <!-- nav --> */}
					<div className="top-w3pvt d-flex">
						<div id="logo">
							<Link href="/"><a><Image src='/logo.png' width={100} height={100} alt="logo" /></a></Link>
							<h1>
								<Link href="/"><a><span className="log-w3pvt">B</span>aggage</a></Link>
								<label className="sub-des">Online Store</label>
							</h1>
						</div>

						<div className="forms ml-auto">
							<Link href="/login">
								<a className="btn">
									<span className="fa fa-user-circle-o"></span> Sign In
								</a>
							</Link>
							<Link href="/register">
								<a className="btn">
									<span className="fa fa-pencil-square-o"></span> Sign Up
								</a>
							</Link>
						</div>
					</div>
					<div className="nav-top-wthree">
						<nav>
							<label htmlFor="drop" className="toggle"><span className="fa fa-bars"></span></label>
							<input type="checkbox" id="drop" />
							<ul className="menu">
								<li className="active"><Link href="/">Home</Link></li>
								<li><Link href="/about"><a>About Us</a></Link></li>
								<li>
									{/* <!-- First Tier Drop Down --> */}
									<label htmlFor="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span>
									</label>
									<Link href="#"><a>Dropdown<span className="fa fa-angle-down" aria-hidden="true"></span></a></Link>
									<input type="checkbox" id="drop-2" />
									<ul>
										<li><Link href="/about"><a className="drop-text">About</a></Link></li>
										<li><Link href="/single"><a className="drop-text">Single Page</a></Link></li>

									</ul>
								</li>

								<li><Link href="/shop">Collections</Link></li>
								<li><Link href="/contact">Contact</Link></li>
							</ul>
						</nav>
						{/* <!-- //nav --> */}
						<div className="search-form ml-auto">
							<div className="form-w3layouts-grid">
								<form action="#" method="post" className="newsletter">
									<input className="search" type="search" placeholder="Search here..." required="" />
									<button className="form-control btn" value=""><span className="fa fa-search"></span></button>
								</form>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</header>
		</div>
	)
}