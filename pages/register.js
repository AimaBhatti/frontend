import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { setToken } from '../lib/auth';
import { fetcher } from '../lib/api';

export default function register() {

    const router = useRouter();

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
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
                    }),
                }
            );

            setToken(responseData);
            router.redirect('/profile');
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
                        <span className="fa fa-user-circle-o"></span>
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
                            <div className="content-input-field">
                                <button type="submit" className="btn">Sign Up</button>
                            </div>
                            <div className="list-login-bottom text-center mt-lg-5 mt-4">
                                <Link href="#"><a className="">By clicking Signup, I agree to your terms</a></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
