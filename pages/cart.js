import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function cart({
  cart,
  addToCart,
  delFromCart,
  clearCart,
  subTotal,
  rkey
}) {
  return (
    <>
      <Head>
        <title>Baggage | Shopping Cart</title>
      </Head>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active"> Shopping Cart</li>
      </ol>

      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b className="bold">Shopping Cart</b>
                  </h4>
                </div>
                {/* <div className="col align-self-center text-right text-muted">
                  3 items
                </div> */}
              </div>
            </div>
            {Object.keys(cart).length == 0 && (
              <div className="row">
                <div className="col offset-8">
                  <b className="text-red">Cart is empty!</b>
                </div>
              </div>
            )}
            <ol>
              {Object.keys(cart).map((item) => {
                return (
                  <li key={item}>
                    <div className="row border-top border-bottom">
                      <div className="col">
                        <img
                          width="250px"
                          height="250px"
                          className="img-fluid"
                          src={`http://localhost:1337${cart[item].image}`}
                          alt=""
                        />
                      </div>
                      <div className="col">
                        <div className="row text-bold mt-1">
                          {cart[item].name}
                        </div>
                        <div className="row">{cart[item].description}</div>
                      </div>
                      <div className="col m-auto offset-3">
                        <div className="row">
                          <span
                            onClick={() => {
                              delFromCart(
                                item,
                                1,
                                cart[item].price,
                                cart[item].name,
                                cart[item].description,
                                cart[item].image
                              );
                            }}
                            className="fa fa-minus-circle mt-1 offset-2"
                          ></span>
                          <span className="mx-2">{cart[item].qty}</span>
                          <span
                            onClick={() => {
                              addToCart(
                                item,
                                1,
                                cart[item].price,
                                cart[item].name,
                                cart[item].description,
                                cart[item].image
                              );
                            }}
                            className="fa fa-plus-circle mt-1"
                          ></span>
                        </div>
                      </div>
                      <div className="col my-auto">
                        $ {cart[item].price}</div>
                        <span className="fa fa-close my-auto"></span>
                    </div>
                  </li>
                );
              })}
            </ol>

            <Link href="/shop">
              <div className="back-to-shop">
                <span className="fa fa-arrow-left"></span>
                <span className="text-muted red-hover"> Back to Shop</span>
              </div>
            </Link>
          </div>
          {Object.keys(cart).length != 0 && (
            <div className="col-md-4 summary">
              <div>
                <h5>Summary</h5>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col">SUB TOTAL</div>
                <div className="col text-right">$ {subTotal}</div>
              </div>
              <form id="cart-form">
                <p>SHIPPING</p>
                <select>
                  <option className="text-muted">
                    Standard-Delivery- $ 5.00
                  </option>
                </select>
              </form>
              <div className="row">
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">$ {subTotal + 5}</div>
              </div>
              <div className="content-input-field">
                <Link href="/checkout">
                  <button className="btn">CHECKOUT</button>
                </Link>
                <button onClick={clearCart} className="btn mt-2">
                  CLEAR CART
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
