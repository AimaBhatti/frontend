import Head from 'next/head'
import React from 'react'
import { getIdFromLocalCookie } from '../lib/auth';
// import Image from 'next/image'

export async function getServerSideProps() {
  const id = getIdFromLocalCookie();
  let headers = { Authorization: "Bearer 3b57ec08dcd4b30165eae40345a00a60a9b2a2019e84576e66b7f9d3a855650c54fdc02b11bf4cddd4393d685d78d08df29d4c5de0702dba0b2d134f909f72bc8e6cf81d956831a7c4f8ab2acc9168f00aa8e067c5f9a30f985597cda24f2eb7c1d4beaafce653caf34e1805fc4b63ae31b750995268cef8898fc9ee63e37a3e" }
  let userResponse = await fetch(`http://localhost:1337/api/users/ + ${id}`, { headers: headers });
  let user = await userResponse.json()
  console.log(user)
  return {
    props: { user },
  };
}


export default function profile( {user} ) {
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
                  <input type="text" className="form-control" value={user.username} />
                </div>
                <div className="col-md-6">
                  <label className="labels">Gender</label>
                  <input type="text" className="form-control" value={user.gender} />
                </div>
                <div className="col-md-6">
                  <label className="labels">Mobile Number</label>
                  <input type="tel" className="form-control" value={user.contact} />
                </div>
                <div className="col-md-9">
                  <label className="labels">Email</label>
                  <input type="email" className="form-control" value={user.email} />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input type="text" className="form-control" value={user.address} />
                </div>
                <div className="col-md-6">
                  <label className="labels">Area</label>
                  <input type="text" className="form-control" value={user.area} />
                </div>
                <div className="col-md-6">
                  <label className="labels">City</label>
                  <input type="text" className="form-control" value={user.city} />
                </div>
                <div className="col-md-6">
                  <label className="labels">State</label>
                  <input type="text" className="form-control" value={user.state} />
                </div>
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input type="text" className="form-control" value={user.country} />
                </div>
              </div>

              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="button">Update Profile</button>
                <button className="btn btn-primary profile-button" type="button">Reset Password</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
