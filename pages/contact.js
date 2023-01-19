import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function contact() {
    return (
        <div>
            <Head>
                <title>Baggage | Contact</title>
            </Head>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
            </ol>

            <section className="banner-bottom py-5">
                <div className="container py-md-5">
                    <h3 className="title-wthree mb-lg-5 mb-4 text-center text-danger">Contact Us </h3>
                    <div className="row contact_information">
                        <div className="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                            <div className="mt-5 information-wthree">
                                <h4 className="text-uppercase mb-4"><span className="fa fa-comments"></span> Communication</h4>
                                <p className="cont-wthree-para mb-3 text-capitalize">for general queries, including property Sales and constructions, please email us at <Link href="mailto:baggage820@gmail.com">baggage820@gmail.com</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                            <div className="mt-5 information-wthree">
                                <h4 className="text-uppercase mb-4"><span className="fa fa-life-ring"></span> Technical Support</h4>
                                <p className="cont-wthree-para mb-3 text-capitalize">we are ready to help! if you have any queries or issues, contact us for support <label>021-111-222-333</label>.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                            <div className="mt-5 information-wthree">
                                <h4 className="text-uppercase mb-4"><span className="fa fa-map"></span> Others</h4>
                                <p className="cont-wthree-para mb-3 text-capitalize">we are ready to help! if you have any queries or issues, contact us for support <label>021-111-222-333</label>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
