import React, { Fragment } from 'react';
import CommonCounter from './CommonCounter';


const CounterFour = () => {
    return (
        <Fragment>
            <div className="counter-section-one top-transform">
                <div className="container">
                    <div className="inner-container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-6" data-aos="fade-up">
                                <div className="counter-block-one color-two text-center mb-20 mt-10 lg-mt-20">
                                    <div className="main-count"><CommonCounter end={20} />mil</div>
                                    <p>Human labor hours saved <br /> with help of AI</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="counter-block-one color-two text-center mb-20 mt-10 lg-mt-20">
                                    <div className="main-count"><CommonCounter end={3} />b+</div>
                                    <p>Generated revenue by <br />AI Solutions</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="counter-block-one color-two text-center mb-20 mt-10 lg-mt-20">
                                    <div className="main-count">$<CommonCounter end={15} />mil+</div>
                                    <p>Saved operational costs <br />due to AI</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                        </div>
                    </div> {/* /.inner-container */}
                </div>
            </div> {/* /.counter-section-one */}

        </Fragment>
    )
}

export default CounterFour