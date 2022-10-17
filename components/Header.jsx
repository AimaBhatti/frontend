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
							<Image src='/logo.png' width={100} height={100} />
							<h1> <Link href="/"><span className="log-w3pvt">B</span>aggage</Link> <label className="sub-des">Online Store</label></h1>
						</div>

						<div className="forms ml-auto">
							<Link href="/login" className="btn"><span className="fa fa-user-circle-o"></span> Sign In</Link>
							<Link href="/register" className="btn"><span className="fa fa-pencil-square-o"></span> Sign Up</Link>
						</div>
					</div>
					<div className="nav-top-wthree">
						<nav>
							<label htmlFor="drop" className="toggle"><span className="fa fa-bars"></span></label>
							<input type="checkbox" id="drop" />
							<ul className="menu">
								<li className="active"><Link href="/">Home</Link></li>
								<li><Link href="/about">About Us</Link></li>
								<li>
									{/* <!-- First Tier Drop Down --> */}
									<label htmlFor="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span>
									</label>
									<Link href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></Link>
									<input type="checkbox" id="drop-2" />
									<ul>
										<li><Link href="/about" className="drop-text">About</Link></li>
										<li><Link href="/single" className="drop-text">Single Page</Link></li>

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