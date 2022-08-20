import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const TwentyFourContent = [
    {
        icon: 'icon_35',
        title: 'Health Care',
        desc: `Convert data noise to intelligent insights for competitive differentiation.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: ''
    }, {
        icon: 'icon_08',
        title: 'Predictive Analytics',
        desc: `Convert data noise to intelligent insights for competitive differentiation.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '100'
    }, {
        icon: 'icon_09',
        title: 'Data Engineers',
        desc: `Stay ahead of disruption &amp; exceed customer expectation by implementing
        predictive analytics solutions.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '200'
    }, {
        icon: 'icon_10',
        title: 'Deep Learning',
        desc: `Access tools for deep learning, cloud computing and any scale.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '100'
    }, {
        icon: 'icon_11',
        title: 'Data Mining',
        desc: `You can discover hidden opportunities collecting, analyzing or explaining
        your data in a different way..`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '200'
    }, {
        icon: 'icon_12',
        title: 'Statistical Modeling',
        desc: `Offer future-ready business applications that can learn &amp; adjust with time.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '300'
    }
]

const FancyFeature24 = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {TwentyFourContent.map((val, i) => (
                    <div
                        key={i}
                        className="col-lg-4 col-sm-6 mb-40 xs-mb-30 d-flex"
                        data-aos={val.fade}
                        data-aos-delay={val.datadelay}>
                        <div className="block-style-four">
                            <div className="icon d-flex align-items-end justify-content-center"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                            <Link to="/service-details">
                                <h5>{val.title}</h5>
                            </Link>
                            <p>{val.desc}</p>
                            <Link to="/service-details" className="more-btn"><img src="images/icon/icon_13.svg" alt="" className="tran3s"/></Link>
                        </div>
                        {/* /.block-style-four */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeature24