import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import TopNavTwo from '../../components/header/TopNavTwo';
import HeroBannerTwo from '../../components/hero-banner/HeroBannerTwo';
import CounterTwo from '../../components/counter/CounterTwo';
import BrandThree from '../../components/brand/BrandThree';
import FancyFeatureFour from '../../components/feature/FancyFeatureFour';
import AboutTwo from '../../components/about/AboutTwo';
import TestimonialTwo from '../../components/testimonial/TestimonialTwo';
import FancyFeatureSix from '../../components/feature/FancyFeatureSix'
import TestimonialThree from '../../components/testimonial/TestimonialThree';
import Faq from '../../components/faq/Faq';
import BlogTwo from '../../components/blog/BlogTwo';
import CallToAction2 from '../../components/call-to-action/CallToAction2';
import FooterTwo from '../../components/footer/FooterTwo';
import CopyRightFour from '../../components/footer/CopyRightFour';
import Skill from '../../components/skill/Skill';

const ArtificialIntelligence = () => {

    return (
        <div className="main-page-wrapper">
            <Helmet>
                <title>Artificial Intelligence || Sinco - Data Science & Analytics React Template</title>
            </Helmet>
            <TopNavTwo/> 
            {/* /.theme-main-one */}

            <HeroBannerTwo/> 
            {/* theme-banner-two */}

            <CounterTwo/> 
            {/* /.counter-section-one */}

            <div className="partner-section-two mt-110">
                <div className="container">
                    <div className="title-style-one text-center" data-aos="fade-up">
                        <div className="sc-title-three">over 150k+ client</div>
                        <h2 className="main-title md">Join 27,000+ companies who’ve reached
                        </h2>
                    </div>
                    {/* /.title-style-one */}
                    <div className="row">
                        <div className="col-12 m-auto">
                            <BrandThree/>
                        </div>
                    </div>
                </div>
                {/* /.container */}
            </div>
            {/* /.partner-section-two */}

            <div className="fancy-feature-four position-relative mt-110 lg-mt-50">
                <div className="bg-wrapper">
                    <div className="inner-container">
                        <div className="container">
                            <div className="row gx-xxl-5">
                                <div className="col-lg-4 mt-40 d-flex" data-aos="fade-up">
                                    <div className="d-flex justify-content-center flex-column">
                                        <div className="title-style-one">
                                            <div className="sc-title-three">Services</div>
                                            <h2 className="main-title">Our experties field.</h2>
                                        </div>
                                        {/* /.title-style-one */}
                                        <div>
                                            <div className="btn-three rev mt-35 lg-mt-20">For more details. <Link to="/service-one">Click here
                                                    <i className="fas fa-chevron-right"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <FancyFeatureFour/>
                            </div>
                        </div>
                    </div>
                    {/* /.inner-container */}
                </div>
                {/* /.bg-wrapper */}
                <img src="images/shape/shape_06.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_07.svg" alt="" className="shapes shape-two"/>
            </div>
            {/* /.fancy-feature-four */}

            <AboutTwo/> 
            {/* /about-two */}

            <div
                className="feedback-section-two mt-170 xl-mt-100 md-mt-60"
                data-aos="fade-up">
                <img src="images/shape/shape_08.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_09.svg" alt="" className="shapes shape-two"/>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-4 col-md-5 col-sm-8">
                            <div className="title-style-one text-center text-sm-start xs-pb-20">
                                <h2 className="main-title">Client’s success Stories.</h2>
                            </div>
                            {/* /.title-style-one */}
                        </div>
                    </div>
                </div>
                {/* /.container */}
                <div className="inner-content mt-60 md-mt-40">
                    <div className="slider-wrapper">
                        <TestimonialTwo/>
                    </div>
                    {/* /.slider-wrapper */}
                </div>
                {/* /.inner-content */}
            </div>
            {/* /.feedback-section-two */}

            <div className="fancy-feature-five position-relative mt-50 xs-mt-20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-4 col-lg-5 col-md-6">
                            <div className="block-style-five pt-60 md-pt-20" data-aos="fade-right">
                                <div className="title-style-one">
                                    <div className="sc-title-three">BESt AI SOLUTION</div>
                                    <h2 className="main-title">Why you should choose us?</h2>
                                </div>
                                {/* /.title-style-one */}
                                <p className="pt-10 pb-70">Tell us about your product and we will give you expert assistance.</p>
                                <Skill />
                                {/* /.skills-progress */}
                                <Link to="/about-one" className="btn-five ripple-btn mt-60 lg-mt-50">Learn More</Link>
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

            <div className="fancy-feature-six position-relative mt-80">
                <div className="container">
                    <div className="bg-wrapper">
                        <FancyFeatureSix/>
                    </div>
                    {/* /.bg-wrapper */}
                </div>
                {/* /.container */}
                <img src="images/shape/shape_10.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_11.svg" alt="" className="shapes shape-two"/>
            </div>
            {/* /.fancy-feature-six */}

            <div
                className="feedback-section-three position-relative mt-250 lg-mt-130"
                data-aos="fade-up">
                <div className="container">
                    <div className="slider-wrapper">
                        <TestimonialThree/>
                    </div>
                    {/* /.slider-wrapper */}
                </div>
                {/* /.container */}
                <img src="images/shape/shape_12.svg" alt="" className="shapes shape-one"/>
            </div>
            {/* /.feedback-section-three */}

            <div className="fancy-feature-seven mt-140 lg-mt-50 sm-mt-20">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-lg-5">
                            <div className="block-style-five md-pb-50" data-aos="fade-right">
                                <div className="title-style-one">
                                    <div className="sc-title-three">Questions &amp; Answers</div>
                                    <h2 className="main-title">Any Questions? Find here.</h2>
                                </div>
                                {/* /.title-style-one */}
                                <p className="pt-10 pb-15">Don’t find your answer here? just send us a message for any query.</p>
                                <Link to="/contact" className="btn-five ripple-btn">Contact us</Link>
                            </div>
                            {/* /.block-style-five */}
                        </div>
                        <div className="col-lg-7 col-lg-6 ms-auto" data-aos="fade-left">
                            <Faq/>
                        </div>
                    </div>
                </div>
                {/* /.container */}
                <img src="images/shape/shape_13.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_14.svg" alt="" className="shapes shape-two"/>
                <img src="images/shape/shape_15.svg" alt="" className="shapes shape-three"/>
            </div>
            {/* /.fancy-feature-seven */}

            <div className="blog-section-two mt-110 lg-mt-50">
                <div className="container">
                    <div className="title-style-one text-center mb-50 lg-mb-20" data-aos="fade-up">
                        <div className="sc-title-three">BLOG</div>
                        <h2 className="main-title">Company News</h2>
                    </div>
                    {/* /.title-style-one */}
                    <BlogTwo/>
                </div>
            </div>
            {/* /.blog-section-two */}

            <div
                className="fancy-short-banner-one position-relative mt-160 lg-mt-100 md-mt-80">
                <div className="container">
                    <div className="bg-wrapper">
                        <CallToAction2/>
                    </div>
                    {/* /.bg-wrapper */}
                </div>
                {/* /.container */}
                <img src="images/shape/shape_10.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_11.svg" alt="" className="shapes shape-two"/>
            </div>
            {/* /.fancy-short-banner-one */}

            <div className="footer-style-two theme-basic-footer">
                <img src="images/shape/shape_16.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_17.svg" alt="" className="shapes shape-two"/>
                <div className="container">
                  <div className="inner-wrapper">
                        <FooterTwo />
                        <div className="bottom-footer">
                            <CopyRightFour />
                        </div>
                    </div>
                    {/* /.inner-wrapper */}
                </div>
            </div>
            {/* /.footer-style-two */}

        </div>
    )
}

export default ArtificialIntelligence