import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";
import { useEffect, useState } from "react";
import "../public/css/bootstrap.css";
import "../public/css/font-awesome.css";
import "../public/css/style.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const { user, loading } = useFetchUser();

  useEffect(() => {
    return () => {
      console.log("I am useEffect from _app.js");

      try {
        if (localStorage.getItem("cart")) {
          setCart(JSON.parse(localStorage.getItem("cart")));
        }
      } catch (error) {
        console.error(error);
        localStorage.clear();
      }
    };
  }, [])

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [reloadKey, setReloadKey] = useState(1);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subTot=0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subTot = subTot + myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(subTot);
  }

  const addToCart = (item, qty, price, name, description, image) => {
    let newCart = cart
    if (item in cart) {
      newCart[item].qty = cart[item].qty + qty
    } else {
      newCart[item] = { qty: 1, price, name, description, image }
    }
    // for (let index = 0; index < qty; index++) {
    //   newCart.push([item]);
    // }
    console.log(newCart)
    setCart(newCart)
    setReloadKey(Math.random())
    saveCart(newCart)
  }

  const delFromCart = (item, qty, price, name, description, image) => {
    let newCart = cart
    if (item in cart) {
      newCart[item]["qty"] = cart[item].qty - qty;
    }
    if (newCart[item].qty <= 0) {
      delete newCart[item]
    }
    // let index = newCart.indexOf(item);
    // newCart.splice(index);
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  return (
    <Layout
      user={user}
      rkey={reloadKey}
      cart={cart}
      addToCart={addToCart}
      delFromCart={delFromCart}
      clearCart={clearCart}
      subTotal={subTotal}
    >
      <Component
        cart={cart}
        addToCart={addToCart}
        delFromCart={delFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
    </Layout>
  );
}

export default MyApp;
