import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

const AboutTwo = () => {
    return (
        <Fragment>
            <div className="fancy-feature-two position-relative mt-200 lg-mt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-lg-6 col-md-7 ms-auto">
                            <div className="block-style-two" data-aos="fade-left">
                                <div className="title-style-one">
                                    <div className="sc-title-three">Over 150k+ Client</div>
                                    <h2 className="main-title">World best AI for your business.
                                    </h2>
                                </div>
                                {/* /.title-style-one */}
                                <p className="pt-10 pb-20 lg-pb-10">AI technology is perfect for best business
                                    solutions &amp; we offer help to achieve your goals.</p>
                                <ul className="style-none list-item color-rev">
                                    <li>Various analysis options.</li>
                                    <li>Page Load (time, size, number of requests).</li>
                                    <li>Big data analysis.</li>
                                    <li>Advance Data analysis operation.</li>
                                </ul>
                                <div className="btn-three rev mt-55 lg-mt-30">Want to learn more about us? <Link to="/about-one">Click here <i className="fas fa-chevron-right"/></Link>
                                </div>
                            </div>
                            {/* /.block-style-two */}
                        </div>
                    </div>
                </div>
                {/* /.container */}
                <div className="illustration-holder-two sm-mt-40">
                    <img src="images/assets/ils_05.svg" alt="" className="main-illustration w-100"/>
                    <img src="images/assets/ils_05_1.svg" alt="" className="shapes shape-one"/>
                    <img
                        src="images/assets/ils_05_2.svg"
                        alt=""
                        className="shapes shape-two"
                        data-aos="fade-up"
                        data-aos-anchor=".fancy-feature-two"
                        data-aos-delay={100}
                        data-aos-duration={2000}/>
                    <img
                        src="images/assets/ils_05_3.svg"
                        alt=""
                        className="shapes shape-three"
                        data-aos="fade-up"
                        data-aos-anchor=".fancy-feature-two"
                        data-aos-delay={150}
                        data-aos-duration={2000}/>
                    <img src="images/assets/ils_05_4.svg" alt="" className="shapes shape-four"/>
                    <img src="images/assets/ils_05_5.svg" alt="" className="shapes shape-five"/>
                </div>
                {/* /.illustration-holder-two */}
            </div>
            {/* /.fancy-feature-two */}
        </Fragment>
    )
}

export default AboutTwo