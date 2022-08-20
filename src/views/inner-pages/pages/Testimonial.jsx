import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';

import TopNavFour from '../../../components/header/TopNavFour';
import InnerBanner from '../../../components/page-title/InnerBanner';
import TestimonialThree from '../../../components/testimonial/TestimonialThree';
import TestimonialOne from '../../../components/testimonial/TestimonialOne';
import BannerFive from '../../../components/short-banner/BannerFive';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';

const Testimonial = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Testimonial || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="Client Testimonials" currpage="Testimonial"/>
                    <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div
                    className="feedback-section-three position-relative mt-150 lg-mt-100"
                    data-aos="fade-up">
                    <div className="container">
                        <div className="slider-wrapper">
                            <TestimonialThree/> {/* /.feedback_slider_three */}
                        </div>
                        {/* /.slider-wrapper */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.feedback-section-three */}

                <div
                    className="feedback-section-four position-relative mt-170 pb-150 lg-mt-120 lg-pb-80">
                    <div className="container">
                        <div className="title-style-one text-center">
                            <div className="sc-title">TESTIMONIALS</div>
                            <h2 className="main-title">Word from Our Client</h2>
                        </div>
                        {/* /.title-style-one */}
                    </div>
                    {/* /.container */}
                    <div className="inner-content mt-90 lg-mt-60">
                        <div className="slider-wrapper">
                            <TestimonialOne/> {/* /.feedback_slider_one */}
                        </div>
                        {/* /.slider-wrapper */}
                    </div>
                    {/* /.inner-content */}
                </div>
                {/* /.feedback-section-four */}

                <div className="fancy-short-banner-five">
                    <div className="container">
                        <div className="bg-wrapper">
                            <BannerFive/>
                        </div>
                        {/* /.bg-wrapper */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-short-banner-five */}

                <div className="footer-style-four space-fix-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                        </div>
                                        {/* /.title-style-four */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="email" placeholder="Enter your email"/>
                                                <button className="ripple-btn tran3s">Subscribe</button>
                                            </form>
                                            <p>We only send interesting and relevant emails.</p>
                                        </div>
                                        {/* /.subscribe-form */}
                                    </div>
                                </div>
                            </div>
                            {/* /.subscribe-area */}
                            <FooterFour />
                            <div className="bottom-footer">
                                <CopyRightFour />
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                </div>
                {/* /.footer-style-four */}

            </div>
        </Fragment>
    )
}

export default Testimonial