import React from 'react'

export default function PopularProducts() {
    return (
        <section className="about py-5">
            <div className="container pb-lg-3">
                <h3 className="tittle text-center">Popular Products</h3>
                <div className="row">
                    <div className="col-md-6 latest-left">
                        <div className="product-shoe-info shoe text-center">
                            <img src="images/img1.jpg" className="img-fluid" alt="" />
                                <div className="shop-now"><a href="shop.html" className="btn">Shop Now</a></div>
                        </div>
                    </div>
                    <div className="col-md-6 latest-right">
                        <div className="row latest-grids">
                            <div className="latest-grid1 product-men col-12">
                                <div className="product-shoe-info shoe text-center">
                                    <div className="men-thumb-item">
                                        <img src="images/img2.jpg" className="img-fluid" alt="" />
                                            <div className="shop-now"><a href="shop.html" className="btn">Shop Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="latest-grid2 product-men col-12 mt-lg-4">
                                <div className="product-shoe-info shoe text-center">
                                    <div className="men-thumb-item">
                                        <img src="images/img3.jpg" className="img-fluid" alt="" />
                                            <div className="shop-now"><a href="shop.html" className="btn">Shop Now</a></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
