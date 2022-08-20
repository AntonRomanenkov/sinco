import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import CopyRightFour from '../../../components/footer/CopyRightFour';
import FooterFour from '../../../components/footer/FooterFour';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import TopNavFour from '../../../components/header/TopNavFour';
import InnerBanner from '../../../components/page-title/InnerBanner';
import PricingTab from '../../../components/pricing/pricetab/PricingTab';
import PriceTwo from '../../../components/pricing/PriceTwo';
import BannerFive from '../../../components/short-banner/BannerFive';

const OurPricing = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Our Pricing || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="Our Pricing" currpage="Pricing"/>
                    <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div className="pricing-section-one mt-130 lg-mt-110">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-xxl-7 col-xl-8 col-lg-7 col-md-9 m-auto">
                                <div className="title-style-one text-center">
                                    <h2 className="main-title">Solo, Agency or Team? We’ve got you Covered</h2>
                                </div>
                                {/* /.title-style-one */}
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                    <div className="pricing-table-area-one" data-aos="fade-up" data-aos-delay={100}>
                        <div className="container">
                            <PricingTab />
                            {/* /.tab-content */}
                            <div className="msg-note mt-80 lg-mt-50" data-aos="fade-up">If you Need any Custom or others Pricing System. <br/> Please <a href="contact-us.html">Send Message</a>
                            </div>
                        </div>
                    </div>
                    {/* /.pricing-table-area-one */}
                </div>
                {/* /.pricing-section-one */}

                <div
                    className="pricing-section-two position-relative mt-150 mb-180 lg-mt-80 lg-mb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 col-md-8 m-auto">
                                <div className="title-style-one text-center mb-20" data-aos="fade-up">
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

export default OurPricing