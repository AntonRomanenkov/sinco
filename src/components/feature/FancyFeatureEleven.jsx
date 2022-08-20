import React, {Fragment} from 'react';

const ProcessContent = [
    {
        icon: 'icon_21',
        num: '1',
        text: 'Identify the probelm',
        text2: 'with ai',
        fade: 'fade-right',
        dataDelay: '',
        className: '',
    }, {
        icon: 'icon_22',
        num: '2',
        text: 'Collect data with our',
        text2: 'advance ai.',
        fade: 'fade-up',
        dataDelay: '100',
        className: 'shape-arrow'
    }, {
        icon: 'icon_21',
        num: '3',
        text: 'Deliver Accurate data',
        text2: 'solution.',
        fade: 'fade-left',
        dataDelay: '200',
        className: '',
    }
]

const FancyFeatureEleven = () => {
    return (
        <Fragment>
            <div className="row justify-content-center gx-xxl-5">
                {ProcessContent.map((val, i) => (
                    <div key={i} className="col-md-4 col-sm-6" data-aos={val.fade} data-aos-delay={val.dataDelay}>
                        <div className={`block-style-eight position-relative mt-50 ${val.className}`}>
                            <div className="icon d-flex align-items-center justify-content-center">
                                <img src={`images/icon/${val.icon}.svg`} alt=""/>
                                <div className="num">{val.num}</div>
                            </div>
                            <h5>{val.text}
                                <br/>
                                {val.text2}</h5>
                        </div>
                        {/* /.block-style-eight */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeatureEleven