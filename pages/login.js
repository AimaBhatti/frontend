import React from 'react'
import Link from 'next/link'

export default function login() {
  return (
    <section className="banner-bottom py-5">
        <div className="container">
            <div className="content-grid">
                <div className="text-center icon">
                    <span className="fa fa-unlock-alt"></span>
                </div>
                <div className="content-bottom">
                    <form action="#" method="post">
                        <div className="field-group">

                            <div className="content-input-field">
                                <input name="text1" id="text1" type="text" placeholder="User Name" required="" />
                            </div>
                        </div>
                        <div className="field-group">
                            <div className="content-input-field">
                                <input name="password" id="myInput" type="Password" placeholder="Password" />
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
                                <Link href="/register"><a className="">Don't have an Account?</a></Link>
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
