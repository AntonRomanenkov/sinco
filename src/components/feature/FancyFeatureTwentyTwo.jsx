import React, {Fragment} from 'react';

const VisionContent = [
    {
        title: 'Our History',
        desc: `Convert data noise to intelligent insights for competitive differention
        qulaity check.`,
        fade: 'fade-up',
        dataDelay: ''
    }, {
        title: 'Our Mission',
        desc: `Except to obtain some advantage from it? But who has any right to find fault with a consequences for competitive differention qulaity.`,
        fade: 'fade-up',
        dataDelay: '100'
    }, {
        title: 'Our Vission',
        desc: `Except to obtain some advantage from it? But who has any right to find fault with a consequences data noise to intelligent insights.`,
        fade: 'fade-up',
        dataDelay: '200'
    }
]

const FancyFeatureTwentyTwo = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {VisionContent.map((val, i) => (
                    <div
                        key={i}
                        className="col-lg-4 col-sm-6 d-flex"
                        data-aos={val.fade}
                        data-aos-delay={val.dataDelay}>
                        <div className="block-style-fourteen mt-35">
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

export default FancyFeatureTwentyTwo