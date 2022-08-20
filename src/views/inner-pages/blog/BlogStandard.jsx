import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';


import TopNavFour from '../../../components/header/TopNavFour';
import InnerBanner from '../../../components/page-title/InnerBanner';
import BlogStandardOne from '../../../components/blog/BlogStandardOne';
import Category from '../../../components/blog/Category';
import SearchInput from '../../../components/form/SearchInput';
import Keyword from '../../../components/blog/Keyword';
import BannerAdd from '../../../components/blog/BannerAdd';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import BannerFive from '../../../components/short-banner/BannerFive';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';

const BlogStandard = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Blog Standard || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="Blog Standard" currpage="Blog"/>
                    <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div className="blog-section-four pt-90 mb-150 lg-pt-40 lg-mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-11 m-auto">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <BlogStandardOne />
                                        <div className="page-pagination-one pt-90">
                                            <ul className="d-flex align-items-center style-none">
                                                <li className="active">
                                                    <a href="#">1</a>
                                                </li>
                                                <li>
                                                    <a href="#">2</a>
                                                </li>
                                                <li>
                                                    <a href="#">3</a>
                                                </li>
                                                <li className="arrow">
                                                    <a href="#"><i className="bi bi-arrow-right"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="blog-sidebar ps-xl-5 ps-lg-3 me-xxl-5 mt-45 md-mt-70">
                                            <div className="sidebar-search mb-45">
                                                <SearchInput />
                                            </div>
                                            <div className="sidebar-category mb-50">
                                                <h5 className="sidebar-title">Category</h5>
                                                <Category />
                                            </div>
                                            <div className="sidebar-keyword mb-50">
                                                <h5 className="sidebar-title">Keywords</h5>
                                                <Keyword />
                                            </div>
                                            <BannerAdd />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.blog-section-four */}

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
                                            <NewsLetterForm/>
                                            <p>We only send interesting and relevant emails.</p>
                                        </div>
                                        {/* /.subscribe-form */}
                                    </div>
                                </div>
                            </div>
                            {/* /.subscribe-area */}
                            <FooterFour/>
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

export default BlogStandard