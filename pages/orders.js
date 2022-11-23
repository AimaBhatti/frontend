import React from "react";
import Head from "next/head";
import Link from "next/link";
import { fetcher } from "../lib/api";
import { getTokenFromServerCookie } from "../lib/auth";

export async function getServerSideProps( req ) {
  const jwt = getTokenFromServerCookie(req);
  const Orders = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/orders`,
  {
    headers: {
      authorization: `Bearer ${jwt}`
    },
  })
  return {
    props: Orders
  };
}

export default function orders( Orders ) {
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
          <thead className="thead-dark">
            <tr>
              {/* <th scope="col">#</th> */}
              {/* <th scope="col">Date</th> */}
              <th scope="col">Status</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Bill</th>
            </tr>
          </thead>
          <tbody>
            {Orders && 
              Orders.data.map((Order) => {
                return (
                  <div key={Order.id}>
                  {/* // <td>{Order.createdAt}</td> */}
                  <td>{Order.status}</td>
                  <td>{Order.pay_type}</td>
                  <td>{Order.grand_total}</td>
                  </div>
                )
              } )}
            {/* <tr> */}
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            {/* </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
