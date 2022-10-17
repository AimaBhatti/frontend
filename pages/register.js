import React from 'react'

export default function register() {
  return (
    <section className="banner-bottom py-5">
        <div className="container">
            <div className="content-grid">
                <div className="text-center icon">
                    <span className="fa fa-user-circle-o"></span>
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
                                <input name="text1" id="text1" type="email" placeholder="User Email" required="" />
                            </div>
                        </div>
                        <div className="field-group">

                            <div className="content-input-field">
                                <input name="text1" id="text3" type="text" placeholder="UserPhone" required="" />
                            </div>
                        </div>
                        <div className="field-group">
                            <div className="content-input-field">
                                <input name="password" id="myInput" type="Password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="content-input-field">
                            <button type="submit" className="btn">Sign Up</button>
                        </div>
                        <div className="list-login-bottom text-center mt-lg-5 mt-4">

                            <a href="#" className="">By clicking Signup, I agree to your terms</a>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
