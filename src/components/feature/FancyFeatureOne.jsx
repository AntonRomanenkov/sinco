import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const ServiceContentOne = [
    {
        icon: 'icon_02',
        title:'Data Machine Learning.',
        text:'Learn more',
        arrow:'fas fa-chevron-right'
    },
    {
        icon: 'icon_03',
        title:'AI, Machine Learning',
        text:'Learn more',
        arrow:'fas fa-chevron-right'
    },
    {
        icon: 'icon_04',
        title:'Data Development',
        text:'Learn more',
        arrow:'fas fa-chevron-right'
    },
    {
        icon: 'icon_03',
        title:'Big Data Consulting',
        text:'Learn more',
        arrow:'fas fa-chevron-right'
    },
]

const settings4 = {
    infinite: true,
    speed: 500,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
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

const FancyFeatureOne = () => {
    return (
        <Fragment>
            <Slider className="service_slider_one" {...settings4}>
                {ServiceContentOne.map((val, i)=>(
                    <div key={i} className="item">
                    <div className="block-style-one text-center margin-lr">
                        <div
                            className="icon d-flex align-items-end justify-content-center mb-50 lg-mb-30"><img src={`images/icon/${val.icon}.svg`} alt="" className="m-auto"/></div>
                        <h5 className="mb-40">{val.title}</h5>
                        <Link to="/service-details" className="btn-two">{val.text}
                            <i className={val.arrow}/></Link>
                    </div>
                    {/* /.block-style-one */}
                </div>
                ))}
                {/* /.item */}
            </Slider>
        </Fragment>
    )
}

export default FancyFeatureOne