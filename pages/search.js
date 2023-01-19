import React, { useState } from "react";
import Head from "next/head";
import { fetcher } from "../lib/api";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getServerSideProps({ query }) {
  const searchQuery = query.query || "";

  const queryFilter =
    searchQuery && searchQuery !== "all"
      ? {
          name: {
            $regex: searchQuery,
            $options: "i",
          },
        }
      : {};

  const products = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?filters[name][$contains]=${searchQuery}&populate=*`
  );

  return {
    props: {
      products,
    },
  };
}
// categories,
export default function search({ products, addToCart }) {
  const router = useRouter();
  const { query = "all" } = router.query; 
  const [searchError, setSearchError] = useState("");

  const filterSearch = ({ searchQuery }) => {
    const { query } = router;

    if (searchQuery) {
      query.searchQuery = searchQuery;
    }

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  return (
    <>
      <Head>
        <title>Baggage | Search</title>
      </Head>

      <div title="search">
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="container py-5">
            <div className="mb-2 flex items-center justify-between border-b-2 pb-2">
              <div className="flex items-center">
                {products.meta.pagination.total === 0 ? "No" : ""} Results Found For
                {query !== "all" && query !== "" && " : " + query}
                &nbsp;
                {query !== "all" && query !== "" ? (
                  <button className="closebtn" onClick={() => router.push("/search")}>
                    <a className="closebtn">
                      <span className="fa fa-times-circle"></span>
                    </a>
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="container py-5">
            <div className="row shop-wthree-info text-center">
              {products.data.map((product) => {
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
                          <Link href="/single">
                            <a>{product.attributes.name}</a>
                          </Link>
                        </h4>
                        <div className="product_price">
                          <div className="grid-price">
                            <span className="money">
                              ${product.attributes.price}
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
        </div>
      </div>
    </>
  );
}
