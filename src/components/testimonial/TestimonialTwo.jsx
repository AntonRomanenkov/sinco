import React, {Fragment, useRef, useState} from 'react';
import Slider from 'react-slick';
import ModalVideos from '../ModalVideo/ModalVideos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContent = [
    {
        img: 'img_01',
        icon: 'bi bi-play-fill',
        plogo: 'Plogo-15',
        title: 'Giant cloud service inc',
        desc: 'We’v 9,000 agents across around the country, Find agents near your neighborhood.',
        text: 'Continue Reading',
        arrow: 'icon_14'
    },
    {
        img: 'img_02',
        icon: 'bi bi-play-fill',
        plogo: 'Plogo-4',
        title: 'UK Marketing Agency.',
        desc: 'We’v 9,000 agents across around the country, Find agents near your neighborhood.',
        text: 'Continue Reading',
        arrow: 'icon_14'
    },
    {
        img: 'img_03',
        icon: 'bi bi-play-fill',
        plogo: 'Plogo-3',
        title: 'Netflix Marketing Agency.',
        desc: 'We’v 9,000 agents across around the country, Find agents near your neighborhood.',
        text: 'Continue Reading',
        arrow: 'icon_14'
    },
    {
        img: 'img_04',
        icon: 'bi bi-play-fill',
        plogo: 'Plogo-2',
        title: 'Sinco Digital Agency.',
        desc: 'We’v 9,000 agents across around the country, Find agents near your neighborhood.',
        text: 'Continue Reading',
        arrow: 'icon_14'
    },
]

const settings2 = {
    arrow:true,
    dots: false,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        }, 
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }, 
        // {
        //     breakpoint: 575,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
    ]
};




const TestimonialTwo = () => {
    const [isOpen,
        setOpen] = useState(false);

    const openModal = () => {
        setOpen(!isOpen)
    }


    return (
        <Fragment>
            <ModalVideos isOpen={isOpen} onClick={openModal}/>

            <Slider className="feedback_slider_two" {...settings2}>
                {SliderContent.map((val, i)=>(
                    <div className="item" key={i}>
                    <div className="feedback-block-two d-sm-flex">
                        <div className="img-meta">
                            <img src={`images/media/${val.img}.jpg`} alt="images"/>
                            <button className="fancybox video-icon" onClick={openModal}>
                                <i className={val.icon}/>
                            </button>
                        </div>
                        <div className="text-wrapper">
                            <div className="icon d-flex align-items-end"><img src={`images/logo/${val.plogo}.png`} alt="p-logo"/>
                            </div>
                            <div className="camp-name">{val.title}</div>
                            <p>{val.desc}</p>
                            <a
                                href="#"
                                className="read-btn d-flex align-items-center justify-content-between">
                                <span>{val.text}</span>
                                <img src={`images/icon/${val.arrow}.svg`} alt="" className="arrow"/>
                            </a>
                        </div>
                        {/* /.text-wrapper */}
                    </div>
                    {/* /.feedback-block-two */}
                </div>
                ))}
            </Slider>
            {/* /.feedback_slider_two */}
        </Fragment>
    )
}

export default TestimonialTwo