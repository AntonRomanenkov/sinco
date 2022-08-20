import React, { Fragment } from 'react'

const HeroBannerFour = () => {
    return (
        <Fragment>
            <div className="hero-banner-four">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-xl-7 col-lg-8 col-md-11 m-auto">
                            <a href="pricing.html" className="slogan"><strong>Offer</strong> is going on till friday, $1.99/mo. <i className="fas fa-chevron-right" /></a>
                            <h1 className="hero-heading">Analysis &amp; Deep Machine Learning with ai.</h1>
                            <p className="mb-50 lg-mb-30">Welcome to AI Superior - we are a German based AI Solution provider. </p>
                            <form action="#">
                                <input type="email" placeholder="Your email address" />
                                <button>Request Demo</button>
                            </form>
                            <div className="info">No Credit Card Required.</div>
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="illustration-holder-one">
                    <img src="images/assets/ils_10.svg" alt="" />
                    <img src="images/assets/ils_10_1.svg" alt="" className="shapes shape-one" />
                    <img src="images/assets/ils_10_2.svg" alt="" className="shapes shape-two" />
                </div> {/* /.illustration-holder-one */}
                <div className="illustration-holder-two">
                    <img src="images/assets/ils_11.svg" alt="" />
                    <img src="images/assets/ils_10_1.svg" alt="" className="shapes shape-one" />
                </div> {/* /.illustration-holder-two */}
            </div> 
        </Fragment>
    )
}

export default HeroBannerFour