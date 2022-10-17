import React from 'react'
import Link from 'next/link'
export default function Header() {
	return (
		<div className="main-sec inner-page">
			<header className="py-sm-3 pt-3 pb-2" id="home">
				<div className="container">
					{/* <!-- nav --> */}
					<div className="top-w3pvt d-flex">
						<div id="logo">
							<h1> <a href="/"><span className="log-w3pvt">B</span>aggage</a> <label className="sub-des">Online Store</label></h1>
						</div>

						<div className="forms ml-auto">
							<a href="/login" className="btn"><span className="fa fa-user-circle-o"></span> Sign In</a>
							<a href="/register" className="btn"><span className="fa fa-pencil-square-o"></span> Sign Up</a>
						</div>
					</div>
					<div className="nav-top-wthree">
						<nav>
							<label htmlFor="drop" className="toggle"><span className="fa fa-bars"></span></label>
							<input type="checkbox" id="drop" />
							<ul className="menu">
								<li className="active"><a href="/">Home</a></li>
								<li><a href="/about">About Us</a></li>
								<li>
									{/* <!-- First Tier Drop Down --> */}
									<label htmlFor="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span>
									</label>
									<a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
									<input type="checkbox" id="drop-2" />
									<ul>
										<li><a href="/coming" className="drop-text">Services</a></li>
										<li><a href="/about" className="drop-text">Features</a></li>
										<li><a href="/single" className="drop-text">Single Page</a></li>

									</ul>
								</li>

								<li><a href="/shop">Collections</a></li>
								<li><a href="/contact">Contact</a></li>
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