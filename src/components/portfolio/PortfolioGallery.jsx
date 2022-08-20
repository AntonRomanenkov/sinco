import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



const PortfolioContent = [
    {
        img:'img_01',
        tag: 'Data Research',
        pjname:'Product Analysis',
        plus: 'bi bi-plus',
    },
    {
        img:'img_02',
        tag: 'Design',
        pjname:'UI, UX Design',
        plus: 'bi bi-plus',
    },
    {
        img:'img_03',
        tag: 'Marketing',
        pjname:'Content Marketing',
        plus: 'bi bi-plus',
    },
    {
        img:'img_04',
        tag: 'Development',
        pjname:'Market System',
        plus: 'bi bi-plus',
    },
    {
        img:'img_01',
        tag: 'Marketing',
        pjname:'Content Marketing',
        plus: 'bi bi-plus',
    },
]

const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const images = [
    "/images/gallery/img_01.jpg",
    "/images/gallery/img_02.jpg",
    "/images/gallery/img_03.jpg",
    "/images/gallery/img_04.jpg",
    "/images/gallery/img_01.jpg",
  ];

const PortfolioGallery = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    
    return (
        <Fragment>
           
      {!!isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
            <Slider {...settings} className="portfolio_slider_one">
                {PortfolioContent.map((val, i)=>(
                    <div key={i} className="item">
                    <div className="portfolio-block-one">
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
            </Slider>
        </Fragment>
    )
}

export default PortfolioGallery