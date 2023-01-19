import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Content() {
    return (
      <>
        <section className="collections">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 ab-content-img"></div>
              <div className="col-md-4 ab-content text-center p-lg-5 p-3 my-lg-5">
                <h4>Travel Must Haves</h4>
                <p>
                  We at the Baggage provide our customers, bags with best quality. Need travelling bags in economical price? Do not worry, we are here to save you! 
                </p>
                <Link href="/shop">
                  <a className="btn shop mt-3">Shop Now</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="banner-bottom py-5">
          <div className="container py-md-5">
            <h3 className="title-wthree mb-lg-5 mb-4 text-center">
              Safety Meets Style{" "}
            </h3>
            <div className="row text-center">
              <div className="col-md-4 content-gd-wthree">
                <Image
                  src="/images/c1.jpg"
                  width="400"
                  height="550"
                  className="img-fluid"
                  alt="Bag"
                />
              </div>
              <div className="col-md-4 content-gd-wthree ab-content py-lg-5 my-lg-5">
                <h4>Need Extra Space ?</h4>
                <p>
                  We are here here to provide you with the best quality leather bags. Need spacious bags? Do not worry! We are here to save you.
                </p>
                <Link href="/shop">
                  <a className="btn shop mt-3">Shop Now</a>
                </Link>
              </div>
              <div className="col-md-4 content-gd-wthree">
                <Image
                  src="/images/c2.jpg"
                  width="400"
                  height="550"
                  className="img-fluid"
                  alt="Bag"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="banner-bottom py-5">
          <div className="container py-md-5">
            <div className="row">
              <div className="col-lg-4 gallery-content-info text-center mt-lg-5">
                <h3 className="title-wthree mb-lg-5 mb-4">Trending Now </h3>
                <p>
                  Trending articles are here. Buy now before they get out of stock. Hurry Up!
                </p>
                <Link href="/shop">
                  <a className="btn shop mt-3">Shop Now</a>
                </Link>
              </div>
              <div className="col-lg-8 gallery-content">
                <div className="row">
                  <div className="col-md-4 col-sm-6 gal-img">
                      <Image
                        src="/images/g1.jpg"
                        width="450"
                        height="400"
                        alt="Baggage"
                        className="img-fluid mt-4"
                      />
                  </div>
                  <div className="col-md-4 col-sm-6 gal-img">
                      <Image
                        src="/images/g2.jpg"
                        width="450"
                        height="400"
                        alt="Baggage"
                        className="img-fluid mt-4"
                      />
                  </div>
                  <div className="col-md-4 col-sm-6 gal-img">
                      <Image
                        src="/images/g3.jpg"
                        width="450"
                        height="400"
                        alt="Baggage"
                        className="img-fluid mt-4"
                      />
                  </div>
                  <div className="col-md-4 col-sm-6 gal-img">
                      <Image
                        src="/images/g4.jpg"
                        width="450"
                        height="400"
                        alt="Baggage"
                        className="img-fluid mt-4"
                      />
                  </div>
                  <div className="col-md-4 col-sm-6 gal-img">
                      <Image
                        src="/images/g5.jpg"
                        width="450"
                        height="400"
                        alt="Baggage"
                        className="img-fluid mt-4"
                      />
                  </div>
                  <div className="col-md-4 col-sm-6 gal-img">
                      <Image
                        src="/images/g6.jpg"
                        width="450"
                        height="400"
                        alt="Baggage"
                        className="img-fluid mt-4"
                      />
                  </div>
                </div>
                {/* <!-- gallery popups --> */}
                {/* <!-- popup--> */}
                <div id="gal1" className="popup-effect">
                  <div className="popup">
                    <Image
                      src="/images/g1.jpg"
                      width="450"
                      height="400"
                      alt="Popup image"
                      className="img-fluid mt-4"
                    />
                    <Link href="#gallery">
                      <a className="close">&times;</a>
                    </Link>
                  </div>
                </div>
                {/* <!-- //popup --> */}
                {/* <!-- popup--> */}
                <div id="gal2" className="popup-effect">
                  <div className="popup">
                    <Image
                      src="/images/g2.jpg"
                      width="450"
                      height="400"
                      alt="Popup image"
                      className="img-fluid mt-4"
                    />
                    <Link href="#gallery">
                      <a className="close">&times;</a>
                    </Link>
                  </div>
                </div>
                {/* <!-- //popup --> */}
                {/* <!-- popup--> */}
                <div id="gal3" className="popup-effect">
                  <div className="popup">
                    <Image
                      src="/images/g3.jpg"
                      width="450"
                      height="400"
                      alt="Popup image"
                      className="img-fluid mt-4"
                    />
                    <Link href="#gallery">
                      <a className="close">&times;</a>
                    </Link>
                  </div>
                </div>
                {/* <!-- //popup --> */}
                {/* <!-- //gallery popups --> */}
              </div>
            </div>
          </div>
        </section>
        <section className="banner-bottom py-5">
          <div className="container py-md-3">
            <hr></hr>
            <div className="row grids-wthree-info text-center">
              <div className="col-lg-4 ab-content">
                <div className="ab-info-con">
                  <h4>Fast & Free Delivery</h4>
                  <p>
                    An order will be fulfilled within 9-10 days. We currently
                    use Swyft courier service to deliver the products to your
                    door.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 ab-content">
                <div className="ab-info-con">
                  <h4>Safe & Secure Payments</h4>
                  <p>
                    If we decline to supply an item to you and you have already
                    paid for it, we will give you a full refund of any amount
                    already paid for that item in accordance with our refund
                    policy.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 ab-content">
                <div className="ab-info-con">
                  <h4>100% Money Back Guarantee</h4>
                  <p>
                    We hope you will be very happy with your product but if, for
                    any reason, you are not completely satisfied, you may return
                    it to us within 30 days. We will refund you for the cost of
                    the product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
