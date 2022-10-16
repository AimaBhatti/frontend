import React from 'react'

export default function Testimonials() {
  return (
    <section className="testimonials py-5">
        <div className="container">
            <div className="test-info text-center">
                <h3 className="my-md-2 my-3">Jenifer Burns</h3>

                <ul className="list-unstyled w3layouts-icons clients">
                    <li>
                        <a href="#">
                            <span className="fa fa-star"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fa fa-star"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fa fa-star"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fa fa-star-half-o"></span>
                        </a>
                    </li>
                </ul>
                <p><span className="fa fa-quote-left"></span> Lorem Ipsum has been the industry&#39;s standard since the 1500s. Praesent ullamcorper dui turpis.Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. <span className="fa fa-quote-right"></span></p>

            </div>
        </div>
    </section>
  )
}
