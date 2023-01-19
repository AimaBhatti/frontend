import React from "react";
import Link from "next/link";
import Head from "next/head";
import { fetcher } from "../lib/api";

export async function getServerSideProps() {
  let totebags = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?filters[product_category][c_Id][$eq]=Tote&populate=*`
  );
  let handbags = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?filters[product_category][c_Id][$eq]=HB&populate=*`
  );
  let crossbodybags = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?filters[product_category][c_Id][$eq]=CB&populate=*`
  );
  let laptopbags = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?filters[product_category][c_Id][$eq]=LP&populate=*`
  );
  let clutches = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?filters[product_category][c_Id][$eq]=Clutch&populate=*`
  );
  let backpacks = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?filters[product_category][c_Id][$eq]=BP&populate=*`
  );

  return {
    props: {
      totebags,
      handbags,
      crossbodybags,
      laptopbags,
      clutches,
      backpacks,
    },
  };
}

export default function shop({
  totebags,
  handbags,
  crossbodybags,
  laptopbags,
  clutches,
  backpacks,
  addToCart,
}) {
  return (
    <div>
      <Head>
        <title>Baggage | Shop</title>
      </Head>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Collections</li>
      </ol>

      <section className="banner-bottom py-5">
        <div className="container py-5">
          {/* {categories &&
            categories.data.map((category) => (
              <div key={category.attributes.c_Id}>
                <h3 className="title-wthree mb-lg-5 mb-4 mt-lg-5 text-center">
                  {category.attributes.name}
                </h3>
                <div className="row shop-wthree-info text-center">
                  {category.attributes.products.data.map((product) => {
                    return (
                      <div
                        key={product.attributes.p_Id}
                        className="col-lg-3 shop-info-grid text-center mt-4"
                      >
                        <div className="product-shoe-info shoe">
                          <div className="men-thumb-item">
                            <Link href={`/product/${product.attributes.p_Id}`}>
                              <a>
                                <img
                                  src={`${product.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                                  width={250}
                                  height={250}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="item-info-product">
                            <h4>
                              <Link href={`/product/${product.attributes.p_Id}`}>
                                <a>{product.attributes.name}</a>
                              </Link>
                            </h4>
                            <div className="product_price">
                              <div className="grid-price">
                                <span className="price">
                                    {product.attributes.discounted_price} PKR 
                                </span>
                                <span className="discprice">
                                  <del>PKR{product.attributes.price}</del>
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                addToCart(
                                  product.attributes.p_Id,
                                  product.id,
                                  1,
                                  product.attributes.discounted_price,
                                  product.attributes.name,
                                  product.attributes?.images?.data?.attributes
                                    ?.formats?.thumbnail?.url
                                );
                                Swal.fire(
                                  "Thank You",
                                  `You have added 1 item of ${product.attributes.name} to the cart`,
                                  "success"
                                );
                              }}
                              className="btn btn-success mt-1"
                            >
                              Add to Cart{" "}
                              <span
                                className="fa fa-shopping-bag"
                                aria-hidden="true"
                              ></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))} */}
          <div>
            <h3 className="title-wthree mb-lg-5 mb-4 text-center">Tote Bags</h3>
          </div>
          <div className="row shop-wthree-info text-center">
            {totebags &&
              totebags.data.map((totebag) => (
                <div
                  key={totebag.attributes.p_Id}
                  className="col-lg-3 shop-info-grid text-center mt-4"
                >
                  <div className="product-shoe-info shoe">
                    <div className="men-thumb-item">
                      <Link href={`/product/${totebag.attributes.p_Id}`}>
                        <a>
                          <img
                            src={`${totebag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                            width={250}
                            height={250}
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="item-info-product">
                      <h4>
                        <Link href={`/product/${totebag.attributes.p_Id}`}>
                          <a>{totebag.attributes.name}</a>
                        </Link>
                      </h4>
                      <div className="product_price">
                        <div className="grid-price">
                          <span className="price">
                            {totebag.attributes.discounted_price} PKR
                          </span>
                          <span className="discprice">
                            <del>{totebag.attributes.price} PKR</del>
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(
                            totebag.attributes.p_Id,
                            totebag.id,
                            1,
                            totebag.attributes.discounted_price,
                            totebag.attributes.name,
                            totebag.attributes?.images?.data?.attributes
                              ?.formats?.thumbnail?.url
                          );
                          Swal.fire(
                            "Thank You",
                            `You have added 1 item of ${totebag.attributes.name} to the cart`,
                            "success"
                          );
                        }}
                        className="btn btn-success mt-1"
                      >
                        Add to Cart{" "}
                        <span
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-5">
            <h3 className="title-wthree mb-lg-5 mb-4 text-center">Handbags</h3>
          </div>
          <div className="row shop-wthree-info text-center">
            {handbags &&
              handbags.data.map((handbag) => (
                <div
                  key={handbag.attributes.p_Id}
                  className="col-lg-3 shop-info-grid text-center mt-4"
                >
                  <div className="product-shoe-info shoe">
                    <div className="men-thumb-item">
                      <Link href={`/product/${handbag.attributes.p_Id}`}>
                        <a>
                          <img
                            src={`${handbag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                            width={250}
                            height={250}
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="item-info-product">
                      <h4>
                        <Link href={`/product/${handbag.attributes.p_Id}`}>
                          <a>{handbag.attributes.name}</a>
                        </Link>
                      </h4>
                      <div className="product_price">
                        <div className="grid-price">
                          <span className="price">
                            {handbag.attributes.discounted_price} PKR
                          </span>
                          <span className="discprice">
                            <del>{handbag.attributes.price} PKR</del>
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(
                            handbag.attributes.p_Id,
                            handbag.id,
                            1,
                            handbag.attributes.discounted_price,
                            handbag.attributes.name,
                            handbag.attributes?.images?.data?.attributes
                              ?.formats?.thumbnail?.url
                          );
                          Swal.fire(
                            "Thank You",
                            `You have added 1 item of ${handbag.attributes.name} to the cart`,
                            "success"
                          );
                        }}
                        className="btn btn-success mt-1"
                      >
                        Add to Cart{" "}
                        <span
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-5">
            <h3 className="title-wthree mb-lg-5 mb-4 text-center">
              CrossBody Bags
            </h3>
          </div>
          <div className="row shop-wthree-info text-center">
            {crossbodybags &&
              crossbodybags.data.map((crossbodybag) => (
                <div
                  key={crossbodybag.attributes.p_Id}
                  className="col-lg-3 shop-info-grid text-center mt-4"
                >
                  <div className="product-shoe-info shoe">
                    <div className="men-thumb-item">
                      <Link href={`/product/${crossbodybag.attributes.p_Id}`}>
                        <a>
                          <img
                            src={`${crossbodybag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                            width={250}
                            height={250}
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="item-info-product">
                      <h4>
                        <Link href={`/product/${crossbodybag.attributes.p_Id}`}>
                          <a>{crossbodybag.attributes.name}</a>
                        </Link>
                      </h4>
                      <div className="product_price">
                        <div className="grid-price">
                          <span className="price">
                            {crossbodybag.attributes.discounted_price} PKR
                          </span>
                          <span className="discprice">
                            <del>{crossbodybag.attributes.price} PKR</del>
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(
                            crossbodybag.attributes.p_Id,
                            crossbodybag.id,
                            1,
                            crossbodybag.attributes.discounted_price,
                            crossbodybag.attributes.name,
                            crossbodybag.attributes?.images?.data?.attributes
                              ?.formats?.thumbnail?.url
                          );
                          Swal.fire(
                            "Thank You",
                            `You have added 1 item of ${crossbodybag.attributes.name} to the cart`,
                            "success"
                          );
                        }}
                        className="btn btn-success mt-1"
                      >
                        Add to Cart{" "}
                        <span
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-5">
            <h3 className="title-wthree mb-lg-5 mb-4 text-center">Clutches</h3>
          </div>
          <div className="row shop-wthree-info text-center">
            {clutches &&
              clutches.data.map((clutch) => (
                <div
                  key={clutch.attributes.p_Id}
                  className="col-lg-3 shop-info-grid text-center mt-4"
                >
                  <div className="product-shoe-info shoe">
                    <div className="men-thumb-item">
                      <Link href={`/product/${clutch.attributes.p_Id}`}>
                        <a>
                          <img
                            src={`${clutch.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                            width={250}
                            height={250}
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="item-info-product">
                      <h4>
                        <Link href={`/product/${clutch.attributes.p_Id}`}>
                          <a>{clutch.attributes.name}</a>
                        </Link>
                      </h4>
                      <div className="product_price">
                        <div className="grid-price">
                          <span className="price">
                            {clutch.attributes.discounted_price} PKR
                          </span>
                          <span className="discprice">
                            <del>{clutch.attributes.price} PKR</del>
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(
                            clutch.attributes.p_Id,
                            clutch.id,
                            1,
                            clutch.attributes.discounted_price,
                            clutch.attributes.name,
                            clutch.attributes?.images?.data?.attributes?.formats
                              ?.thumbnail?.url
                          );
                          Swal.fire(
                            "Thank You",
                            `You have added 1 item of ${clutch.attributes.name} to the cart`,
                            "success"
                          );
                        }}
                        className="btn btn-success mt-1"
                      >
                        Add to Cart{" "}
                        <span
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-5">
            <h3 className="title-wthree mb-lg-5 mb-4 text-center">Backpacks</h3>
          </div>
          <div className="row shop-wthree-info text-center">
            {backpacks &&
              backpacks.data.map((backpack) => (
                <div
                  key={backpack.attributes.p_Id}
                  className="col-lg-3 shop-info-grid text-center mt-4"
                >
                  <div className="product-shoe-info shoe">
                    <div className="men-thumb-item">
                      <Link href={`/product/${backpack.attributes.p_Id}`}>
                        <a>
                          <img
                            src={`${backpack.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                            width={250}
                            height={250}
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="item-info-product">
                      <h4>
                        <Link href={`/product/${backpack.attributes.p_Id}`}>
                          <a>{backpack.attributes.name}</a>
                        </Link>
                      </h4>
                      <div className="product_price">
                        <div className="grid-price">
                          <span className="price">
                            {backpack.attributes.discounted_price} PKR
                          </span>
                          <span className="discprice">
                            <del>{backpack.attributes.price} PKR</del>
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(
                            backpack.attributes.p_Id,
                            backpack.id,
                            1,
                            backpack.attributes.discounted_price,
                            backpack.attributes.name,
                            backpack.attributes?.images?.data?.attributes
                              ?.formats?.thumbnail?.url
                          );
                          Swal.fire(
                            "Thank You",
                            `You have added 1 item of ${backpack.attributes.name} to the cart`,
                            "success"
                          );
                        }}
                        className="btn btn-success mt-1"
                      >
                        Add to Cart{" "}
                        <span
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-5">
            <h3 className="title-wthree mb-lg-5 mb-4 text-center">
              Laptop Bags
            </h3>
          </div>
          <div className="row shop-wthree-info text-center">
            {laptopbags &&
              laptopbags.data.map((laptopbag) => (
                <div
                  key={laptopbag.attributes.p_Id}
                  className="col-lg-3 shop-info-grid text-center mt-4"
                >
                  <div className="product-shoe-info shoe">
                    <div className="men-thumb-item">
                      <Link href={`/product/${laptopbag.attributes.p_Id}`}>
                        <a>
                          <img
                            src={`${laptopbag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                            width={250}
                            height={250}
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="item-info-product">
                      <h4>
                        <Link href={`/product/${laptopbag.attributes.p_Id}`}>
                          <a>{laptopbag.attributes.name}</a>
                        </Link>
                      </h4>
                      <div className="product_price">
                        <div className="grid-price">
                          <span className="price">
                            {laptopbag.attributes.discounted_price} PKR PKR
                          </span>
                          <span className="discprice">
                            <del>{laptopbag.attributes.price} PKR</del>
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(
                            laptopbag.attributes.p_Id,
                            laptopbag.id,
                            1,
                            laptopbag.attributes.discounted_price,
                            laptopbag.attributes.name,
                            laptopbag.attributes?.images?.data?.attributes
                              ?.formats?.thumbnail?.url
                          );
                          Swal.fire(
                            "Thank You",
                            `You have added 1 item of ${laptopbag.attributes.name} to the cart`,
                            "success"
                          );
                        }}
                        className="btn btn-success mt-1"
                      >
                        Add to Cart{" "}
                        <span
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
