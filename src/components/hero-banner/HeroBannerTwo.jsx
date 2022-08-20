import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';



const HeroBannerTwo = () => {
    return (
        <Fragment>
            <div className="hero-banner-two">
                <div className="bg-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-7">
                                <h1 className="hero-heading">I’m Gorgia. Magical AI for solution.</h1>
                                <p className="text-lg pt-25 pb-40 lg-pb-20 sm-pt-10">Sinco delivered blazing fast, striking ai solution</p>
                                <ul className="style-none button-group d-sm-flex align-items-center">
                                    <li className="me-4 mt-10"><Link to="/about-one" className="btn-one ripple-btn">Explore</Link></li>
                                    <li><Link className="demo-btn tran3s mt-10" to="/contact">Request a demo</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div> {/* /.container */}
                    <div className="illustration-holder">
                        <img src="images/assets/ils_04.svg" alt="" className="main-illustration w-100" />
                        <img src="images/assets/ils_04_1.svg" alt="" className="shapes shape-one" />
                        <img src="images/assets/ils_04_2.svg" alt="" className="shapes shape-two" />
                        <img src="images/assets/ils_04_2.svg" alt="" className="shapes shape-three" />
                        <img src="images/assets/ils_04_3.svg" alt="" className="shapes shape-four" />
                        <img src="images/assets/ils_04_4.svg" alt="" className="shapes shape-five" />
                        <img src="images/assets/ils_04_5.svg" alt="" className="shapes shape-six" />
                        <img src="images/assets/ils_04_6.svg" alt="" className="shapes shape-seven" />
                        <div className="card-one shapes d-flex align-items-center justify-content-center">
                            <div className="icon"><i className="bi bi-check-lg" /></div>
                            <h6>A++ Performance</h6>
                        </div> {/* /.card-one */}
                        <div className="card-two shapes text-center">
                            <div className="icon"><i className="bi bi-check-lg" /></div>
                            <div className="main-count"><span className="counter">20</span>k</div>
                            <div className="info">5 Start Rating</div>
                            <ul className="style-none d-flex justify-content-center rating">
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                            </ul>
                        </div> {/* /.card-two */}
                    </div> {/* /.illustration-holder */}
                </div> {/* /.bg-wrapper */}
            </div> {/* /.hero-banner-two */}
        </Fragment>
    )
}

export default HeroBannerTwo