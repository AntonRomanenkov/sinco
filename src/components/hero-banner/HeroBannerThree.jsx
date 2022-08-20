import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';


const HeroBannerThree = () => {
    return (
        <Fragment>
            <div className="hero-banner-three">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-6">
                            <h1 className="hero-heading">Next Level Client Support with lily.</h1>
                            <p className="text-lg mb-50 lg-mb-40">Sinco delivered blazing fast, striking ai solution</p>
                            <ul className="style-none button-group d-lg-flex align-items-center">
                                <li className="me-4"><Link to="/contact" className="btn-one ripple-btn">Start Free Trial</Link></li>
                                <li className="help-btn">Need any help? <Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* /.container */}
                
                    <div className="illustration-holder sm-mt-50">
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                        <img src="images/assets/ils_07.svg" alt="" className="main-illustration transform-img-meta ms-auto" />
                        </Tilt>
                        <img src="images/shape/shape_19.png" alt="" className="shapes shape-one" />
                    </div> {/* /.illustration-holder */}
                
                <img src="images/shape/shape_18.svg" alt="" className="shapes cube-shape" />
            </div> {/* /.hero-banner-three */}
        </Fragment>
    )
}

export default HeroBannerThree