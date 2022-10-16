import Head from 'next/head'
import Image from 'next/image'
import Testimonials from '../components/Testimonials'
import PopularProducts from '../components/PopularProducts'
import Brands from '../components/Brands'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bootie | Home</title>
      </Head>

      {/* <!--//main-content-->
      <!--/ab --> */}
      <section className="about py-md-5 py-5">
        <div className="container-fluid">
          <div className="feature-grids row px-3">
            <div className="col-lg-3 gd-bottom">
              <div className="bottom-gd row">
                <div className="icon-gd col-md-3 text-center"><span className="fa fa-truck" aria-hidden="true"></span></div>
                <div className="icon-gd-info col-md-9">
                  <h3 className="mb-2">FREE SHIPPING</h3>
                  <p>On all order over $2000</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 gd-bottom">
              <div className="bottom-gd row bottom-gd2-active">
                <div className="icon-gd col-md-3 text-center"><span className="fa fa-bullhorn" aria-hidden="true"></span></div>
                <div className="icon-gd-info col-md-9">
                  <h3 className="mb-2">FREE RETURN</h3>
                  <p>On 1st exchange in 30 days</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 gd-bottom">
              <div className="bottom-gd row">
                <div className="icon-gd col-md-3 text-center"> <span className="fa fa-gift" aria-hidden="true"></span></div>

                <div className="icon-gd-info col-md-9">
                  <h3 className="mb-2">MEMBER DISCOUNT</h3>
                  <p>Register & save up to $29%</p>
                </div>

              </div>
            </div>
            <div className="col-lg-3 gd-bottom">
              <div className="bottom-gd row">
                <div className="icon-gd col-md-3 text-center"> <span className="fa fa-usd" aria-hidden="true"></span></div>
                <div className="icon-gd-info col-md-9">
                  <h3 className="mb-2">PREMIUM SUPPORT</h3>
                  <p>Support 24 hours per day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //ab --> */}

      {/* <!--/ab --> */}
      <section className="about py-5">
        <div className="container pb-lg-3">
          <h3 className="tittle text-center">New Arrivals</h3>
          <div className="row">
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s1.jpg" className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Bella Toes </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$675.00</span>
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
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s2.jpg" className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Chikku Loafers </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$475.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s3.jpg" className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">(SRV) Sneakers </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$575.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men my-lg-4">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s4.jpg" className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Shuberry Heels</a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$575.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men my-lg-4">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s5.jpg" className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Red Bellies </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$575.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men my-lg-4">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s6.jpg" className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Catwalk Flats </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$575.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s7.jpg" className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Running Shoes </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$675.00</span>
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
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s8.jpg" className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Sukun Casuals </a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price ">
                      <span className="money ">$775.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-men">
              <div className="product-shoe-info shoe text-center">
                <div className="men-thumb-item">
                  <img src="images/s9.jpg" className="img-fluid" alt="" />
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="shop-single.html">Bank Sneakers</a>
                  </h4>

                  <div className="product_price">
                    <div className="grid-price">
                      <span className="money">$875.00</span>
                    </div>
                  </div>
                  <ul className="stars">
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                    <li><a href="#"><span className="fa fa-star-o" aria-hidden="true"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- //ab --> */}

      <Testimonials />
      <PopularProducts />
      <Brands />
    </div>
  )
}
