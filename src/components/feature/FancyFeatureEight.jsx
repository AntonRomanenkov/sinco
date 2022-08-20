import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const FeatureContent = [
    {
        icon: 'icon_17',
        title: 'Data Science',
        desc: `Convert data noise to intelligent insights for quis competitive differentiation.`,
        arrow: 'icon_20',
        fadeUp: 'fade-up',
        dataDelay: ''
    }, {
        icon: 'icon_18',
        title: 'Machine Learning',
        desc: `Convert data noise to intelligent insights for quis competitive differentiation.`,
        arrow: 'icon_20',
        fadeUp: 'fade-up',
        dataDelay: '100'
    }, {
        icon: 'icon_19',
        title: 'Customer Support',
        desc: `Convert data noise to intelligent insights for quis competitive differentiation.`,
        arrow: 'icon_20',
        fadeUp: 'fade-up',
        dataDelay: '200'
    }
]

const FancyFeatureEight = () => {
    return (
        <Fragment>
            <div className="row justify-content-center gx-xxl-5">
                {FeatureContent.map((val, i) => (
                    <div key={i} className="col-lg-4 col-sm-6 d-flex mb-30" data-aos={val.fadeUp} data-aos-delay={val.dataDelay}>
                        <div className="block-style-seven">
                            <div className="icon d-flex align-items-end"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                            <h5>
                                <Link to="/service-details">{val.title}</Link>
                            </h5>
                            <p>{val.desc}</p>
                            <Link to="/service-details" className="tran3s more-btn"><img src={`images/icon/${val.arrow}.svg`} alt=""/></Link>
                        </div>
                        {/* /.block-style-seven */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeatureEight