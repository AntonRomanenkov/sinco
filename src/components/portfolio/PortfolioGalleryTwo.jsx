import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const PortfolioContent = [
    {
        img: 'img_01',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-up',
        dataDelay: '',
    }, {
        img: 'img_02',
        tag: 'Design',
        pjname: 'UI, UX Design',
        plus: 'bi bi-plus',
        fade: 'fade-up',
        dataDelay: '100',
    }, {
        img: 'img_03',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-up',
        dataDelay: '200',
    }, {
        img: 'img_04',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-up',
        dataDelay: '100',
    }, {
        img: 'img_05',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-up',
        dataDelay: '200',
    }, {
        img: 'img_06',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-up',
        dataDelay: '200',
    }
]


const images = ["/images/gallery/img_01.jpg", "/images/gallery/img_02.jpg", "/images/gallery/img_03.jpg", "/images/gallery/img_04.jpg", "/images/gallery/img_05.jpg"];

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
            <div className="row gx-xxl-5">
                {PortfolioContent.map((val, i) => (
                    <div
                        key={i}
                        className="col-lg-4 col-sm-6"
                        data-aos={val.fade}
                        data-aos-delay={val.dataDelay}>
                        <div className="portfolio-block-one mt-40">
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
        </Fragment>
    )
}

export default PortfolioGalleryTwo