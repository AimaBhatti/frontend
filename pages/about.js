import React from 'react'
import Content from '../components/Content'
import Newsletter from '../components/Newsletter'
import Link from 'next/link'
import Head from 'next/head'

export default function about() {
    return (
        <>
            <Head>
                <title>Baggage | About</title>
            </Head>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">About Us</li>
            </ol>

            <div className="row grids-wthree-info">
                <div className="col-lg-6 bag-img">
                    <img src="images/bag1.png" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 ab-info-con ab-inf-page text-left">
                    <h4>About Our Baggage</h4>
                    <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                    <a href="/single" className="btn shop mt-4">Read More</a>
                </div>
            </div>
            <Content />
            <Newsletter />
        </>
    )
}
