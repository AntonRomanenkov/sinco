import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';

import TopNavFour from '../../../components/header/TopNavFour';
import InnerBanner from '../../../components/page-title/InnerBanner';
import BlogDetailsForm from '../../../components/form/BlogDetailsForm';
import SearchInput from '../../../components/form/SearchInput';
import Category from '../../../components/blog/Category';
import Keyword from '../../../components/blog/Keyword';
import BannerAdd from '../../../components/blog/BannerAdd';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import BannerFive from '../../../components/short-banner/BannerFive';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';




const BlogDetails = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Blog Details || Sinco - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="Single Blog" currpage="Blog"/>
                    <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div className="blog-details pt-90 mb-150 lg-pt-40 lg-mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-11 m-auto">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <article className="blog-meta-three tran3s mt-45">
                                            <figure className="post-img m0"><img src="images/blog/blog_img_20.jpg" alt="" className="w-100 tran4s"/></figure>
                                            <div className="post-data">
                                                <div className="post-tag">
                                                    <a href="#">UI/UX Design</a>
                                                    - 10 minute read</div>
                                                <div className="blog-title">
                                                    <h4>How Ai Technology Work?</h4>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
                                                    orci mass ante pharetra tellus interdum. Tomfoolery crikey bits and bobs
                                                    brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse
                                                    over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur.
                                                    Excepteur sint occaecat cupidatat, Suspendisse interdum consectetur vel
                                                    facilisis volutpat est velit egestas.</p>
                                                <h5>This response is important for our ability to from mistakes but it alsogives
                                                    rise to self-criticism.</h5>
                                                <p>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet
                                                    ris nullam eget felis. Enim praesent elementum facilisis leo. Ultricies leo
                                                    integer. Lorem ipsum dolor sit amet, consectetur adipis elit quis extraction
                                                    labore.</p>
                                                <div
                                                    className="bottom-widget d-sm-flex align-items-center justify-content-between">
                                                    <ul className="d-flex tags style-none pt-10">
                                                        <li>Tag:</li>
                                                        <li>
                                                            <a href="#">Chatboot</a>,</li>
                                                        <li>
                                                            <a href="#">Intelligence</a>,</li>
                                                        <li>
                                                            <a href="#">Big Data</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="d-flex share-icon align-items-center style-none pt-10">
                                                        <li>Share:</li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-google"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-twitter"/></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="bi bi-instagram"/></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* /.post-data */}
                                        </article>
                                        <div className="blog-comment-area mt-60">
                                            <h3 className="blog-inner-title pb-15">2 Comments</h3>
                                            <div className="comment border-bottom d-flex">
                                                <img src="images/blog/avatar_01.jpg" alt="" className="user-avatar"/>
                                                <div className="comment-text">
                                                    <div className="name">Al Hasani</div>
                                                    <div className="date">13 June, 2018, 7:30pm</div>
                                                    <p>One touch of a red-hot stove is usually all we need to avoid that kind of
                                                        lorem discomfort in future. The same true we experience
                                                    </p>
                                                    <a href="#" className="reply-btn">Reply</a>
                                                </div>
                                                {/* /.comment-text */}
                                            </div>
                                            {/* /.comment */}
                                            <div className="comment d-flex">
                                                <img src="images/blog/avatar_02.jpg" alt="" className="user-avatar"/>
                                                <div className="comment-text">
                                                    <div className="name">Rashed ka.</div>
                                                    <div className="date">13 June, 2018, 7:30pm</div>
                                                    <p>One touch of a red-hot stove is usually all we need to avoid that kind of
                                                        lorem discomfort in future. The same true we experience
                                                    </p>
                                                    <a href="#" className="reply-btn">Reply</a>
                                                </div>
                                                {/* /.comment-text */}
                                            </div>
                                            {/* /.comment */}
                                        </div>
                                        <div className="blog-comment-form mt-60">
                                            <h3 className="blog-inner-title">Leave A Comment</h3>
                                            <p>
                                                <a href="#">Sign in</a> to post your comment or signup if you dont have any account.</p>
                                            <BlogDetailsForm />
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
                {/* /.blog-details */}

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

export default BlogDetails