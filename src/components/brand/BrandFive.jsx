import React, {Fragment} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true
            }
        }, 
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }, 
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

const BrandLogo = [
    {
        img: 'Plogo-22',
    }, 
    {
        img: 'Plogo-23',

    }, 
    {
        img: 'Plogo-24',
    }, 
    {
        img: 'Plogo-25',
    }, 
    {
        img: 'Plogo-23',
    }
]

const BrandFive = () => {
    return (
        <Fragment>
            
            <Slider className="partner_slider_one" {...settings}>
                {BrandLogo.map((item, i) => (
                    <div key={i} className="item">
                        <div className="icon d-flex align-items-center"><img src={`images/logo/${item.img}.png`} alt="" className="m-auto"/></div>
                    </div>
                ))}
            </Slider>
        </Fragment>
    )
}

export default BrandFive
