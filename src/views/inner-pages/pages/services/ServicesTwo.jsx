import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';

import TopNavFour from '../../../../components/header/TopNavFour';
import InnerBanner from '../../../../components/page-title/InnerBanner';
import FancyFeature25 from '../../../../components/feature/FancyFeature25';
import FeatureTwelve2 from '../../../../components/feature/FeatureTwelve2';
import TestimonialOne from '../../../../components/testimonial/TestimonialOne';
import BannerFive from '../../../../components/short-banner/BannerFive';
import NewsLetterForm from '../../../../components/form/NewsLetterForm';
import FooterFour from '../../../../components/footer/FooterFour';
import CopyRightFour from '../../../../components/footer/CopyRightFour';

const ServicesTwo = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Service Two || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="Our Services" currpage="Services"/>
                    <img src="images/assets/ils_20.svg" alt="" className="shapes illustration-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div className="fancy-feature-twentyFive position-relative mt-120 lg-mt-80">
                    <div className="container">
                        <FancyFeature25/>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-feature-twentyFive */}

                <div className="fancy-feature-twelve mt-200 pb-50 lg-mt-120">
                    <div className="container">
                        <div className="row align-items-center align-items-xl-start">
                            <div className="col-xl-5 col-md-6 order-md-last">
                                <FeatureTwelve2/>
                            </div>
                            <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-right">
                                <div
                                    className="illustration-holder position-relative d-inline-block pe-md-5 me-xxl-5 sm-mt-60">
                                    <img src="images/assets/ils_18.svg" alt="" className="transform-img-meta"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="images/shape/shape_25.svg" alt="" className="shapes bg-shape"/>
                </div>
                {/* /.fancy-feature-twelve */}

                <div
                    className="feedback-section-four position-relative mt-130 pb-60 lg-mt-90 lg-pb-10">
                    <div className="container">
                        <div className="title-style-three text-center" data-aos="fade-up">
                            <div className="sc-title">Testimonials</div>
                            <h2 className="main-title">Trsuted by <span>Clients</span>
                            </h2>
                        </div>
                        {/* /.title-style-three */}
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

                <div className="fancy-short-banner-five mt-50">
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
                                           <NewsLetterForm />
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

export default ServicesTwo