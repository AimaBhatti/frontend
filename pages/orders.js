import React from "react";
import Head from "next/head";
import Link from "next/link";
import { fetcher } from "../lib/api";
import { getTokenFromServerCookie, getNameFromServerCookie } from "../lib/auth";

export async function getServerSideProps({ req }) {
  const name = getNameFromServerCookie(req);
  const jwt = getTokenFromServerCookie(req);
  const Orders = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/orders?filters[username]=${name}`, {
    headers: {
      authorization: `Bearer ${jwt}`,
    },
  });

  return {
    props: { Orders },
  };
}

export default function orders({ Orders }) {
  return (
    <>
      <Head>
        <title>Baggage | My Orders</title>
      </Head>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Order History</li>
      </ol>

      <div className="card">
        <table className="table table-hover">
          {/* add no order condition */}
          <thead className="thead-dark">
            <tr>
              <th scope="col">Order Id</th>
              <th scope="col">Bill</th>
              <th scope="col">Status</th>
              <th scope="col">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {Orders &&
              Orders.data.map((Order) => {
                return (
                  <tr key={Order.id}>
                    <th scope="row">{Order.id}</th>
                    <td>{Order.attributes.grand_total}</td>
                    <td>{Order.attributes.status}</td>
                    <td>{Order.attributes.pay_type}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
