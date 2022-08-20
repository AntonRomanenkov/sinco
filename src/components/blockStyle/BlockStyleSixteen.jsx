import React, {Fragment} from 'react';

const WorkProcessContent = [
    {
        number: '1',
        title: 'Research',
        desc: `Collect data and ger ready for research.`,
    },
    {
        number: '2',
        title: 'Identify Problem',
        desc: `Then we find the problem with our ai.`,
    },
    {
        number: '1',
        title: 'Resolve Problem',
        desc: `Now it’s time to fix the issue by advance ai`,
    },
]

const BlockStyleSixteen = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {WorkProcessContent.map((val, i)=>(
                    <div key={i} className="col-lg-4 col-sm-6">
                    <div className="block-style-sixteen d-flex mt-30 md-mt-20">
                        <div className="numb tran3s">{val.number}</div>
                        <div className="text">
                            <h6>{val.title}</h6>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                    {/* /.block-style-sixteen */}
                </div>
                ))}
            </div>
        </Fragment>
    )
}

export default BlockStyleSixteen