import React from 'react'
import Head from "next/head";
import Link from "next/link";

const refunds = () => {
  return (
    <div>
      <Head>
        <title>Baggage | Returns & Refunds</title>
      </Head>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Returns & Refunds</li>
      </ol>

      <section className="banner-bottom py-5">
        <div className="container py-md-5">
          <h3 className="title-wthree mb-lg-5 mb-4 text-center text-danger">
            Returns & Refunds
          </h3>
          <div>
            <h5 className='text-secondary'>Returns & Replacements</h5>
            <p>
              We hope you will be very happy with your product but
              if, for any reason, you are not completely satisfied, you may
              return it to us within 30 days. We will refund you for the cost of
              the product. To qualify for a refund you must return the item
              unused and in its original packaging, with your receipt. Your
              statutory rights are unaffected.
            </p>
            <h5 className='text-secondary'>Ordering</h5>
            <p>
              To order a product you will need to follow the ordering procedures
              set out on our order page. Baggage is entitled to refuse any
              order placed by you. Your order is an offer to buy from us.
              Nothing that we do or say will amount to any acceptance of that
              offer until we actually dispatch an item to you, at which point a
              contract will be made between us. At any point up until then we
              may decline to supply an item to you, If we decline to supply an
              item to you and you have already paid for it, we will give you a
              full refund of any amount already paid for that item in accordance
              with our refund policy. An order will be fulfilled within 9-10 days.
            </p>
            <h5 className='text-secondary'>Shipping & Delivery</h5>
            <p>
              We don't deliver internationally. We currently use Swyft courier service to
              deliver the products to your door. You have
              any questions about your delivery, please get in touch with us on 
              <Link href="mailto:baggage820@gmail.com"><span className='text-danger pointer'> baggage820@gmail.com</span></Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default refunds