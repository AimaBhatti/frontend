import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function single() {
    return (
        <div>
            <Head>
                <title>Bootie | Single</title>
            </Head>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Single Page</li>
            </ol>

            <section className="ab-info-main py-md-5">
                <div className="container py-md-3">
                    <h3 className="tittle text-center mb-lg-5 mb-3"> Single Page</h3>
                    <div className="speak px-lg-5">
                        <div className="row mt-lg-5 mt-4">
                            <div className="col-md-12 events-img">
                                <img src="images/single.jpg" className="img-fluid" alt="user-image" />
                            </div>
                            <div className="col-md-12 events-info my-3">
                                <h3><span className="sub-tittle">01</span> Tech beauty</h3>
                                <h4 className="my-3"><a href="#" className="text-dark">VIVAMUS ID TEMPOR FELIS. CRAS SAGITTIS MI SIT AMET</a></h4>
                                <p>Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.</p>
                            </div>
                            <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat..</p>
                            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat..</p>
                        </div>
                        <div className="row my-lg-5 my-3">
                            <div className="col-md-6 text-info">
                                <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor elementum id enim volutpat...</p>
                            </div>
                            <div className="col-md-6 team-img">
                                <img src="images/img6.jpg" className="img-fluid" alt="user-image" />
                            </div>
                        </div>
                        <div className="single-form-left">
                            {/* <!-- contact form grid --> */}
                            <div className="contact-single">
                                <h3><span className="sub-tittle">01</span> Leave a Reply</h3>
                                <form action="#" method="get" className="mt-4">
                                    <div className="form-group">
                                        <label htmlFor="contactcomment">Your Comment *</label>
                                        <textarea className="form-control border" rows="5" id="contactcomment" required=""></textarea>
                                    </div>
                                    <div className="d-sm-flex">
                                        <div className="col-sm-6 form-group p-0">
                                            <label htmlFor="contactusername">Name *</label>
                                            <input type="text" className="form-control border" id="contactusername" required="" />
                                        </div>
                                        <div className="col-sm-6 form-group ml-sm-3">
                                            <label htmlFor="contactemail">Email *</label>
                                            <input type="email" className="form-control border" id="contactemail" required="" />
                                        </div>
                                    </div>
                                    <button type="submit" className="mt-3 btn btn-success btn-block py-3">Post Comment</button>
                                </form>
                            </div>
                            {/* <!--  //contact form grid ends here --> */}
                        </div>
                        <div className="media py-5">
                            <img src="images/te2.jpg" className="mr-3 img-fluid rounded-circle" alt="image" />
                            <div className="media-body">
                                <h5 className="mt-0">Daniel Doe</h5>
                                <p className="mt-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                </p>
                                <div className="media mt-5">
                                    <a className="pr-3" href="#">
                                        <img src="images/te1.jpg" className="img-fluid rounded-circle" alt="image" />
                                    </a>
                                    <div className="media-body">
                                        <h5 className="mt-0">Leia Organa</h5>
                                        <p className="mt-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla..</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}