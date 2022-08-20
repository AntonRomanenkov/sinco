import React, {Fragment, useState} from 'react';
import {Helmet} from 'react-helmet';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


import TopNavFour from '../../../components/header/TopNavFour';
import InnerBanner from '../../../components/page-title/InnerBanner';
import BannerOne from '../../../components/short-banner/BannerOne';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';
import BlockStyleSixteen from '../../../components/blockStyle/BlockStyleSixteen';

const images = ["/images/gallery/img_21.jpg", "/images/gallery/img_19.jpg", "/images/gallery/img_18.jpg",];

const PortfolioSingle = () => {
    const [isOpen,
        setIsOpen] = useState(false);
    const [photoIndex,
        setPhotoIndex] = useState(0);
    return (
        <Fragment>
             {!!isOpen && (<Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}/>)}
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Portfolio Single || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="Project Details" currpage="Single Project"/>
                    <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div className="pr-details-one mt-120 lg-mt-90 mb-170 lg-mb-100">
                    <div className="container">
                        <div className="wrapper ps-xxl-4 pe-xxl-4 ms-xxl-5 me-xxl-5">
                            <div className="row gx-xxl-5">
                                <div className="col-lg-6">
                                    <div className="title-style-five">
                                        <div className="upper-title">Redesign, Branding</div>
                                        <h2 className="main-title">Website page re-design with Branding.</h2>
                                    </div>
                                    <div className="text-wrapper pt-30 md-pt-20">
                                        <p>We’ve created a unique visual system and strategy across the wide existing
                                            spectrum of visible mobile applications &amp; found yourself in a wide,
                                            straggling with.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="project-info ps-xl-5">
                                        <div className="row gx-xxl-5">
                                            <div className="col-sm-6 mb-25">
                                                <div className="pt-title">DATe</div>
                                                <div className="pt-text">23 July, 2020</div>
                                            </div>
                                            <div className="col-sm-6 mb-25">
                                                <div className="pt-title">Client</div>
                                                <div className="pt-text">17 Riverwood Drive, Central Califirnia, USA</div>
                                            </div>
                                            <div className="col-sm-6 mb-25">
                                                <div className="pt-title">Project Type</div>
                                                <div className="pt-text">Branding, Interface Design &amp; User Exprience</div>
                                            </div>
                                            <div className="col-sm-6 mb-25">
                                                <div className="pt-title">Duration</div>
                                                <div className="pt-text">2 Months 18 Days</div>
                                            </div>
                                        </div>
                                        <ul className="d-flex social-icon style-none mt-20">
                                            <li>
                                                <a href="#"><i className="fab fa-pinterest"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-twitter"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-linkedin-in"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.project-info */}
                                </div>
                            </div>
                            <div className="portfolio-block-two mt-40 mb-80 lg-mt-20 lg-mb-40">
                                <div className="img-meta">
                                    <img src="images/gallery/img_21.jpg" alt="" className="w-100"/>
                                    <div className="hover-state tran3s">
                                        <a
                                            className="fancybox tran3s"
                                            data-fancybox
                                            title="Click for large view"
                                            href="#"
                                            onClick={() => setIsOpen(!isOpen)}
                                            tabIndex={0}><i className="bi bi-plus"/></a>
                                    </div>
                                </div>
                            </div>
                            {/* /.portfolio-block-two */}
                            <h3 className="sub-title">Working Process</h3>
                            <BlockStyleSixteen />
                            <div
                                className="mt-80 pt-80 pb-40 mb-60 lg-mt-50 lg-pt-50 lg-pb-20 lg-mb-40 border-top border-bottom">
                                <div className="row gx-xxl-5">
                                    <div className="col-lg-6">
                                        <h3 className="sub-title">The Challange</h3>
                                        <p>Complete lineup of features from any major Maecena quis interdu, orci at euis
                                            dapibus, mass pharet ellus done. Any right to find fault with a man who chooses
                                            to enjoy a pleasure that has annoying consequences, or one who avoids.</p>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 ms-auto">
                                        <h3 className="sub-title">Our Goal</h3>
                                        <ul className="style-none list-item">
                                            <li>Various analysis options with ai.</li>
                                            <li>Page Load (time, number of requests) lorem quis.</li>
                                            <li>Big data analysis with fast process.R</li>
                                            <li>Lorem analysis somthing quis dummy.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h3 className="sub-title">Result</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
                                orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
                                dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        {/* /.wrapper */}
                    </div>
                </div>
                {/* /.pr-details-one */}

                <div className="fancy-short-banner-one position-relative bottom-transform">
                    <div className="container">
                        <div className="bg-wrapper">
                            <BannerOne />
                        </div>
                        {/* /.bg-wrapper */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-short-banner-one */}

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

export default PortfolioSingle