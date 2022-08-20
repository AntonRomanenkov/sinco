import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const HeroBannerOne = () => {
    return (
        <Fragment>
            <div className="hero-banner-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <a href="pricing.html" className="slogan"><strong>Offer</strong> is going on till friday, $1.99/mo. <i className="fas fa-chevron-right" /></a>
                            <h1 className="hero-heading">Ai &amp; Data Machine deep Learning.</h1>
                            <p className="text-lg mb-60 lg-mb-40">Sinco delivered blazing fast, striking ai solution</p>
                            <ul className="style-none button-group d-lg-flex align-items-center">
                                <li className="me-4"><Link to="/contact" className="btn-one ripple-btn">Start Free Trial</Link></li>
                                <li className="help-btn">Need any help? <Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="illustration-holder">
                    <img src="images/assets/ils_01.svg" alt="" className="main-illustration ms-auto" />
                    <img src="images/assets/bg_01.png" alt="" className="shapes bg-shape" />
                    <img src="images/assets/ils_01_1.svg" alt="" className="shapes shape-one" />
                    <img src="images/assets/ils_01_2.svg" alt="" className="shapes shape-two" />
                    <img src="images/assets/ils_01_3.svg" alt="" className="shapes shape-three" />
                    <img src="images/assets/ils_01_4.svg" alt="" className="shapes shape-four" />
                    <img src="images/assets/ils_01_5.svg" alt="" className="shapes shape-five" />
                    <img src="images/assets/ils_01_6.svg" alt="" className="shapes shape-six" />
                    <img src="images/assets/ils_01_7.svg" alt="" className="shapes shape-seven" />
                    <div className="card-one shapes">
                        <div className="icon"><i className="bi bi-check-lg" /></div>
                        <h6>Data Automation <br />Solution.</h6>
                        <span className="info">faster process</span>
                    </div> {/* /.card-one */}
                    <div className="card-two shapes">
                        <div className="icon"><i className="bi bi-check-lg" /></div>
                        <h6>Data Quality Audit</h6>
                    </div> {/* /.card-two */}
                </div> {/* /.illustration-holder */}
            </div> {/* /.hero-banner-one */}

        </Fragment>
    )
}

export default HeroBannerOne