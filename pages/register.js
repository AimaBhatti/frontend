import React from "react";
import { useState } from "react";
import { setToken } from "../lib/auth";
import { fetcher } from "../lib/api";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    contact: "",
    address: "",
    area: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseData = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
            gender: data.gender,
            contact: data.contact,
            address: data.address,
            area: data.area,
            city: data.city,
            state: data.state,
            country: data.country,
          }),
        }
      );
      const emailRes = await fetcher(`http://localhost:1337/api/emails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // username: data.username,
          email: data.email,
          // password: data.password,
          // gender: data.gender,
          // contact: data.contact,
          // address: data.address,
          // area: data.area,
          // city: data.city,
          // state: data.state,
          // country: data.country,
        }),
      });
      console.log(emailRes);
      setToken(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="banner-bottom py-5">
      <div className="container">
        <div className="content-grid">
          <div className="text-center icon">
            <span className="fa fa-user-circle-o fa-2x"></span>
          </div>
          <div className="content-bottom">
            <form onSubmit={handleSubmit}>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Gender</label>
                  <select
                    name="gender"
                    type="text"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="labels">Mobile Number</label>
                  <input
                    name="contact"
                    type="number"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-8">
                  <label className="labels">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-8">
                  <label className="labels">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Area</label>
                  <input
                    name="area"
                    type="text"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">City</label>
                  <input
                    name="city"
                    type="text"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State</label>
                  <input
                    name="state"
                    type="text"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    name="country"
                    type="text"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
