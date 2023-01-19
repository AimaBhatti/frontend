import Head from "next/head";
import React from "react";
import Link from "next/link";
import { fetcher } from "../lib/api";
import { getTokenFromServerCookie } from "../lib/auth";
import { useUser } from "../lib/authContext";

export async function getServerSideProps({ req }) {
  const jwt = getTokenFromServerCookie(req);
  // const id = getIdFromServerCookie(req);
  let headers = { Authorization: `Bearer ${jwt}` };
  let userResponse = await fetcher(`http://localhost:1337/api/users/me`, {
    headers: headers,
  });
  return {
    props: { userResponse },
  };
}

export default function profile({ userResponse }) {
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
            <title>Baggage | Profile</title>
          </Head>

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Profile</li>
          </ol>

          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-5 offset-3">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="text-right">Profile</h2>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userResponse.username}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Gender</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userResponse.gender}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Mobile Number</label>
                      <input
                        type="number"
                        className="form-control"
                        value={userResponse.contact}
                        disabled
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={userResponse.email}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userResponse.address}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Area</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userResponse.area}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">City</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userResponse.city}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">State</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userResponse.state}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userResponse.country}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="mt-5 text-center">
                    <Link href="/setProfile">
                      <button
                        className="btn btn-primary profile-button"
                        type="button"
                      >
                        Update Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
