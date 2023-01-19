import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>Baggage | About</title>
      </Head>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">About</li>
      </ol>

      {/* <div className="row grids-wthree-info">
                <div className="col-lg-6 bag-img mt-4">
                    <Image src="/images/bag1.png" width="600" height="500" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 ab-info-con ab-inf-page text-left">
                    <h4>About Our Baggage</h4>
                    <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                    <Link href="/single"><a className="btn shop mt-4">Read More</a></Link>
                </div>
            </div> */}
      <section className="banner-bottom py-5">
        <div className="container py-md-5">
          <h3 className="title-wthree mb-lg-5 mb-4 text-center text-danger">
            About Us
          </h3>

          <div>
            <h5 className="text-secondary">About US</h5>
            <p>
              Baggage is an online shopping store which is successfully
              manufacturing and exporting leather products since 2022.
            </p>
            <p>
              We at Baggage are putting our utmost efforts in providing you
              high-quality and environmentally friendly leather products.
            </p>
            <p>
              Our goal is to provide quality bags of innovative and sustainable
              materials such as Vegan leather. It is a type of leather made from
              pineapple leaves, recycled plastic, apple peels and other fruit
              waste.
            </p>
            <p>
              Welcome to Baggage and shop for stylish handbags designed with
              beautiful attractive colors and styles.
            </p>

            <h5 className="text-secondary">
              Baggage; One of the Trustworthy Emerging brand of Pakistan
            </h5>
            <p>
              At Baggage, you will always find something exceptional and
              extraordinary. We have launched many different magnificent designs
              with mesmerizing colors. The collections at Baggage always has
              something for every woman, regardless of her age and size. Each
              style is available in such bright, vibrant, and sober colors that
              you cannot help to take your eyes off.
            </p>
            <p>
              We make sure to deliver a premium product at your doorstep,
              eliminating the hassle of outdoor shopping. Before dispatch or
              shipping, each handbag is carefully checked and examined by the
              logistics team. This process ensures that the product to be
              dispatched is free of fault and is packed in an appropriate way to
              reach the customer securely.
            </p>

            <h5 className="text-secondary">
              Frequently Asked Questions ( FAQ's)
            </h5>
            <p className="text-danger">
              Q. Do I need to open an account in order to shop and place and
              order?
            </p>
            <p>
              A. Yes, you need to open an account in order to shop and place and
              order.
            </p>
            <p className="text-danger">Q. How do I place an order?</p>
            <p>
              A. Shop for the items you want and add it to your shopping cart.
              When you have finished, you can proceed to your shopping cart and
              check out. Check and ensure that all information is correct before
              confirming your purchases and payment.
            </p>
            <p className="text-danger">
              Q. I am facing problems adding items to my shopping cart.
            </p>
            <p>
              A. You will be able to add the items as long as they are available
              and in stock. There could be an instance where the item is in
              someone else’s shopping cart, hence the status of the items is
              reflected as “Temporarily Unavailable”.
            </p>
            <p className="text-danger">Q. How do I pay for my orders?</p>
            <p>A. We accept payments via COD</p>
          </div>
        </div>
      </section>
    </>
  );
}
