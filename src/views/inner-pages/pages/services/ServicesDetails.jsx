import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import TopNavFour from '../../../../components/header/TopNavFour';
import CircularProgress from '../../../../components/skill/CircularProgress';
import BlockStyle15 from '../../../../components/blockStyle/BlockStyle15';
import BannerFive from '../../../../components/short-banner/BannerFive';
import NewsLetterForm from '../../../../components/form/NewsLetterForm';
import FooterFour from '../../../../components/footer/FooterFour';
import CopyRightFour from '../../../../components/footer/CopyRightFour';

const ServicesDetails = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Service Details || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <div className="container">
                        <h2 className="intro-title">Machine <span>Learning</span>
                        </h2>
                        <ul className="page-breadcrumb style-none d-flex">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="current-page">Service Details</li>
                        </ul>
                    </div>
                    <img src="images/assets/ils_20.svg" alt="" className="shapes illustration-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div
                    className="service-details position-relative mt-160 mb-150 lg-mt-100 lg-mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 order-lg-1">
                                <div className="service-details-meta ps-lg-5 ms-xxl-4">
                                    <h2 className="main-title">Delivering the insights you to help business growth</h2>
                                    <p>To take a trivial example, which of us ever under- takes laborious physical
                                        exercise, except to obtain some advantage from it but who has any right find
                                        fault with a man who chooses to enjoy a get pleasure that annoying. Undertakes
                                        laborious physical exercise, except to obtain some advantage from it but who has
                                        any find fault with a man who chooses.</p>
                                    <img src="images/media/img_13.jpg" alt="" className="main-img-meta"/>
                                    <h3 className="sub-title">Technology we use</h3>
                                    <p>Evernote Web offers a complete lineup of features from any major Maecena quis
                                        interdum, orci at euis dapibus, mass ante pharetra tellus done.</p>
                                    <div>
                                        <BlockStyle15/>
                                    </div>
                                    <div className="mt-75 lg-mt-50">
                                        <div className="row gx-xxl-5">
                                            <div className="col-lg-6">
                                                <h3 className="sub-title">Our Goal</h3>
                                                <ul className="style-none list-item md-mb-40">
                                                    <li>Various analysis options.</li>
                                                    <li>Page Load (time, number of requests).</li>
                                                    <li>Big data analysis.</li>
                                                    <li>Lorem analysis somthing</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <h3 className="sub-title">The Challange</h3>
                                                <p>Evernote Web offers a complete lineup of features from any major Maecena quis
                                                    interdum, orci at euis dapibus, mass ante pharetra tellus done.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-60 mb-20 lg-mt-40 lg-mb-10">
                                        <div className="row gx-xxl-5">
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="block-style-fifteen mb-30">
                                                    <div className="d-flex align-items-center">
                                                        <div className="text">
                                                            <h6>Success Ratio</h6>
                                                            <p>We’re best for our success work ration.</p>
                                                            <a href="#" className="details-btn">Details</a>
                                                        </div>
                                                        {/* /.text */}
                                                        <div className="circle_percent" data-percent={86}>
                                                            <div className="circle_inners position-relative">
                                                                {/* <div className="round_per"/>
                                                                 */}
                                                                <CircularProgress number="86"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.block-style-fifteen */}
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="block-style-fifteen mb-30">
                                                    <div className="d-flex">
                                                        <div className="text">
                                                            <h6>Failure Ratio</h6>
                                                            <p>We’ve very low failur ratio in our work history.</p>
                                                            <a href="#" className="details-btn">Details</a>
                                                        </div>
                                                        {/* /.text */}
                                                        <div className="circle_percent">
                                                            <div className="circle_inners position-relative">
                                                                {/* <div className="round_per"/> */}
                                                                <CircularProgress number="44"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.block-style-fifteen */}
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
                                        orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
                                        dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                        interdum.</p>
                                </div>
                                {/* /.service-details-meta */}
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
                                <div className="service-sidebar md-mt-60">
                                    <div className="service-category mb-40">
                                        <ul className="style-none">
                                            <li className="current-page">
                                                <a href="#">Machine Learning</a>
                                            </li>
                                            <li>
                                                <a href="#">Big Data Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Chatboot</a>
                                            </li>
                                            <li>
                                                <a href="#">User Analysis</a>
                                            </li>
                                            <li>
                                                <a href="#">Artificial</a>
                                            </li>
                                            <li>
                                                <a href="#">Intelligence</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.service-category */}
                                    <div className="sidebar-quote mb-50">
                                        <ul className="style-none d-flex justify-content-center rating">
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                        </ul>
                                        <p>They not only understand what I say but read between the lines and also give
                                            me ideas of my own.</p>
                                        <div className="name">Rashed Kabir,
                                            <span>Designer</span>
                                        </div>
                                    </div>
                                    {/* /.sidebar-quote */}
                                    <div className="download-btn-group">
                                        <a href="#" className="d-flex tran3s mb-15">
                                            <i className="bi bi-file-earmark-pdf"/>
                                            <span>Download PDF</span>
                                        </a>
                                        <a href="#" className="d-flex tran3s mb-15">
                                            <i className="bi bi-file-earmark-text"/>
                                            <span>Company Report</span>
                                        </a>
                                    </div>
                                </div>
                                {/* /.service-sidebar */}
                            </div>
                        </div>
                    </div>
                    <img src="images/shape/shape_48.svg" alt="" className="shapes bg-shape"/>
                </div>
                {/* /.service-details */}

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

export default ServicesDetails