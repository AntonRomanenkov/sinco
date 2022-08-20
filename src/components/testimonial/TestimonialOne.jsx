import React, {Fragment} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialContent = [
    {
        logo: 'Plogo-1',
        icon: 'icon_05',
        desc: `Certainly from my perspective quis been a great success with due WP giving us
        that enterprises level assured quality.`,
        text: 'Qulaity & Cost:',
        price: '5.00',
        logo2: 'Plogo-5',
    },
    {
        logo: 'Plogo-2',
        icon: 'icon_05',
        desc: `Certainly from my perspective quis been a great success with due WP giving us
        that enterprises level assured quality.`,
        text: 'Qulaity & Cost:',
        price: '35.00',
        logo2: 'Plogo-5',
    },
    {
        logo: 'Plogo-3',
        icon: 'icon_05',
        desc: `Certainly from my perspective quis been a great success with due WP giving us
        that enterprises level assured quality.`,
        text: 'Qulaity & Cost:',
        price: '19.00',
        logo2: 'Plogo-5',
    },
    {
        logo: 'Plogo-4',
        icon: 'icon_05',
        desc: `Certainly from my perspective quis been a great success with due WP giving us
        that enterprises level assured quality.`,
        text: 'Qulaity & Cost:',
        price: '15.00',
        logo2: 'Plogo-5',
    },
]

const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
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
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};

const TestimonialOne = () => {
    return (
        <Fragment>
            <Slider className="feedback_slider_one" {...settings1}>
                {TestimonialContent.map((val, i)=>(
                    <div key={i} className="item">
                    <div className="feedback-block-one margin-2">
                        <div className="top-header d-flex align-items-center justify-content-between">
                            <div>
                                <img src={`images/logo/${val.logo}.png`} alt=""/>
                                <ul className="style-none d-flex rating pt-15">
                                    <li><i className="bi bi-star-fill"/></li>
                                    <li><i className="bi bi-star-fill"/></li>
                                    <li><i className="bi bi-star-fill"/></li>
                                    <li><i className="bi bi-star-fill"/></li>
                                    <li><i className="bi bi-star-fill"/></li>
                                </ul>
                            </div>
                            <img src={`images/icon/${val.icon}.svg`} alt="" width={50}/>
                        </div>
                        {/* /.top-header */}
                        <p>Certainly from my perspective quis been a great success with due WP giving us
                            that enterprises level assured quality.</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="cost">
                                <span>{val.text}</span> {val.price}</div>
                            <img src={`images/logo/{val.logo2}.png`} alt=""/>
                        </div>
                    </div>
                    {/* /.feedback-block-one */}
                </div>
                ))}
            </Slider>
            {/* /.feedback_slider_one */}
        </Fragment>
    )
}

export default TestimonialOne