import React, {Fragment} from 'react';


const ProcessContent = [
    {
        num: '1',
        title: 'Data Automation Solution.',
        desc: `Learn content by interacting quis expert lesson a video.`,
        fadeUp: 'fade-up',
        dataDelay: ''
    },
    {
        num: '2',
        title: 'Analytics Business.',
        desc: `Practice what you realistic SAT test questions.`,
        fadeUp: 'fade-up',
        dataDelay: '150'
    },
    {
        num: '3',
        title: 'A New Breed Of AI.',
        desc: `Review your practice and learn how to improve.`,
        fadeUp: 'fade-up',
        dataDelay: '300'
    },
]

const FancyFeatureThree = () => {
    return (
        <Fragment>
            <div className="row justify-content-center gx-xxl-5">
                {ProcessContent.map((val, i)=>(
                    <div key={i} className="col-lg-4 col-sm-6 d-flex" data-aos={val.fadeUp} data-aos-delay={val.dataDelay}>
                    <div className="block-style-three mb-25">
                        <div className="numb">{val.num}</div>
                        <h6>{val.title}</h6>
                        <p>{val.desc}</p>
                    </div>
                    {/* /.block-style-three */}
                </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeatureThree