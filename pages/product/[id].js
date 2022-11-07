import React from "react";
import Link from "next/link";
import Head from "next/head";
import Newsletter from "../../components/Newsletter";
import { useRouter } from "next/router";
import { fetcher } from "../../lib/api";

export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      "Bearer 51441d40d17b28f43a959d86d49bd10a39d71cbc573d9ef61f2d41b9fe5298d3883b35c7a714fc7ccc22b915cc78d1d90b44d82ffbdb62d2473ea8546b973f156d7ef77494964064ea7ad276317402295408715b8151fac099f924d1aa9285827c64d1817838c9d64cf8ace775e26599109ee474e025230605b8f676a7b37498",
  };
  let product = await fetcher(
    `http://localhost:1337/api/products?filters[p_Id]=` +
      context.query.id +
      `&populate=*`,
    { headers: headers }
  );
  return {
    props: { product: product.data[0] },
  };
}

export default function Id({ product, cart, addToCart, delFromCart }) {

  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Bagagge | Single</title>
      </Head>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Product</li>
      </ol>

      <section className="banner-bottom py-5">
        <div className="container py-md-5">
          {/* <!-- product right --> */}
          <div className="left-ads-display wthree">
            <div className="row">
              <div className="desc1-left col-md-6">
                <img
                  src={`http://localhost:1337${product.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                  className="img-fluid offset-3"
                  alt=""
                />
              </div>
              <div className="desc1-right col-md-6 pl-lg-3">
                <h3>
                  {product.attributes.product_category.data.attributes.name}
                </h3>
                <h1>{product.attributes.name}</h1>
                <span className="price">
                  Price ${product.attributes.discounted_price}
                </span>
                <span className="discprice">
                  <del>${product.attributes.price}</del>
                </span>
                <p>{product.attributes.description}</p>
                <div className="row mt-4 ml-0">Quantity
                  <span
                    onClick={() => {
                      delFromCart(
                        id,
                        1,
                        product.attributes.price,
                        product.attributes.name,
                        product.attributes.description,
                        product.attributes?.images?.data?.attributes?.formats?.thumbnail?.url
                      );
                    }}
                    className="fa fa-minus-circle offset-1 mt-1"
                  ></span>
                  <div className="mx-2"></div>   
                  {/* ------------------------------------ */}
                  <span
                    onClick={() => {
                      addToCart(
                        id,
                        1,
                        product.attributes.price,
                        product.attributes.name,
                        product.attributes.description,
                        product.attributes?.images?.data?.attributes?.formats?.thumbnail?.url
                      );
                    }}
                    className="fa fa-plus-circle mt-1"
                  ></span>
                </div>
                <div className="share-desc mt-5">
                  <div className="share text-left">
                    <button
                      onClick={() => {
                        addToCart(
                          id,
                          1,
                          product.attributes.price,
                          product.attributes.name,
                          product.attributes.description,
                          product.attributes?.images?.data?.attributes?.formats?.thumbnail?.url
                        )
                      }}
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="row sub-para-w3pvt my-5">
              <h3 className="shop-sing">Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elPellentesque vehicula augue eget nisl ullamcorper, molestie
                blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco. labore et dolore magna aliqua.
              </p>
            </div>

            {/* <!--/row--> */}
            {/* <h3 className="title-wthree-single my-lg-5 my-4 text-left">
              Featured Bags
            </h3>
            <div className="row shop-wthree-info text-center">
              <div className="col-md-3 shop-info-grid text-center mt-4">
                <div className="product-shoe-info shoe">
                  <div className="men-thumb-item">
                    <Image
                      src="/images/b1.jpg"
                      width={300}
                      height={300}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <Link href="/single">
                        <a>Messenger Bag </a>
                      </Link>
                    </h4>

                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">
                          <span className="line">$799</span> $675.00
                        </span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 shop-info-grid text-center mt-4">
                <div className="product-shoe-info shoe">
                  <div className="men-thumb-item">
                    <Image
                      src="/images/b2.jpg"
                      width={300}
                      height={300}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <Link href="/single">
                        <a>Shoulder Bag (Pink) </a>
                      </Link>
                    </h4>

                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">
                          <span className="line">$799</span> $675.00
                        </span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 shop-info-grid text-center mt-4">
                <div className="product-shoe-info shoe">
                  <div className="men-thumb-item">
                    <Image
                      src="/images/b3.jpg"
                      width={300}
                      height={300}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <Link href="/single">
                        <a>Sling Bag </a>
                      </Link>
                    </h4>

                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">
                          <span className="line">$599</span> $475.00
                        </span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 shop-info-grid text-center mt-4">
                <div className="product-shoe-info shoe">
                  <div className="men-thumb-item">
                    <Image
                      src="/images/b4.jpg"
                      width={300}
                      height={300}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="item-info-product">
                    <h4>
                      <Link href="/single">
                        <a>Tote (Blue) </a>
                      </Link>
                    </h4>

                    <div className="product_price">
                      <div className="grid-price">
                        <span className="money">
                          <span className="line">$799</span> $675.00
                        </span>
                      </div>
                    </div>
                    <ul className="stars">
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-half-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <span
                              className="fa fa-star-o"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <!--//row--> */}
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
}
