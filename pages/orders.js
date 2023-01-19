import React from "react";
import Head from "next/head";
import Link from "next/link";
import { fetcher } from "../lib/api";
import { getTokenFromServerCookie, getNameFromServerCookie } from "../lib/auth";
import { useUser } from "../lib/authContext";

export async function getServerSideProps({ req }) {
  const name = getNameFromServerCookie(req);
  const jwt = getTokenFromServerCookie(req);
  const Orders = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/orders?filters[username][$eq]=${name}`,
    {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    }
  );

  return {
    props: { Orders },
  };
}

export default function orders({ Orders }) {
  const { user, loading } = useUser();

  return (
    <>
      {!loading && !user.id ? (
        <>
          <Head>
            <title>Baggage | Page Not Found</title>
          </Head>

          <div className="next-error">
            <div className="next-error-div">
              <h1 className="next-error-h1">404</h1>
              <div className="next-error-h2-div">
                <h2 className="next-error-h2">This page could not be found.</h2>
              </div>
            </div>
          </div>
        </>
      ) : (
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

          {!Orders.results.length > 0 ? (
            <div className="card mycard">No Order History!</div>
          ) : (
            <>
              <div className="card mycard">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Order Id</th>
                      <th scope="col">Bill</th>
                      <th scope="col">Status</th>
                      <th scope="col">Payment Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Orders.results?.map((Order) => {
                      return (
                        <tr key={Order.id}>
                          <th scope="row">{Order.id}</th>
                          <td>{Order?.grand_total}</td>
                          <td>
                            {Order?.status === "In Process" && (
                              <span className="text-primary">
                                {Order?.status}
                              </span>
                            )}
                            {Order?.status === "Shipped" && (
                              <span className="text-warning">
                                {Order?.status}
                              </span>
                            )}
                            {Order?.status === "Completed" && (
                              <span className="text-success">
                                {Order?.status}
                              </span>
                            )}
                            {Order?.status === "Cancelled" && (
                              <span className="text-danger">
                                {Order?.status}
                              </span>
                            )}
                          </td>
                          <td>{Order?.pay_type}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
