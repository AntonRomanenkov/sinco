import React, {Fragment, useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TabListContent = [
    'All',
    'Development',
    'Plugin',
    'Design',
    'Mobile App',
    'Branding'
];

const PortfolioContent = [
    {
        img: 'img_01',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: ''
    }, {
        img: 'img_02',
        tag: 'Design',
        pjname: 'UI, UX Design',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_03',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_04',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_05',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_06',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_07',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_08',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_04',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];

const Development = [
    {
        img: 'img_02',
        tag: 'Design',
        pjname: 'UI, UX Design',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_04',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_06',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_08',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];

const Plugin = [
    {
        img: 'img_01',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: ''
    }, {
        img: 'img_03',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_05',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_07',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_04',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];
const Design = [
    {
        img: 'img_03',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_04',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_07',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_08',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];
const MobileApp = [
    {
        img: 'img_02',
        tag: 'Design',
        pjname: 'UI, UX Design',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_05',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_07',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_04',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];
const Branding = [
    {
        img: 'img_01',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: ''
    }, {
        img: 'img_06',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_08',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];

const images = ["/images/gallery/img_01.jpg", "/images/gallery/img_02.jpg", "/images/gallery/img_03.jpg", "/images/gallery/img_04.jpg", "/images/gallery/img_05.jpg", "/images/gallery/img_06.jpg", "/images/gallery/img_07.jpg", "/images/gallery/img_08.jpg"];

const PortfolioGalleryTwo = () => {

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
                <TabList className="style-none text-center isotop-menu-wrapper g-control-nav-one pb-30 lg-pb-10">
                    {TabListContent.map((tab, i) => (
                        <Tab key={i}>{tab}</Tab>
                    ))}
                </TabList>

                <TabPanel>
                    
                    <div className="row gx-xxl-5">
                        {PortfolioContent.map((val, i) => (
                            <div
                                key={i}
                                className="col-lg-4 col-sm-6"
                                data-aos={val.fade}
                                data-aos-delay={val.dataDelay}>
                                <div className="portfolio-block-one mt-40 xs-mt-30">
                                    <div className="img-meta"><img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/></div>
                                    <Link
                                        to="/portfolio-details"
                                        className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">{val.tag}</span>
                                        <span className="pj-name">{val.pjname}</span>
                                    </Link>
                                    <div className="hover-state tran3s">
                                        <a
                                            href="#"
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="fancybox tran3s"
                                            title="Click for large view"><i className={val.plus}/></a>
                                    </div>
                                </div>
                                {/* /.portfolio-block-one */}
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gx-xxl-5">
                        {Development.map((val, i) => (
                            <div
                                key={i}
                                className="col-lg-4 col-sm-6"
                                data-aos={val.fade}
                                data-aos-delay={val.dataDelay}>
                                <div className="portfolio-block-one mt-40 xs-mt-30">
                                    <div className="img-meta"><img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/></div>
                                    <Link
                                        to="/portfolio-details"
                                        className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">{val.tag}</span>
                                        <span className="pj-name">{val.pjname}</span>
                                    </Link>
                                    <div className="hover-state tran3s">
                                        <a
                                            href="#"
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="fancybox tran3s"
                                            title="Click for large view"><i className={val.plus}/></a>
                                    </div>
                                </div>
                                {/* /.portfolio-block-one */}
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gx-xxl-5">
                        {Plugin.map((val, i) => (
                            <div
                                key={i}
                                className="col-lg-4 col-sm-6"
                                data-aos={val.fade}
                                data-aos-delay={val.dataDelay}>
                                <div className="portfolio-block-one mt-40 xs-mt-30">
                                    <div className="img-meta"><img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/></div>
                                    <Link
                                        to="/portfolio-details"
                                        className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">{val.tag}</span>
                                        <span className="pj-name">{val.pjname}</span>
                                    </Link>
                                    <div className="hover-state tran3s">
                                        <a
                                            href="#"
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="fancybox tran3s"
                                            title="Click for large view"><i className={val.plus}/></a>
                                    </div>
                                </div>
                                {/* /.portfolio-block-one */}
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gx-xxl-5">
                        {Design.map((val, i) => (
                            <div
                                key={i}
                                className="col-lg-4 col-sm-6"
                                data-aos={val.fade}
                                data-aos-delay={val.dataDelay}>
                                <div className="portfolio-block-one mt-40 xs-mt-30">
                                    <div className="img-meta"><img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/></div>
                                    <Link
                                        to="/portfolio-details"
                                        className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">{val.tag}</span>
                                        <span className="pj-name">{val.pjname}</span>
                                    </Link>
                                    <div className="hover-state tran3s">
                                        <a
                                            href="#"
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="fancybox tran3s"
                                            title="Click for large view"><i className={val.plus}/></a>
                                    </div>
                                </div>
                                {/* /.portfolio-block-one */}
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gx-xxl-5">
                        {MobileApp.map((val, i) => (
                            <div
                                key={i}
                                className="col-lg-4 col-sm-6"
                                data-aos={val.fade}
                                data-aos-delay={val.dataDelay}>
                                <div className="portfolio-block-one mt-40 xs-mt-30">
                                    <div className="img-meta"><img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/></div>
                                    <Link
                                        to="/portfolio-details"
                                        className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">{val.tag}</span>
                                        <span className="pj-name">{val.pjname}</span>
                                    </Link>
                                    <div className="hover-state tran3s">
                                        <a
                                            href="#"
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="fancybox tran3s"
                                            title="Click for large view"><i className={val.plus}/></a>
                                    </div>
                                </div>
                                {/* /.portfolio-block-one */}
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row gx-xxl-5">
                        {Branding.map((val, i) => (
                            <div
                                key={i}
                                className="col-lg-4 col-sm-6"
                                data-aos={val.fade}
                                data-aos-delay={val.dataDelay}>
                                <div className="portfolio-block-one mt-40 xs-mt-30">
                                    <div className="img-meta"><img src={`images/gallery/${val.img}.jpg`} alt="" className="w-100"/></div>
                                    <Link
                                        to="/portfolio-details"
                                        className="title tran3s d-flex flex-column justify-content-center align-items-center">
                                        <span className="tag">{val.tag}</span>
                                        <span className="pj-name">{val.pjname}</span>
                                    </Link>
                                    <div className="hover-state tran3s">
                                        <a
                                            href="#"
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="fancybox tran3s"
                                            title="Click for large view"><i className={val.plus}/></a>
                                    </div>
                                </div>
                                {/* /.portfolio-block-one */}
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>

        </Fragment>
    )
}

export default PortfolioGalleryTwo