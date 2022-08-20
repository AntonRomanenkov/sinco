import React, { Fragment, useState } from 'react';
import ModalVideos from '../ModalVideo/ModalVideos';


const HeroBannerFive = () => {
    const [open, setOpen] = useState(false);
    const OpenModal = () => {
        setOpen(!open)
    }
    return (
        <Fragment>
            <ModalVideos isOpen={open} onClick={OpenModal} />
            <div className="hero-banner-five">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-md-7">
                            <h1 className="hero-heading">Customer Ai Solution for user <span>Analystics.</span></h1>
                            <p className="text-lg mb-50 pt-40 pe-xl-5 md-pt-30 md-mb-40">Sinco delivered blazing fast, striking ai solution lorem quis data user learning analysis.</p>
                            <ul className="style-none button-group d-flex align-items-center">
                                <li className="me-4"><a href="contact-us.html" className="demo-btn ripple-btn tran3s">Request A Demo</a></li>
                                <li><a className="fancybox video-icon tran3s" data-fancybox href="#" onClick={OpenModal} ><i className="fas fa-play" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/* /.container */}
                <div className="illustration-holder">
                    <img src="images/assets/ils_13.svg" alt="" className="main-illustration ms-auto" />
                    <img src="images/assets/ils_13_1.svg" alt="" className="shapes shape-one" />
                    <img src="images/assets/ils_13_2.svg" alt="" className="shapes shape-two" data-aos="fade-down" />
                    <img src="images/assets/ils_13_2.svg" alt="" className="shapes shape-three" data-aos="fade-down" />
                </div> {/* /.illustration-holder */}
                <div className="shapes oval-one" />
            </div> {/* /.hero-banner-five */}

        </Fragment>
    )
}

export default HeroBannerFive