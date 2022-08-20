import React from 'react';
import {Helmet} from 'react-helmet';

import TopNavFour from '../../../components/header/TopNavFour';
import InnerBanner from '../../../components/page-title/InnerBanner';
import BannerFive from '../../../components/short-banner/BannerFive';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour'
import PortfolioGalleryThree from '../../../components/portfolio/PortfolioGalleryThree';

const Portfolio3Column = () => {
    return (
        <div className="main-page-wrapper">
            <Helmet>
                <title>Portfolio 3 Column || Sinco - Data Science & Analytics React Template</title>
            </Helmet>
            {/* helmet end */}

            <TopNavFour/> {/* theme-menu-four */}

            <div className="theme-inner-banner">
                <InnerBanner intro="Work Gallery" currpage="Portfolio"/>
                <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
            </div>
            {/* /.theme-inner-banner */}

            <div className="portfolio-gallery-three mt-140 mb-150 lg-mt-90 lg-mb-100">
                <div className="container">
                    <PortfolioGalleryThree />
                </div>
            </div>
            {/* /.portfolio-gallery-three */}

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
    )
}

export default Portfolio3Column