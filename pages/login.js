import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { fetcher } from '../lib/api';
import { setToken } from '../lib/auth';

export default function login() {

    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const responseData = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                }),
            }
        );
        setToken(responseData);
    };


    return (
        <section className="banner-bottom py-5">
            <div className="container">
                <div className="content-grid">
                    <div className="text-center icon">
                        <span className="fa fa-unlock-alt"></span>
                    </div>
                    <div className="content-bottom">
                        <form onSubmit={handleSubmit}>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="username" id="text1" type="text" placeholder="Username" required="" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="content-input-field">
                                    <input name="password" id="myInput" type="Password" placeholder="Password" required="" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="content-input-field">
                                <button type="submit" className="btn">Sign In</button>
                            </div>
                            <ul className="list-login">
                                <li className="switch-slide">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                        keep Logged in
                                    </label>
                                </li>
                                <li>
                                    <Link href="#"><a className="text-right">Forgot password?</a></Link>
                                </li>
                                <li className="clearfix"></li>
                            </ul>
                            <ul className="list-login-bottom">
                                <li className="">
                                    <Link href="/register"><a className="">Don&#39;t have an Account?</a></Link>
                                </li>
                                <li className="">
                                    <Link href="#"><a className="text-right">Need Help?</a></Link>
                                </li>
                                <li className="clearfix"></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
