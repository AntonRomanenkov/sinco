import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import Tilt from 'react-parallax-tilt'

import TopNavThree from '../../components/header/TopNavThree';
import HeroBannerThree from '../../components/hero-banner/HeroBannerThree';
import FancyFeatureEight from '../../components/feature/FancyFeatureEight';
import FeatureTab from '../../components/tab/FeatureTab';
import FancyFeatureEleven from '../../components/feature/FancyFeatureEleven';
import CommonCounterTwo from '../../components/counter/CommonCounterTwo'
import FancyFeatureTwelve from '../../components/feature/FancyFeatureTwelve';
import TestimonialOne from '../../components/testimonial/TestimonialOne'
import BrandFour from '../../components/brand/BrandFour';
import BannerTwo from '../../components/short-banner/BannerTwo';
import BlogTwo from '../../components/blog/BlogTwo';
import AdressOne from '../../components/adress/AdressOne';
import Info from '../../components/adress/Info';
import FooterThree from '../../components/footer/FooterThree';
import CopyRightFour from '../../components/footer/CopyRightFour';

const ChatBoot = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">

                <Helmet>
                    <title>Chatboot || Sinco - Data Science & Analytics React Template</title>
                </Helmet>

                <TopNavThree/> {/* theme-menu-three */}

                <HeroBannerThree/> {/* hero-banner-three */}

                <div className="fancy-feature-eight position-relative">
                    <div className="container">
                        <FancyFeatureEight/>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-feature-eight */}

                <div className="fancy-feature-nine mt-190 lg-mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-5 col-lg-6 ms-auto order-lg-last">
                                <div className="block-style-two md-mb-50" data-aos="fade-left">
                                    <div className="title-style-one">
                                        <div className="sc-title-four">What is Chatbot</div>
                                        <h2 className="main-title">Customer service by our chatbot.</h2>
                                    </div>
                                    {/* /.title-style-one */}

                                    <FeatureTab/> {/* /.tab-content */}
                                </div>
                                {/* /.block-style-two */}

                            </div>
                            <div
                                className="col-lg-6 order-lg-first text-center text-lg-start"
                                data-aos="fade-right">
                                <div className="illustration-holder d-inline-block ms-xxl-5 mt-40 lg-mt-10">
                                    <Tilt>
                                        <img src="images/assets/ils_08.svg" alt="" className="transform-img-meta"/>
                                    </Tilt>
                                    <img src="images/assets/ils_08_1.svg" alt="" className="shapes shape-one"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-feature-nine */}

                <div className="fancy-feature-ten mt-190 lg-mt-110">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="block-style-two md-mb-50" data-aos="fade-right">
                                    <div className="title-style-one">
                                        <div className="sc-title-four">App Integration</div>
                                        <h2 className="main-title">Chatbot platform works all with your tools.</h2>
                                    </div>
                                    {/* /.title-style-one */}
                                    <p className="pt-25 pb-30 lg-pt-20 lg-pb-10">Sinco is data science, machine
                                        learning and artificial intelligence provide business solution and delivered
                                        blazing fast, striking result.</p>
                                    <div className="btn-three color-three">How to integrate? <Link to="/about-one">Click here <i className="fas fa-chevron-right"/></Link>
                                    </div>
                                </div>
                                {/* /.block-style-two */}
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-6 ms-auto" data-aos="fade-left">
                                <div
                                    className="screen-holder-one d-flex align-items-center justify-content-center">
                                    <div
                                        className="round-bg d-flex align-items-center justify-content-center"
                                        style={{
                                        width: '200px',
                                        height: '200px'
                                    }}><img src="images/logo/Plogo-16.png" alt=""/></div>
                                    <div
                                        className="round-bg d-flex align-items-center justify-content-center shapes logo-one"
                                        style={{
                                        width: '70px',
                                        height: '70px'
                                    }}><img src="images/logo/Plogo-17.png" alt=""/></div>
                                    <div
                                        className="round-bg d-flex align-items-center justify-content-center shapes logo-two"
                                        style={{
                                        width: '115px',
                                        height: '115px'
                                    }}><img src="images/logo/Plogo-18.png" alt=""/></div>
                                    <div
                                        className="round-bg d-flex align-items-center justify-content-center shapes logo-three"
                                        style={{
                                        width: '89px',
                                        height: '89px'
                                    }}><img src="images/logo/Plogo-19.png" alt=""/></div>
                                    <div
                                        className="round-bg d-flex align-items-center justify-content-center shapes logo-four"
                                        style={{
                                        width: '162px',
                                        height: '162px'
                                    }}><img src="images/logo/Plogo-20.png" alt=""/></div>
                                    <div
                                        className="round-bg d-flex align-items-center justify-content-center shapes logo-five"
                                        style={{
                                        width: '115px',
                                        height: '115px'
                                    }}><img src="images/logo/Plogo-21.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-feature-ten */}

                <div className="fancy-feature-eleven mt-225 lg-mt-120">
                    <div className="container">
                        <div
                            className="title-style-one white-vr text-center mb-55 lg-mb-30"
                            data-aos="fade-up">
                            <h2 className="main-title">How It works</h2>
                            <p className="sub-title">Our advance AI system work seamlesly &amp; smartly.</p>
                        </div>
                        {/* /.title-style-one */}
                        <div className="row">
                            <div className="col-xxl-11 m-auto">
                                <FancyFeatureEleven/>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                    <img src="images/shape/shape_20.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_21.svg" alt="" className="shapes shape-two"/>
                    <img src="images/shape/shape_22.png" alt="" className="shapes shape-three"/>
                    <img src="images/shape/shape_23.png" alt="" className="shapes shape-four"/>
                </div>
                {/* /.fancy-feature-eleven */}

                <div className="counter-section-one top-transform">
                    <div className="container">
                        <div className="inner-container">
                            <CommonCounterTwo/>
                        </div>
                        {/* /.inner-container */}
                    </div>
                </div>
                {/* /.counter-section-one */}

                <div className="fancy-feature-twelve mt-170 lg-mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-md-6 order-md-last">
                                <FancyFeatureTwelve/>
                            </div>
                            <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-right">
                                <div
                                    className="illustration-holder position-relative d-inline-block ms-5 sm-mt-30">
                                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                        <img src="images/assets/ils_09.svg" alt="" className="transform-img-meta"/>
                                    </Tilt>
                                    <div
                                        className="card-one shapes d-flex align-items-center justify-content-center">
                                        <div className="icon"><i className="bi bi-check-lg"/></div>
                                        <h6>A++ Performance</h6>
                                    </div>
                                    {/* /.card-one */}
                                    <div className="card-two shapes text-center">
                                        <div className="icon"><i className="bi bi-check-lg"/></div>
                                        <div className="main-count">
                                            <span className="counter">20</span>k</div>
                                        <div className="info">5 Start Rating</div>
                                        <ul className="style-none d-flex justify-content-center rating">
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                        </ul>
                                    </div>
                                    {/* /.card-two */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="images/shape/shape_25.svg" alt="" className="shapes bg-shape"/>
                </div>
                {/* /.fancy-feature-twelve */}

                <div
                    className="feedback-section-four position-relative mt-130 pb-200 lg-mt-100 lg-pb-80">
                    <div className="container">
                        <div className="title-style-one text-center" data-aos="fade-up">
                            <div className="sc-title-four">FEEDBACK</div>
                            <h2 className="main-title">Trsuted by Clients</h2>
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
                    <div className="container">
                        <div className="row">
                            <div className="col-12 m-auto">
                                <BrandFour/>
                            </div>
                        </div>
                    </div>
                    <img src="images/shape/shape_26.svg" alt="" className="shapes bg-shape"/>
                </div>
                {/* /.feedback-section-four */}

                <div className="fancy-short-banner-two">
                    <div className="bg-wrapper">
                        <div className="container">
                            <BannerTwo/>
                        </div>
                        {/* /.container */}
                        <img src="images/shape/shape_27.png" alt="" className="shapes shape-one"/>
                        <img src="images/shape/shape_28.png" alt="" className="shapes shape-two"/>
                        <img src="images/shape/shape_29.png" alt="" className="shapes shape-three"/>
                    </div>
                    {/* /.bg-wrapper */}
                </div>
                {/* /.fancy-short-banner-two */}

                <div className="blog-section-two mt-170 lg-mt-110">
                    <div className="container">
                        <div className="title-style-one text-center mb-50 lg-mb-20" data-aos="fade-up">
                            <h2 className="main-title">Company News</h2>
                        </div>
                        {/* /.title-style-one */}
                        <BlogTwo/>
                    </div>
                </div>
                {/* /.blog-section-two */}

                <div className="address-section-one">
                    <div className="container">
                        <div className="inner-content bg-white" data-aos="fade-up">
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

                <div className="footer-style-three theme-basic-footer">
                    <img src="images/shape/shape_30.png" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_28.png" alt="" className="shapes shape-two"/>
                    <img src="images/shape/shape_29.png" alt="" className="shapes shape-three"/>
                    <div className="container">
                        <div className="inner-wrapper">
                            <FooterThree />
                            <div className="bottom-footer">
                                <CopyRightFour />
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                </div>
                {/* /.footer-style-three */}

            </div>
        </Fragment>

    )
}

export default ChatBoot