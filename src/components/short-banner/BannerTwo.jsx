import React,{Fragment} from 'react'

const BannerTwo = () => {
    return (
        <Fragment>
            <div className="row align-items-top">
                <div className="col-xl-5 col-lg-6 order-lg-last" data-aos="fade-left">
                    <div className="title-style-two">
                        <div className="sc-title">DOWNLOAD APP</div>
                        <h2 className="main-title">Get our mobile Application.</h2>
                        <p className="sub-title">Get our mobile app for best &amp; fast chatboot services</p>
                    </div>
                    {/* /.title-style-two */}
                    <div className="d-sm-flex align-items-center button-group mt-40 lg-mt-30">
                        <a href="#" className="d-flex align-items-center windows-button">
                            <img src="images/icon/playstore.svg" alt="" className="icon"/>
                            <div>
                                <span>Get it on</span>
                                <strong>Google play</strong>
                            </div>
                        </a>
                        <a href="#" className="d-flex align-items-center ios-button">
                            <img src="images/icon/apple.svg" alt="" className="icon"/>
                            <div>
                                <span>Download on the</span>
                                <strong>App store</strong>
                            </div>
                        </a>
                    </div>
                    {/* /.button-group */}
                </div>
                <div
                    className="col-xxl-6 col-xl-7 col-md-6 col-sm-9 order-lg-first m-auto me-lg-0 ms-lg-0">
                    <div className="mobile-screen md-mt-40" data-aos="fade-up"><img src="images/media/screen_01.png" alt=""/></div>
                </div>
            </div>
        </Fragment>
    )
}

export default BannerTwo