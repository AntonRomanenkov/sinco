import React,{Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';


import TopNavFour from '../../components/header/TopNavFour';
import HeroBannerFive from '../../components/hero-banner/HeroBannerFive';
import FancyFeatureSeventeen from '../../components/feature/FancyFeatureSeventeen';
import About from '../../components/about/About';
import FancyFeatureNineteen from '../../components/feature/FancyFeatureNineteen';
import CounterOne from '../../components/counter/CounterOne';
import TestimonialFive from '../../components/testimonial/TestimonialFive';
import Faq from '../../components/faq/Faq';
import Blog from '../../components/blog/Blog';
import Contact from '../../components/contact/Contact';
import CallToAction from '../../components/call-to-action/CallToAction';
import BrandTwo from '../../components/brand/BrandTwo';
import FooterFour from '../../components/footer/FooterFour';
import CopyRightFour from '../../components/footer/CopyRightFour';



const UserAnalysis = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>User Analysis || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/>
                {/* theme-menu-four */}

                <HeroBannerFive/> 
                {/* {Herobanner End} */}


                <div className="fancy-feature-seventeen position-relative mt-160 xl-mt-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5" data-aos="fade-right">
                                <div className="title-style-three text-center text-lg-start">
                                    <h2 className="main-title">
                                        <span>Services</span> We Provide with Quality.</h2>
                                </div>
                                {/* /.title-style-three */}
                            </div>
                            <div className="col-xl-6 col-lg-7" data-aos="fade-left">
                                <p className="m0 text-center text-lg-start md-pt-30">NLP entails applying
                                    algorithms to identify and extract rules such that the unstructured language
                                    data is converted.</p>
                            </div>
                        </div>
                        <FancyFeatureSeventeen/>
                    </div>
                    {/* /.container */}
                    <div className="shapes shape-one"/>
                </div>
                {/* /.fancy-feature-seventeen */}

                <About/> {/* /.fancy-feature-eighteen */}

                <div className="fancy-feature-nineteen position-relative pt-130 lg-pt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-5 col-lg-6 col-md-7">
                                <FancyFeatureNineteen />
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
                    <img src="images/shape/shape_35.svg" alt="" className="shapes bg-shape"/>
                </div>
                {/* /.fancy-feature-nineteen */}

                <CounterOne/> 
                {/* /Counter one end */}

                <div className="feedback-section-five pt-130 lg-pt-100 pb-95 lg-pb-40">
                    <div className="container">
                        <div className="title-style-three text-center" data-aos="fade-up">
                            <div className="sc-title">Testimonials</div>
                            <h2 className="main-title">Words from <span>Client</span>
                            </h2>
                        </div>
                        {/* /.title-style-three */}
                        <TestimonialFive/>
                        {/* /.feedback_slider_four */}
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

                <div
                    className="fancy-feature-twenty position-relative mt-160 pb-100 lg-mt-100 lg-pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div
                                    className="block-style-five pe-xxl-5 me-xxl-5 md-pb-50"
                                    data-aos="fade-right">
                                    <div className="title-style-three">
                                        <div className="sc-title">QUESTIONS &amp; ANSWERS</div>
                                        <h2 className="main-title">Any <span>Questions?</span> Find here.</h2>
                                    </div>
                                    {/* /.title-style-three */}
                                    <p className="pt-20 pb-15">Don’t find your answer here? just send us a message for any query.
                                    </p>
                                    <Link to="/contact" className="btn-eight ripple-btn">Contact us</Link>
                                </div>
                                {/* /.block-style-five */}
                            </div>
                            <div className="col-lg-7" data-aos="fade-left">
                                <Faq/>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                    <img src="images/shape/shape_36.svg" alt="" className="shapes shape-one"/>
                    <div className="shapes oval-one"/>
                </div>
                {/* /.fancy-feature-twenty */}

                <div className="blog-section-three position-relative pt-70 lg-pt-40">
                    <div className="container">
                        <div
                            className="title-style-three text-center mb-50 lg-mb-20"
                            data-aos="fade-up">
                            <div className="sc-title">RECENT NEWS</div>
                            <h2 className="main-title">Inside Story &amp; <span>Blog</span>
                            </h2>
                        </div>
                        {/* /.title-style-three */}
                        <Blog/>
                    </div>
                </div>
                {/* /.blog-section-three */}

                <Contact/> {/* /.Fancy Feature 21 end */}

                <div className="partner-section-two mt-30 mb-130 lg-mb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 m-auto">
                                <BrandTwo/>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.partner-section-two */}

                <div className="footer-style-four theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="subscribe-area">
                                <CallToAction/>
                            </div>
                            {/* /.subscribe-area */}

                            <FooterFour/> {/* /.FooterFour End */}

                            <div className="bottom-footer">
                                <CopyRightFour/>
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

export default UserAnalysis