import React, {Fragment} from 'react';

const VisionContentTwo = [
    {
        title: 'Our History',
        desc: `Except to obtain some advantage from it? But who has any right to find fault with a consequences.`,
        fade: 'fade-up',
        dataDelay: ''
    }, {
        title: 'Our Mission',
        desc: `Except to obtain some advantage from it? But who has any right to find fault with a consequences.`,
        fade: 'fade-up',
        dataDelay: '100'
    }, {
        title: 'Our Vission',
        desc: `Except to obtain some advantage from it? But who has any right to find fault with a consequences.`,
        fade: 'fade-up',
        dataDelay: '200'
    }
]

const FancyFeatureTwentyThree = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {VisionContentTwo.map((val, i) => (
                    <div
                        key={i}
                        className="col-lg-4 col-sm-6 d-flex"
                        data-aos={val.fade}
                        data-aos-delay={val.dataDelay}>
                        <div className="block-style-fourteen lg-mt-20">
                            <h5>{val.title}</h5>
                            <p>{val.desc}</p>
                        </div>
                        {/* /.block-style-fourteen */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeatureTwentyThree