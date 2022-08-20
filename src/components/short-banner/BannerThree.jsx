import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const BannerThree = () => {
    return (
        <Fragment>
            <div className="fancy-short-banner-three position-relative mt-160 lg-mt-80">
                <div className="container">
                    <div className="bg-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-8 m-auto" data-aos="fade-up">
                                <div className="title-style-one text-center white-vr mb-30" data-aos="fade-up">
                                    <h2 className="main-title">Get Ready to Started It’s Fast, Free &amp; very easy</h2>
                                </div>
                                {/* /.title-style-one */}
                                <Link to="/contact" className="btn-six ripple-btn">Get Started
                                    <i className="fas fa-chevron-right"/></Link>
                            </div>
                        </div>
                    </div>
                    {/* /.bg-wrapper */}
                </div>
                {/* /.container */}
            </div>
            {/* /.fancy-short-banner-three */}

        </Fragment>
    )
}

export default BannerThree