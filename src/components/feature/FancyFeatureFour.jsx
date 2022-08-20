import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ServiceContent = [
    {
        icon: 'icon_08',
        title: 'Predictive Analytics',
        desc: `Convert data noise to intelligent insights for competitive differentiation.`,
        arrow: 'icon_13',
        dataAos:'fade-up',
        dataDelay:'100',
        col: 'col-lg-4 col-sm-6'
    }, 
    {
        icon: 'icon_09',
        title: 'Data Engineers',
        desc: `Stay ahead of disruption & exceed customer expectation by implementing predictive analytics solutions.`,
        arrow: 'icon_13',
        dataAos:'fade-up',
        dataDelay:'200',
        col: 'col-lg-4 col-sm-6'
    }, 
    {
        icon: 'icon_10',
        title: 'Deep Learning',
        desc: `Access tools for deep learning, cloud computing and any scale.`,
        arrow: 'icon_13',
        dataAos:'fade-up',
        dataDelay:'100',
        col: 'col-lg-4 col-sm-6'
    }, 
    {
        icon: 'icon_11',
        title: 'Data Mining',
        desc: `You can discover hidden opportunities collecting, analyzing or explaining your data in a different way.`,
        arrow: 'icon_13',
        dataAos:'fade-up',
        dataDelay:'200',
        col: 'col-lg-4 col-sm-6'
    }, 
    {
        icon: 'icon_12',
        title: 'Statistical Modeling',
        desc: `Offer future-ready business applications that can learn & adjust with time.`,
        arrow: 'icon_13',
        fadeUp:'fade-up',
        dataDelay:'300',
        col: 'col-lg-4'
    }
]

const FancyFeatureFour = () => {
    return (
        <Fragment>
        {ServiceContent.map((val, i)=>(
            <div
            key={i}
            className={`${val.col} mt-40 d-flex`}
            data-aos={val.fadeUp}
            data-aos-delay={val.dataDelay}>
            <div className="block-style-four">
                <div className="icon d-flex align-items-end justify-content-center"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                <Link to="/service-one">
                    <h5>{val.title}</h5>
                </Link>
                <p>{val.desc}</p>
                <Link to="/service-one" className="more-btn"><img src={`images/icon/${val.arrow}.svg`} alt="" className="tran3s"/></Link>
            </div>
            {/* /.block-style-four */}
        </div>
       ))}
        </Fragment>
    )
}

export default FancyFeatureFour