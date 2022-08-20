import React, {Fragment} from 'react';


const FeatureContent = [
    {
        icon: 'bi bi-check-lg',
        title: 'Qulaity Support',
        desc: `Learn content by interacting anything expert lesson a video.`,
        fadeUp: 'fade-up',
        dataDelay: '',
        bgColor: 'rgba(68, 109, 255, 0.07)',
        color: '#446DFE'
    }, {
        icon: 'bi bi-check-lg',
        title: 'Fastest AI Machine',
        desc: `Practice what you realistic test great questions lorem.`,
        fadeUp: 'fade-up',
        dataDelay: '100',
        bgColor: 'rgba(253, 232, 255, 1)',
        color: '#F36EFF'
    }, {
        icon: 'bi bi-check-lg',
        title: 'Great Pricing',
        desc: `Review your practice & learn how to improve your skill.`,
        fadeUp: 'fade-up',
        dataDelay: '200',
        bgColor: 'rgba(255, 122, 65, 0.12)',
        color: '#FF7A41'
    }
]

const FancyFeatureSix = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5 justify-content-center">
                {FeatureContent.map((val, i) => (
                    <div key={i} className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={val.dataDelay}>
                        <div className="block-style-six text-center mt-40">
                            <div
                                className="icon"
                                style={{
                                backgroundColor:val.bgColor,
                                color: val.color
                            }}><i className={val.icon}/></div>
                            <h6>{val.title}</h6>
                            <p>{val.desc}</p>
                        </div>
                        {/* /.block-style-six */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeatureSix