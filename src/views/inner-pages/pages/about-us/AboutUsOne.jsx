import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import TopNavOne from '../../../../components/header/TopNavOne'
import InnerBanner from '../../../../components/page-title/InnerBanner';
import AboutFour from '../../../../components/about/AboutFour';
import FancyFeatureTwentyTwo from '../../../../components/feature/FancyFeatureTwentyTwo';
import CommonCounter from '../../../../components/counter/CommonCounter';
import Skill from '../../../../components/skill/Skill';
import Team from '../../../../components/team/Team';
import TestimonialThree from '../../../../components/testimonial/TestimonialThree';
import BrandSix from '../../../../components/brand/BrandSix';
import AdressOne from '../../../../components/adress/AdressOne';
import Info from '../../../../components/adress/Info';
import FooterTwo from '../../../../components/footer/FooterTwo';

const AboutUsOne = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">

                <Helmet>
                    <title>About Us One || Sinco - Data Science & Analytics React Template</title>
                </Helmet>

                <TopNavOne/> {/* theme-menu-one */}

                <div className="theme-inner-banner">
                    <InnerBanner intro='About Company' currpage='About Us'/>
                    <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div className="fancy-feature-two position-relative mt-140 lg-mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-5 col-lg-6 col-md-7 ms-auto">
                                <AboutFour/> {/* /.block-style-two */}
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                    <div className="illustration-holder-two sm-mt-40">
                        <img src="images/assets/ils_05.svg" alt="" className="main-illustration w-100"/>
                        <img src="images/assets/ils_05_1.svg" alt="" className="shapes shape-one"/>
                        <img
                            src="images/assets/ils_05_2.svg"
                            alt=""
                            className="shapes shape-two"
                            data-aos="fade-up"
                            data-aos-anchor=".fancy-feature-two"
                            data-aos-delay={100}
                            data-aos-duration={2000}/>
                        <img
                            src="images/assets/ils_05_3.svg"
                            alt=""
                            className="shapes shape-three"
                            data-aos="fade-up"
                            data-aos-anchor=".fancy-feature-two"
                            data-aos-delay={150}
                            data-aos-duration={2000}/>
                        <img src="images/assets/ils_05_4.svg" alt="" className="shapes shape-four"/>
                        <img src="images/assets/ils_05_5.svg" alt="" className="shapes shape-five"/>
                    </div>
                    {/* /.illustration-holder-two */}
                </div>
                {/* /.fancy-feature-two */}

                <div className="fancy-feature-twentyTwo mt-150 lg-mt-60">
                    <div className="container">
                        <FancyFeatureTwentyTwo/>
                    </div>
                </div>
                {/* /.fancy-feature-twentyTwo */}

                <div className="counter-section-one">
                    <div className="inner-container bg-color style-two rounded-0 w-100">
                        <div className="container">
                            <CommonCounter/>
                        </div>
                        <img src="images/shape/shape_40.svg" alt="" className="shapes shape-three"/>
                        <img src="images/shape/shape_41.svg" alt="" className="shapes shape-four"/>
                    </div>
                    {/* /.inner-container */}
                </div>
                {/* /.counter-section-one */}

                <div className="fancy-feature-five position-relative mt-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-4 col-lg-5 col-md-6">
                                <div className="block-style-five pt-60 md-pt-20" data-aos="fade-right">
                                    <div className="title-style-one">
                                        <div className="sc-title-four">WHY CHOOSE US</div>
                                        <h2 className="main-title">Why you should choose us?</h2>
                                    </div>
                                    {/* /.title-style-one */}
                                    <p className="pt-10 pb-70">Tell us about your product and we will give you expert assistance.</p>
                                    <Skill/> {/* /.skills-progress */}
                                </div>
                                {/* /.block-style-five */}
                            </div>
                            <div className="col-xxl-8 col-lg-7 col-md-6 text-end">
                                <div className="illustration-holder d-inline-block position-relative xs-mt-20">
                                    <img src="images/assets/ils_06.svg" alt="" className="main-illustration w-100"/>
                                    <img src="images/assets/ils_06_1.svg" alt="" className="shapes shape-one"/>
                                    <img src="images/assets/ils_06_2.svg" alt="" className="shapes shape-two"/>
                                    <img
                                        src="images/assets/ils_06_3.svg"
                                        alt=""
                                        className="shapes shape-three"
                                        data-aos="fade-down"
                                        data-aos-duration={1800}/>
                                    <img
                                        src="images/assets/ils_06_4.svg"
                                        alt=""
                                        className="shapes shape-four"
                                        data-aos="fade-left"
                                        data-aos-duration={1800}/>
                                    <img src="images/assets/ils_06_5.svg" alt="" className="shapes shape-five"/>
                                </div>{/*  /.illustration-holder */}
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-feature-five */}

                <div
                    className="team-section-one mt-110 pt-110 pb-170 lg-mt-80 lg-pt-80 lg-pb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div
                                    className="title-style-one text-center text-sm-start xs-pb-20"
                                    data-aos="fade-right">
                                    <div className="sc-title-four">OUR TEAM</div>
                                    <h2 className="main-title">Our Members</h2>
                                </div>
                                {/* /.title-style-one */}
                            </div>
                            <div
                                className="col-sm-6 ms-auto d-flex justify-content-center justify-content-sm-end"
                                data-aos="fade-left">
                                <Link to="/team-member" className="btn-one xs ripple-btn">See all members
                                    <i className="fas fa-chevron-right"/></Link>
                            </div>
                        </div>
                        <Team/>
                    </div>
                    <img src="images/shape/shape_42.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_43.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.team-section-one */}

                <div
                    className="feedback-section-three style-two mt-150 lg-mt-90"
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

                <div className="partner-section-two mt-130 lg-mt-70 lg-pb-20">
                    <div className="container">
                        <div className="title-style-one text-center" data-aos="fade-up">
                            <div className="sc-title-four">over 150k+ client</div>
                            <h2 className="main-title md">Join 27,000+ companies who’ve reached
                            </h2>
                        </div>
                        {/* /.title-style-one */}
                        <div className="row">
                            <div className="col-12 m-auto">
                                <BrandSix/>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.partner-section-two */}

                <div className="address-section-one">
                    <div className="container">
                        <div className="inner-content bg-white" data-aos="fade-up" data-aos-delay={100}>
                            <div className="row g-0">
                                <div className="col-md-6 d-flex">
                                    <AdressOne/> {/* /.address-block-one */}
                                </div>
                                <div className="col-md-6 d-flex">
                                    <Info/> {/* /.address-block-one */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.address-section-one */}

                <div className="footer-style-one bg-color theme-basic-footer">
                <div className="container">
                    <div className="inner-wrapper">
                        <FooterTwo />
                        <div className="bottom-footer">
                            <div className="d-lg-flex justify-content-between align-items-center">
                                <ul
                                    className="order-lg-1 pb-15 d-flex justify-content-center footer-nav style-none">
                                    <li>
                                        <a href="faq.html">Privacy &amp; Terms.</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Contact Us</a>
                                    </li>
                                </ul>
                                <p className="copyright text-center order-lg-0 pb-15">Copyright @2022 sinco inc.</p>
                            </div>
                        </div>
                    </div>
                    {/* /.inner-wrapper */}
                </div>
                <img src="images/shape/shape_44.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_45.svg" alt="" className="shapes shape-two"/>
            </div>
                {/* /.footer-style-one */}

            </div>

        </Fragment>
    )
}

export default AboutUsOne