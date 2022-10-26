import Head from 'next/head'
import React from 'react'
import Link from 'next/link';;
import { getTokenFromServerCookie } from '../lib/auth';
// import Image from 'next/image'

export async function getServerSideProps({ req }) {
  const jwt = getTokenFromServerCookie(req);
  let headers = { Authorization: `Bearer ${jwt}` }
  let userResponse = await fetch(`http://localhost:1337/api/users/me`, { headers: headers });
  let user = await userResponse.json()
  return {
    props: { user },
  };
}

export default function profile({ user }) {
  return (
    <>
      <Head>
        <title>Baggage | Profile</title>
      </Head>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-5">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">Profile</h2>
              </div>

                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input type="text" className="form-control" value={user.username} disabled />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Gender</label>
                    <input type="text" className="form-control" value={user.gender} disabled />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Mobile Number</label>
                    <input type="tel" className="form-control" value={user.contact} disabled />
                  </div>
                  <div className="col-md-9">
                    <label className="labels">Email</label>
                    <input type="email" className="form-control" value={user.email} disabled />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Address</label>
                    <input type="text" className="form-control" value={user.address} disabled />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Area</label>
                    <input type="text" className="form-control" value={user.area} disabled />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">City</label>
                    <input type="text" className="form-control" value={user.city} disabled />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State</label>
                    <input type="text" className="form-control" value={user.state} disabled />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input type="text" className="form-control" value={user.country} disabled />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <Link href='/setProfile'><button className="btn btn-primary profile-button" type="button">Update Profile</button></Link>
                  <button className="btn btn-primary profile-button" type="button">Reset Password</button>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
