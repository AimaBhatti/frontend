import Head from "next/head";
import Link from "next/link";
import Content from "../components/Content";
import Newsletter from "../components/Newsletter";
import { fetcher } from "../lib/api";


export async function getServerSideProps() {
  let headers = {
    Authorization:
      "Bearer 51441d40d17b28f43a959d86d49bd10a39d71cbc573d9ef61f2d41b9fe5298d3883b35c7a714fc7ccc22b915cc78d1d90b44d82ffbdb62d2473ea8546b973f156d7ef77494964064ea7ad276317402295408715b8151fac099f924d1aa9285827c64d1817838c9d64cf8ace775e26599109ee474e025230605b8f676a7b37498",
  };
  let products= await fetcher(
    "http://localhost:1337/api/products?populate=*",
    { headers: headers }
  );
  return {
    props: { products },
  };
}

export default function Home({ products, addToCart }) {
  return (
    <div>
      <Head>
        <title>Bagagge | Home</title>
      </Head>
      <div className="container py-5">
        <h3 className="title-wthree mb-lg-5 mb-4 text-center">Shop Now</h3>
        <div className="row shop-wthree-info text-center">
          {products &&
            products.data.map((product) => {
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
                            src={`http://localhost:1337${product.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
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
                          <span className="money">
                            ${product.attributes.price}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(
                            product.attributes.p_Id,
                            1,
                            product.attributes.price,
                            product.attributes.name,
                            product.attributes.description,
                            product.attributes?.images?.data?.attributes?.formats?.thumbnail?.url
                          )
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
      <Content />
      <Newsletter />
    </div>
  );
}
