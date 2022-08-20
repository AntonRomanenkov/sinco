import React, {Fragment, useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const TabListContent = [
    'All',
    'Development',
    'Plugin',
    'Design',
    'Mobile App',
    'Branding'
];

const PortfolioContent4 = [
    {
        img: 'img_15',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: ''
    }, {
        img: 'img_16',
        tag: 'Design',
        pjname: 'UI, UX Design',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_17',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_18',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_19',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_20',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];

const Development = [
    {
        img: 'img_16',
        tag: 'Design',
        pjname: 'UI, UX Design',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_18',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_20',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];

const Plugin = [
    {
        img: 'img_15',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: ''
    }, {
        img: 'img_17',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_19',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];
const Design = [
    {
        img: 'img_18',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_17',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }
];
const MobileApp = [
    {
        img: 'img_16',
        tag: 'Design',
        pjname: 'UI, UX Design',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_19',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];
const Branding = [
    {
        img: 'img_15',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: ''
    }, {
        img: 'img_20',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];

const images = [
    "/images/gallery/img_15.jpg",
    "/images/gallery/img_16.jpg",
    "/images/gallery/img_18.jpg",
    "/images/gallery/img_17.jpg",
    "/images/gallery/img_19.jpg",
    "/images/gallery/img_20.jpg"
];

const PortfolioGalleryFive = () => {

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
            <Tabs>
                <TabList
                    className="style-none text-center isotop-menu-wrapper g-control-nav-one pb-30 lg-pb-10">
                    {TabListContent.map((tab, i) => (
                        <Tab key={i}>{tab}</Tab>
                    ))}
                </TabList>

                <TabPanel>
                    
                    <div
                        id="isotop-gallery-wrapper"
                        class="grid-2column custom-container">
                        <ResponsiveMasonry columnsCountBreakPoints={{575: 1, 576: 2}}>
                            <Masonry>
                                {PortfolioContent4.map((val, i) => (
                                    <div
                                        key={i}
                                        className="isotop-item"
                                        data-aos={val.fade}
                                        data-aos-delay={val.dataDelay}>
                                        <div className="portfolio-block-two mt-25">
                                            <div className="img-meta">
                                                <img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/>
                                                <div className="hover-state tran3s">
                                                    <a
                                                        className="fancybox tran3s"
                                                        data-fancybox
                                                        title="Click for large view"
                                                        href="#"
                                                        onClick={() => setIsOpen(!isOpen)}
                                                        tabIndex={0}><i className={val.plus}/></a>
                                                </div>
                                            </div>
                                            <Link
                                                to="/portfolio-details"
                                                className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                                <span className="tag">{val.tag}</span>
                                                <span className="pj-name">{val.pjname}</span>
                                            </Link>
                                        </div>
                                        {/* /.portfolio-block-two */}
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </TabPanel>
                <TabPanel>
                    
                    <div
                        id="isotop-gallery-wrapper"
                        class="grid-2column custom-container">
                        <ResponsiveMasonry columnsCountBreakPoints={{575: 1, 576: 2}}>
                            <Masonry>
                            {Development.map((val, i) => (
                                <div
                                    key={i}
                                    className="isotop-item col-md-6"
                                    data-aos={val.fade}
                                    data-aos-delay={val.dataDelay}>
                                    <div className="portfolio-block-two mt-25">
                                        <div className="img-meta">
                                            <img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/>
                                            <div className="hover-state tran3s">
                                                <a
                                                    className="fancybox tran3s"
                                                    data-fancybox
                                                    title="Click for large view"
                                                    href="#"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    tabIndex={0}><i className={val.plus}/></a>
                                            </div>
                                        </div>
                                        <Link
                                            to="/portfolio-details"
                                            className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                            <span className="tag">{val.tag}</span>
                                            <span className="pj-name">{val.pjname}</span>
                                        </Link>
                                    </div>
                                    {/* /.portfolio-block-two */}
                                </div>
                            ))}
                        </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div
                        id="isotop-gallery-wrapper"
                        class="grid-2column custom-container">
                         <ResponsiveMasonry columnsCountBreakPoints={{575: 1, 576: 2}}>
                            <Masonry>
                            {Plugin.map((val, i) => (
                                <div
                                    key={i}
                                    className="isotop-item"
                                    data-aos={val.fade}
                                    data-aos-delay={val.dataDelay}>
                                    <div className="portfolio-block-two mt-25">
                                        <div className="img-meta">
                                            <img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/>
                                            <div className="hover-state tran3s">
                                                <a
                                                    className="fancybox tran3s"
                                                    title="Click for large view"
                                                    href="#"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    ><i className={val.plus}/></a>
                                            </div>
                                        </div>
                                        <Link
                                            to="/portfolio-details"
                                            className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                            <span className="tag">{val.tag}</span>
                                            <span className="pj-name">{val.pjname}</span>
                                        </Link>
                                    </div>
                                    {/* /.portfolio-block-two */}
                                </div>
                            ))}
                            </Masonry>
                        </ResponsiveMasonry>
                        
                    </div>
                </TabPanel>
                <TabPanel>
                    <div
                        id="isotop-gallery-wrapper"
                        class="grid-2column custom-container">
                         <ResponsiveMasonry columnsCountBreakPoints={{575: 1, 576: 2}}>
                            <Masonry>
                            {Design.map((val, i) => (
                                <div
                                    key={i}
                                    className="isotop-item"
                                    data-aos={val.fade}
                                    data-aos-delay={val.dataDelay}>
                                    <div className="portfolio-block-two mt-25">
                                        <div className="img-meta">
                                            <img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/>
                                            <div className="hover-state tran3s">
                                                <a
                                                    className="fancybox tran3s"
                                                    data-fancybox
                                                    title="Click for large view"
                                                    href="#"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    tabIndex={0}><i className={val.plus}/></a>
                                            </div>
                                        </div>
                                        <Link
                                            to="/portfolio-details"
                                            className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                            <span className="tag">{val.tag}</span>
                                            <span className="pj-name">{val.pjname}</span>
                                        </Link>
                                    </div>
                                    {/* /.portfolio-block-two */}
                                </div>
                            ))}
                            </Masonry>
                        </ResponsiveMasonry>
                        
                    </div>
                </TabPanel>
                <TabPanel>
                    <div
                        id="isotop-gallery-wrapper"
                        class="grid-2column custom-container">
                         <ResponsiveMasonry columnsCountBreakPoints={{575: 1, 576: 2}}>
                            <Masonry>
                            {MobileApp.map((val, i) => (
                                <div
                                    key={i}
                                    className="isotop-item"
                                    data-aos={val.fade}
                                    data-aos-delay={val.dataDelay}>
                                    <div className="portfolio-block-two mt-25">
                                        <div className="img-meta">
                                            <img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/>
                                            <div className="hover-state tran3s">
                                                <a
                                                    className="fancybox tran3s"
                                                    data-fancybox
                                                    title="Click for large view"
                                                    href="#"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    tabIndex={0}><i className={val.plus}/></a>
                                            </div>
                                        </div>
                                        <Link
                                            to="/portfolio-details"
                                            className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                            <span className="tag">{val.tag}</span>
                                            <span className="pj-name">{val.pjname}</span>
                                        </Link>
                                    </div>
                                    {/* /.portfolio-block-two */}
                                </div>
                            ))}
                            </Masonry>
                        </ResponsiveMasonry>
                        
                    </div>
                </TabPanel>
                <TabPanel>
                    <div
                        id="isotop-gallery-wrapper"
                        class="grid-2column custom-container">
                         <ResponsiveMasonry columnsCountBreakPoints={{575: 1, 576: 2}}>
                            <Masonry>
                            {Branding.map((val, i) => (
                                <div
                                    key={i}
                                    className="isotop-item"
                                    data-aos={val.fade}
                                    data-aos-delay={val.dataDelay}>
                                    <div className="portfolio-block-two mt-25">
                                        <div className="img-meta">
                                            <img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/>
                                            <div className="hover-state tran3s">
                                                <a
                                                    className="fancybox tran3s"
                                                    data-fancybox
                                                    title="Click for large view"
                                                    href="#"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    tabIndex={0}><i className={val.plus}/></a>
                                            </div>
                                        </div>
                                        <Link
                                            to="/portfolio-details"
                                            className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                            <span className="tag">{val.tag}</span>
                                            <span className="pj-name">{val.pjname}</span>
                                        </Link>
                                    </div>
                                    {/* /.portfolio-block-two */}
                                </div>
                            ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </TabPanel>
            </Tabs>

        </Fragment>
    )
}

export default PortfolioGalleryFive
