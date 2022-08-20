import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';

import TopNavFour from '../../../../components/header/TopNavFour';
import InnerBanner from '../../../../components/page-title/InnerBanner';
import FancyFeature24 from '../../../../components/feature/FancyFeature24';
import FancyFeatureNineteen from '../../../../components/feature/FancyFeatureNineteen';
import TestimonialFive from '../../../../components/testimonial/TestimonialFive';
import BannerFive from '../../../../components/short-banner/BannerFive';
import FooterFour from '../../../../components/footer/FooterFour';
import CopyRightFour from '../../../../components/footer/CopyRightFour';
import NewsLetterForm from '../../../../components/form/NewsLetterForm';

const ServicesOne = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Service One || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="Our Services" currpage="Services"/>
                    <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div className="fancy-feature-twentyFour">
                    <div className="container">
                        <FancyFeature24/>
                    </div>
                </div>
                {/* /.fancy-feature-twentyFour */}

                <div className="fancy-feature-nineteen position-relative pt-160 lg-pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-5 col-lg-6 col-md-7">
                                <FancyFeatureNineteen/> 
                                 {/* /.block-style-thirteen */}
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                    <div className="illustration-holder" data-aos="fade-left">
                        <img src="images/assets/ils_15.svg" alt="" className="w-100 main-illustration"/>
                        <img src="images/assets/ils_15_1.svg" alt="" className="shapes shape-one"/>
                        <img src="images/assets/ils_15_2.svg" alt="" className="shapes shape-two"/>
                        <img src="images/assets/ils_15_3.svg" alt="" className="shapes shape-three"/>
                        <img src="images/assets/ils_15_4.svg" alt="" className="shapes shape-four"/>
                        <img
                            src="images/assets/ils_15_5.svg"
                            alt=""
                            className="shapes shape-five"
                            data-aos="fade-down"
                            data-aos-delay={200}
                            data-aos-duration={2000}/>
                        <img
                            src="images/assets/ils_15_6.svg"
                            alt=""
                            className="shapes shape-six"
                            data-aos="fade-down"
                            data-aos-delay={100}
                            data-aos-duration={2000}/>
                        <img
                            src="images/assets/ils_15_7.svg"
                            alt=""
                            className="shapes shape-seven"
                            data-aos="fade-down"
                            data-aos-duration={2000}/>
                    </div>
                    {/* /.illustration-holder */}
                    <div className="shapes oval-one"/>
                    <div className="shapes oval-two"/>
                    <img src="images/shape/shape_47.svg" alt="" className="shapes bg-shape-two"/>
                </div>
                {/* /.fancy-feature-nineteen */}

                <div className="feedback-section-five bg-white pt-200 pb-95 lg-pt-100 lg-pb-40">
                    <div className="container">
                        <div className="title-style-three text-center" data-aos="fade-up">
                            <div className="sc-title">Testimonials</div>
                            <h2 className="main-title">Words from <span>Client</span>
                            </h2>
                        </div>
                        {/* /.title-style-three */}
                        <TestimonialFive/> {/* /.feedback_slider_four */}
                    </div>
                    <img
                        src="images/media/img_08.jpg"
                        alt=""
                        className="shapes avatar-one"
                        width={45}
                        height={45}
                        style={{
                        outlineWidth: '6px'
                    }}/>
                    <img
                        src="images/media/img_09.jpg"
                        alt=""
                        className="shapes avatar-two"
                        width={85}
                        height={85}
                        style={{
                        outlineWidth: '10px'
                    }}/>
                    <img
                        src="images/media/img_10.jpg"
                        alt=""
                        className="shapes avatar-three"
                        width={85}
                        height={85}
                        style={{
                        outlineWidth: '10px'
                    }}/>
                    <img
                        src="images/media/img_11.jpg"
                        alt=""
                        className="shapes avatar-four"
                        width={50}
                        height={50}
                        style={{
                        outlineWidth: '5px'
                    }}/>
                </div>
                {/* /.feedback-section-five */}

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

export default ServicesOne