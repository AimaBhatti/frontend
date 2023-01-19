import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetcher } from "../../lib/api";

export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      "Bearer 51441d40d17b28f43a959d86d49bd10a39d71cbc573d9ef61f2d41b9fe5298d3883b35c7a714fc7ccc22b915cc78d1d90b44d82ffbdb62d2473ea8546b973f156d7ef77494964064ea7ad276317402295408715b8151fac099f924d1aa9285827c64d1817838c9d64cf8ace775e26599109ee474e025230605b8f676a7b37498",
  };
  let product = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?filters[p_Id]=` +
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
  const [quantity, setQuantity] = useState(1);

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
              <div className="desc1-left col-md-6 mt-0">
                <Image
                  src={`${product.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                  className="img-fluid offset-3"
                  alt={`${product.attributes.name}`}
                  height="250"
                  width="250"
                />
              </div>
              <div className="desc1-right col-md-6 pl-lg-3">
                <h1 className="upcase">{product.attributes.name}</h1>
                <h3 className="text-secondary">
                  Category:{" "}
                  <span className="upcase text-success">
                    {product.attributes.product_category.data.attributes.name}
                  </span>
                </h3>
                <span className="price">
                  Price: {product.attributes.discounted_price} PKR
                </span>
                <span className="discprice">
                  <del>{product.attributes.price} PKR </del>
                </span>
                <p>{product.attributes.description}</p>

                <div className="col m-auto">
                  <div className="row">
                    <span
                      onClick={() => {
                        setQuantity(quantity - 1);
                      }}
                      className="fa fa-minus-circle mt-4"
                    ></span>
                    <span className="mx-2 text-secondary">
                      <label className="mt-4">
                        <h6>{quantity}</h6>
                      </label>
                    </span>
                    <span
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                      className="fa fa-plus-circle mt-4"
                    ></span>
                  </div>
                </div>

                <div className="share-desc mt-5">
                  <div className="share text-left">
                    <button
                      onClick={() => {
                        if (quantity > 0) {
                          addToCart(
                            product.attributes.p_Id,
                            id,
                            quantity,
                            product.attributes.discounted_price,
                            product.attributes.name,
                            product.attributes?.images?.data?.attributes
                              ?.formats?.thumbnail?.url
                          );
                          {
                            quantity == 1
                              ? Swal.fire(
                                  "Thank You",
                                  `You have added ${quantity} item of ${product.attributes.name} to the cart`,
                                  "success"
                                )
                              : Swal.fire(
                                  "Thank You",
                                  `You have added ${quantity} items of ${product.attributes.name} to the cart`,
                                  "success"
                                );
                          }
                        }
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
          </div>
        </div>
      </section>
    </div>
  );
}
