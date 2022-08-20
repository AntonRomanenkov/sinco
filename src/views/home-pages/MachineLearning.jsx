import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import BrandFive from '../../components/brand/BrandFive';
import TopNavOne from '../../components/header/TopNavOne';
import HeroBannerFour from '../../components/hero-banner/HeroBannerFour';
import FancyFeatureThirteen from '../../components/feature/FancyFeatureThirteen';
import FancyFeatureFourteen from '../../components/feature/FancyFeatureFourteen';
import CommonCounter from '../../components/counter/CommonCounter';
import FancyFeatureFifteen from '../../components/feature/FancyFeatureFifteen';
import TestimonialThree from '../../components/testimonial/TestimonialThree'
import PortfolioGalleryTwo from '../../components/portfolio/PortfolioGalleryTwo';
import PriceTwo from '../../components/pricing/PriceTwo';
import BlogThree from '../../components/blog/BlogThree';
import BannerThree from '../../components/short-banner/BannerThree';
import FooterFour from '../../components/footer/FooterFour';
import CopyRightFour from '../../components/footer/CopyRightFour';
import SkillTwo from '../../components/skill/SkillTwo';

const MachineLearning = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Machine Learning || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helemet end */}

                <TopNavOne/> 
                {/* theme-menu-one */}

                <HeroBannerFour/> 
                {/* hero-banner-four */}

                <div className="partner-section-three mt-70 lg-mt-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 m-auto">
                                <BrandFive/>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.partner-section-three */}

                <div
                    className="fancy-feature-thirteen position-relative mt-100 pb-150 lg-pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 col-md-7 m-auto" data-aos="fade-up">
                                <div className="title-style-one text-center mb-55 lg-mb-30">
                                    <div className="sc-title-five">Our Services</div>
                                    <h2 className="main-title">What we offer? Let’s check it out.</h2>
                                </div>
                                {/* /.title-style-one */}
                            </div>
                        </div>
                        <FancyFeatureThirteen/>
                    </div>
                    {/* /.container */}
                    <img src="images/shape/shape_31.svg" alt="" className="shapes shape-one"/>
                </div>
                {/* /.fancy-feature-thirteen */}

                <div className="fancy-feature-fourteen mt-20">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-md-6 order-md-last">
                                <FancyFeatureFourteen/> {/* /.block-style-two */}
                            </div>
                            <div className="col-xl-7 col-md-6 order-md-first">
                                <div className="illustration-holder d-inline-block position-relative sm-mt-50">
                                    <img src="images/assets/ils_12.svg" alt=""/>
                                    <img
                                        src="images/assets/ils_12_1.svg"
                                        alt=""
                                        className="shapes shape-one"
                                        data-aos="fade-down"
                                        data-aos-duration={1500}/>
                                    <img
                                        src="images/assets/ils_12_1.svg"
                                        alt=""
                                        className="shapes shape-two"
                                        data-aos="fade-down"
                                        data-aos-delay={100}
                                        data-aos-duration={1500}/>
                                    <img
                                        src="images/assets/ils_12_2.svg"
                                        alt=""
                                        className="shapes shape-three"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                        data-aos-duration={1500}/>
                                    <img src="images/assets/ils_12_3.svg" alt="" className="shapes shape-four"/>
                                    <img
                                        src="images/assets/ils_12_4.svg"
                                        alt=""
                                        className="shapes shape-five"
                                        data-aos="fade-left"
                                        data-aos-duration={1500}/>
                                </div>
                                {/* /.illustration-holder */}
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-feature-fourteen */}

                <div className="counter-section-one mt-70">
                    <div className="container">
                        <div className="inner-container no-bg">
                            <CommonCounter/>
                        </div>
                        {/* /.inner-container */}
                    </div>
                </div>
                {/* /.counter-section-one */}

                <div className="fancy-feature-fifteen position-relative mt-65">
                    <div className="container">
                        <div className="title-style-one text-center mb-90 lg-mb-30" data-aos="fade-up">
                            <div className="sc-title-five">OUR APPROACH</div>
                            <h2 className="main-title">How sinco works</h2>
                        </div>
                        {/* /.title-style-one */}
                        <div className="bg-wrapper">
                            <FancyFeatureFifteen/>
                        </div>
                        {/* /.bg-wrapper */}
                    </div>
                    {/* /.container */}
                    <img src="images/shape/shape_33.svg" alt="" className="shapes shape-one"/>
                </div>
                {/* /.fancy-feature-fifteen */}

                <div className="fancy-feature-sixteen mt-170 lg-mt-110">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="title-style-one mb-40 lg-mb-20">
                                    <h2 className="main-title">Working skills.</h2>
                                </div>
                                {/* /.title-style-one */}
                                <p>You’ve pored over your customers’ input. You’ve fleshed out your idea – and
                                    it’s taking real form! You know it satisfied a real need in your market,</p>
                            </div>
                            <div className="col-md-6 ms-auto">
                                <SkillTwo />
                                {/* /.skills-progress */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.fancy-feature-sixteen */}

                <div className="portfolio-gallery-two mt-170 lg-mt-110">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7 m-auto">
                                <div className="title-style-one text-center mb-50 lg-mb-20" data-aos="fade-up">
                                    <div className="sc-title-five">OUR PROJECTS</div>
                                    <h2 className="main-title">Check some our recent Projects.</h2>
                                </div>
                                {/* /.title-style-one */}
                            </div>
                        </div>
                        <PortfolioGalleryTwo/>
                    </div>
                </div>
                {/* /.portfolio-gallery-two */}

                <div
                    className="feedback-section-three style-two mt-180 lg-mt-120"
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

                <div className="pricing-section-two position-relative mt-150 lg-mt-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 col-md-8 m-auto">
                                <div className="title-style-one text-center mb-20">
                                    <div className="sc-title-five">Pricing &amp; Plan</div>
                                    <h2 className="main-title">No Hidden Cost. Choose your plan.</h2>
                                </div>
                                {/* /.title-style-one */}
                            </div>
                        </div>
                        <div className="pricing-table-area-two">
                            <div className="row">
                                <div className="col-xxl-10 m-auto">
                                    <PriceTwo/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xxl-5 col-xl-6 col-lg-7 m-auto">
                                    <p className="info mt-75 lg-mt-50" data-aos="fade-up">We've done it carefully
                                        and simply. Combined with the ingredients makes for beautiful landings.</p>
                                </div>
                            </div>
                        </div>
                        {/* /.pricing-table-area-two */}
                    </div>
                    <img src="images/shape/shape_34.svg" alt="" className="shapes shape-one"/>
                </div>
                {/* /.pricing-section-two */}

                <div className="blog-section-two mt-140 lg-mt-100">
                    <div className="container">
                        <div className="title-style-one text-center mb-50 lg-mb-20" data-aos="fade-up">
                            <div className="sc-title-five">BLOG</div>
                            <h2 className="main-title">Company News</h2>
                        </div>
                        {/* /.title-style-one */}
                        <BlogThree/>
                    </div>
                </div>
                {/* /.blog-section-two */}

                <BannerThree/> {/* fancy-short-banner-three */}

                <div className="footer-style-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            <FooterFour />
                            <div className="bottom-footer">
                                <CopyRightFour />
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                </div>
                {/* /.footer-style-one */}

            </div>
        </Fragment>
    )
}

export default MachineLearning