import React, {Fragment} from 'react';

const About = () => {
    return (
        <Fragment>
            <div
                className="fancy-feature-eighteen position-relative pt-200 pb-225 lg-pt-130 md-pt-100 xl-pb-150 lg-pb-100">
                < div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-7 ms-auto">
                            <div className="block-style-two" data-aos="fade-left">
                                <div className="title-style-three">
                                    <div className="sc-title">Over 150k+ Client</div>
                                    <h2 className="main-title">Target <span>Audience</span> for your business.</h2>
                                </div>
                                {/* /.title-style-three */}
                                <p className="pt-20 pb-25 lg-pb-20">AI technology is perfect for best business
                                    solutions &amp; we offer help to achieve your goals.</p>
                                <ul className="style-none list-item color-rev">
                                    <li>Various analysis options.</li>
                                    <li>Page Load (time, size, number of requests).</li>
                                    <li>Advance Data analysis operation.</li>
                                </ul>
                                <a href="about-us2.html" className="btn-eight mt-50 lg-mt-30">More about us</a>
                            </div>
                            {/* /.block-style-two */}
                        </div>
                    </div>
                </div>

                <div className="illustration-holder" data-aos="fade-right">
                    <img src="images/assets/ils_14.svg" alt="" className="w-100 main-illustration"/>
                    <img
                        src="images/assets/ils_14_1.svg"
                        alt=""
                        className="shapes shape-one"
                        data-aos="fade-down"/>
                    <img
                        src="images/assets/ils_14_2.svg"
                        alt=""
                        className="shapes shape-two"
                        data-aos="fade-down"
                        data-aos-delay={100}/>
                    <img
                        src="images/assets/ils_14_3.svg"
                        alt=""
                        className="shapes shape-three"
                        data-aos="fade-down"
                        data-aos-delay={200}/>
                    <img src="images/assets/ils_14_4.svg" alt="" className="shapes shape-four"/>
                    <img src="images/assets/ils_14_5.svg" alt="" className="shapes shape-five"/>
                    <img src="images/assets/ils_14_6.svg" alt="" className="shapes shape-six"/>
                    <img src="images/assets/ils_14_7.svg" alt="" className="shapes shape-seven"/>
                </div>
                {/* /.illustration-holder */}
                <div className="shapes oval-one"/>
                <div className="shapes oval-two"/>
                <div className="shapes oval-three"/>
            </div>
        </Fragment>
    )
}

export default About