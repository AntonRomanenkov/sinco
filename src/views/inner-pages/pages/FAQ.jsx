import React from 'react';
import {Helmet} from 'react-helmet';
import TopNavFour from '../../../components/header/TopNavFour';
import InnerBanner from '../../../components/page-title/InnerBanner';
import FaqTwo from '../../../components/faq/FaqTwo';
import NewsLetterForm from '../../../components/form/NewsLetterForm'
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';

const FAQ = () => {
    return (
        <div className="main-page-wrapper">
            <Helmet>
                <title>Faq || Sinco - Data Science & Analytics React Template</title>
            </Helmet>
            {/* helmet end */}

            <TopNavFour/> {/* theme-menu-four */}

            <div className="theme-inner-banner">
                <InnerBanner intro="Questions &amp; Answers" currpage="Faq"/>
                <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
            </div>
            {/* /.theme-inner-banner */}

            <div className="faq-section-one mt-130 mb-150 lg-mt-80 lg-mb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-10 col-xl-11 m-auto">
                            <div className="row">
                                <div className="col-xl-4 col-lg-3">
                                    <ul className="faq-list-item style-none md-mb-60">
                                        <li className="active">
                                            <a href="#">1. <span>Makreting</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">2. <span>Buying</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">3. <span>User Manual</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">4. <span>Payments</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">5. <span>Terms &amp; Conditions</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">6. <span>Account</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-8 col-lg-9" data-aos="fade-left">
                                    <h3 className="faq-title">Marketing</h3>
                                    <FaqTwo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container */}
            </div>
            {/* /.faq-section-one */}

            <div className="footer-style-four theme-basic-footer">
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
    )
}

export default FAQ