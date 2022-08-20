import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const FeatureContent25 = [
    {
        icon: 'icon_36',
        title:'Video Intelligence',
        desc: `Convert data nois intelligent insights for quis competitive differentiation.`,
        arrows: 'bi bi-arrow-right',
        fade: 'fade-up',
        dataDelay: '',
    },
    {
        icon: 'icon_37',
        title:'Machine Learning',
        desc: `Convert data nois intelligent insights for quis competitive differentiation.`,
        arrows: 'bi bi-arrow-right',
        fade: 'fade-up',
        dataDelay: '100',
    },
    {
        icon: 'icon_38',
        title:'Voice Tracking',
        desc: `Convert data nois intelligent insights for quis competitive differentiation.`,
        arrows: 'bi bi-arrow-right',
        fade: 'fade-up',
        dataDelay: '200',
    },
    {
        icon: 'icon_39',
        title:'Data Analysis',
        desc: `Convert data nois intelligent insights for quis competitive differentiation.`,
        arrows: 'bi bi-arrow-right',
        fade: 'fade-up',
        dataDelay: '300',
    },
]

const FancyFeature25 = () => {
    return (
        <Fragment>
            <div className="row">
               {FeatureContent25.map((val, i)=>(
                   <div
                   key={i}
                   className="col-xl-3 col-sm-6 d-flex"
                   data-aos={val.fade}
                   data-aos-delay={val.delayDelay}>
                   <div className="block-style-ten color-two tran3s mt-30">
                       <div className="icon d-flex align-items-end"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                       <h6>
                           <Link to="/service-details">{val.title}</Link>
                       </h6>
                       <p>{val.desc}</p>
                       <Link to="/service-details" className="read-btn tran3s"><i className={val.arrow}/></Link>
                   </div>
                   {/* /.block-style-ten */}
               </div>
               ))}
            </div>
        </Fragment>
    )
}

export default FancyFeature25