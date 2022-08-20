import React, {Fragment} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderThree = [
    {
        img: 'img_05',
        icon: 'icon_15',
        desc: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue there live the blind texts separated.`,
        name: 'Martin Jonas',
        desig: 'Head of marketing, Inter inc.'
    }, {
        img: 'img_06',
        icon: 'icon_15',
        desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost you have looked.`,
        name: 'Carolyna Tylor',
        desig: 'Senior Developer, Sinco inc.'
    }, {
        img: 'img_07',
        icon: 'icon_15',
        desc: `It’s a great exprience to work with Sinco. They’r vey humble and expert & the service has been excellent. The author is very quick and nice when it comes to support.`,
        name: 'Rebecca Jones',
        desig: 'Senior UX Designer, Hamina_Themes.'
    }
]

const settings3 = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
};
const TestimonialThree = () => {

    return (
        <Fragment>
            <Slider className="feedback_slider_three" {...settings3}>
                {SliderThree.map((val, i) => (
                    <div key={i} className="item">
                        <div className="feedback-block-three d-md-flex">
                            <div className="img-meta">
                                <img src={`images/media/${val.img}.jpg`} alt=""/>
                            </div>
                            <div className="text-wrapper">
                                <div className="icon d-flex justify-content-center align-items-center"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                                <p>{val.desc}</p>
                                <div className="name">
                                    <h6>{val.name}</h6>
                                    <span>{val.desig}</span>
                                </div>
                                {/* /.name */}
                            </div>
                            {/* /.text-wrapper */}
                        </div>
                        {/* /.feedback-block-three */}
                    </div>
                ))}
            </Slider>
            {/* /.feedback_slider_three */}
        </Fragment >
    )
}

export default TestimonialThree