import React from 'react'

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
                                <a href="#" className="text-right">Forgot password?</a>
                            </li>
                            <li className="clearfix"></li>
                        </ul>
                        <ul className="list-login-bottom">
                            <li className="">
                                <a href="register.html" className="">Don't have an Account?</a>
                            </li>
                            <li className="">
                                <a href="#" className="text-right">Need Help?</a>
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
