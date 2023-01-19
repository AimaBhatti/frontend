import React from "react";
import Head from "next/head";
import Link from "next/link";

const policy = () => {
  return (
    <div>
      <Head>
        <title>Baggage | Privacy Policy</title>
      </Head>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Privacy Policy</li>
      </ol>

      <section className="banner-bottom py-5">
        <div className="container py-md-5">
          <h3 className="title-wthree mb-lg-5 mb-4 text-center text-danger">
            Privacy Policy
          </h3>
          <div>
            <p>We take your security extremely seriously.</p>
            <p> We will not sell your details to third party organizations. </p>
            <p>
              No personal data about customers will be passed to any third
              party, except to fulfil the delivery of the goods to you, and as
              is necessary to process credit or debit card payments.
            </p>
            <p>
              If you would like to: access, correct, amend or delete any
              personal information we have about you, register a complaint, or
              simply want more information, email us at{" "}
              <Link href="mailto:baggage820@gmail.com">
                <span className="text-danger pointer">baggage820@gmail.com</span>
              </Link>{" "}
              or contact us:{" "}
              <span className="text-danger">021-111-222-333</span>
            </p>
            <p>
              Under certain circumstances we will not be obliged to disclose the
              requested information in which case we will explain the reasons
              for refusing.
            </p>
            <p>
              We may use your e-mail address to provide you with information on
              products, services and special offers. You may unsubscribe at any
              time.
            </p>
            <p>
              Any personal information held or processed will be kept up-to-date
              and will be destroyed as soon as the reason for its collection or
              processing has lapsed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default policy;
