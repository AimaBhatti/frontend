import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { fetcher } from '../lib/api';
import { getTokenFromServerCookie, getIdFromServerCookie, unsetToken } from '../lib/auth';
// import Image from 'next/image'

export async function getServerSideProps({ req }) {
  const jwt = getTokenFromServerCookie(req);
  // const id = getIdFromServerCookie(req);
  let headers = { Authorization: `Bearer ${jwt}` }
  let user = await fetcher(`http://localhost:1337/api/users/me`, { headers: headers });
  return {
    props: { user },
  };
}

export default function profile({ user  }) {

  // const router = useRouter();

  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   let delData = await fetcher(`http://localhost:1337/api/users/${id}`,
  //     {
  //       method: 'DELETE',
  //       Authorization: 'Bearer 49774043ef536736d5c41810f331d7cff8ae39f2f04455ba7354f63ad72145d49cde05e030b72a828da953e93601f303b048791d6066d41347fc5ae05a1bd75d288e364df7dc0051c1255c3df0e43986c5df3097668595f01e5e88253379f214ec4b7f0a8f3460ba37c90f5353bb1fda81adc541f68b93c853c2face4b881558',
  //     },
  //   );
  //   unsetToken();
  //   // router.push('/');
  // }

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
                <button className="btn btn-primary profile-button" type="submit">Delete Account</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
