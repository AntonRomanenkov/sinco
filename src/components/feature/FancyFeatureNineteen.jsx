import React, {Fragment} from 'react'

const ProcessContent = [
    {
        num: 1,
        className: 'numb tran3s',
        heading: 'Frame the Problem',
        desc: 'Learn content by interacting with an expert lesson or watching a video.',
        dataDelay: ''
    }, {
        num: 2,
        className: 'numb tran3s',
        heading: 'Collect the Data',
        desc: 'Practice what you learned on realistic SAT test questions.',
        dataDelay: '50'
    }, {
        num: 3,
        className: 'numb tran3s',
        heading: 'Process the Data',
        desc: 'Have to be repudiated annoyances accepted the wise lorem ispum sample text.',
        dataDelay: '100'
    }
]

const FancyFeatureNineteen = () => {
    return (
        <Fragment>
            <div className="block-style-thirteen" data-aos="fade-right">
                <div className="title-style-three pb-15">
                    <div className="sc-title">WORK PROCESS</div>
                    <h2 className="main-title">How sinco <span>process</span> & works.</h2>
                </div>
                {/* /.title-style-three */}
                <ul className="style-none list-item">
                    {ProcessContent.map((val, i) => (
                        <li key={i} data-aos="fade-up" data-aos-delay={val.dataDelay}>
                            <div className={val.className}>{val.num}</div>
                            <h6>{val.heading}</h6>
                            <span>{val.desc}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* /.block-style-thirteen */}
        </Fragment>
    )
}

export default FancyFeatureNineteen