import React, { Fragment } from 'react'
import CommonCounter from './CommonCounter'


const CounterSix = () => {
    return (
        <Fragment>
            <div className="counter-section-one">
                <div className="inner-container bg-color style-two rounded-0 w-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-6" data-aos="fade-up">
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count"><span className="counter"><CommonCounter /> </span>mil</div>
                                    <p>Human labor hours saved <br /> with help of AI</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count"><span className="counter">1.3</span>b+</div>
                                    <p>Generated revenue by <br />AI Solutions</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count">$<span className="counter">15</span>mil+</div>
                                    <p>Saved operational costs <br />due to AI</p>
                                </div> {/* /.counter-block-one */}
                            </div>
                        </div>
                    </div>
                    <img src="/assets/images/shape/shape_40.svg" alt="" className="shapes shape-three" />
                    <img src="/assets/images/shape/shape_41.svg" alt="" className="shapes shape-four" />
                </div>  {/* /.inner-container */}
            </div> {/* /.counter-section-one */}

        </Fragment>
    )
}

export default CounterSix