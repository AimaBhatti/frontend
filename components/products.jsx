import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetcher } from '../lib/api';

export async function getServerSideProps(context) {
    let headers={ Authorization:"Bearer 51441d40d17b28f43a959d86d49bd10a39d71cbc573d9ef61f2d41b9fe5298d3883b35c7a714fc7ccc22b915cc78d1d90b44d82ffbdb62d2473ea8546b973f156d7ef77494964064ea7ad276317402295408715b8151fac099f924d1aa9285827c64d1817838c9d64cf8ace775e26599109ee474e025230605b8f676a7b37498"}
    let productsResponse = await fetch("http://localhost:1337/api/products?populate=*",{headers:headers}
        // {
        //     headers: {
        //         Authorization: "Bearer 51441d40d17b28f43a959d86d49bd10a39d71cbc573d9ef61f2d41b9fe5298d3883b35c7a714fc7ccc22b915cc78d1d90b44d82ffbdb62d2473ea8546b973f156d7ef77494964064ea7ad276317402295408715b8151fac099f924d1aa9285827c64d1817838c9d64cf8ace775e26599109ee474e025230605b8f676a7b37498",
        //     },
        // }
    );
    let products = await productsResponse.json()
    console.log(products)
    return {
      
        props: {products: products},
    };
}


const Products = (props) => {
    return (
        <div className='container py-5'>
        <h3 className="title-wthree mb-lg-5 mb-4 text-center">Shop Now</h3>
        <div className="row shop-wthree-info text-center">
            {props.products.data.map((item) => {
                return (
                    <div key={item.attributes.id} className="col-lg-3 shop-info-grid text-center mt-4">
                        <div className="product-shoe-info shoe">
                            <div className="men-thumb-item">
                                <Image src={item.attributes.images.data && item.attributes.images.data.attributes.name}
                                    width={300} height={300} className="img-fluid" alt="" />
                            </div>
                            <div className="item-info-product">
                                <h4>
                                    <Link href="/single"><a>{item.attributes.name}</a></Link>
                                </h4>
                                <div className="product_price">
                                    <div className="grid-price">
                                        <span className="money"><span className="line">$799</span> $675.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
        
    )
};

export default Products;