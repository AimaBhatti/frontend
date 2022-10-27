import React from 'react'
import { useState } from 'react';
import { setToken } from '../lib/auth';
import { fetcher } from '../lib/api';

export default function Register() {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        contact: '',
        address: '',
        area: '',
        city: '',
        state: '',
        country: '',
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
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
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
            const emailRes = await fetcher(
                `http://localhost:1337/api/emails`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
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

                }
            );
            console.log(emailRes)
            setToken(responseData);
        }
        catch (error) {
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
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="username" id="text" type="text" placeholder="Username" required="" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="email" id="email" type="email" placeholder="User Email" required="" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="password" id="myInput" type="Password" placeholder="Password" required="" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <select name="gender" id="gender" type="text" placeholder="Gender" required="" onChange={handleChange}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="contact" id="contact" type="number" placeholder="Contact Number" required="" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="address" id="address" type="text" placeholder="Address" required="" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="area" id="area" type="text" placeholder="Area" required="" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="city" id="city" type="text" placeholder="City" required="" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="state" id="state" type="text" placeholder="State" required="" onChange={handleChange} />
                                </div>
                            </div><div className="field-group">
                                <div className="content-input-field">
                                    <input name="country" id="country" type="text" placeholder="Country" required="" onChange={handleChange} />
                                </div>
                            </div>

                            <div className="content-input-field">
                                <button type="submit" className="btn">Sign Up</button>
                            </div>
                            {/* <div className="list-login-bottom text-center mt-lg-5 mt-4">
                                <Link href="#"><a className="">By clicking Signup, I agree to your terms</a></Link>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
