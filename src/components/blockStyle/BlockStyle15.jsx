import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const BlockContent15 = [
    {
        icon: 'icon_39',
        text: 'C++ Coding',
        fadeUp: 'fade-up',
        dataDelay: ''
    },
    {
        icon: 'icon_37',
        text: 'AI Technology',
        fadeUp: 'fade-up',
        dataDelay: '100',
    },
    {
        icon: 'icon_38',
        text: 'Auto Algorithm',
        fadeUp: 'fade-up',
        dataDelay: '200',
    },
]

const BlockStyle15 = () => {
    return (
        <Fragment>
            <div className="row">
                {
                    BlockContent15.map((val, i)=>(
                        <div key={i} className="col-md-4 d-flex" data-aos={val.fade} data-aos-delay={val.dataDelay}>
                        <div className="block-style-ten color-two ps-2 pe-2 text-center tran3s mt-10">
                            <div className="icon d-flex align-items-end"><img src={`images/icon/${val.icon}.svg`} alt="" className="m-auto"/></div>
                            <h6>
                                <Link to="/service-details">{val.text}</Link>
                            </h6>
                        </div>
                        {/* /.block-style-ten */}
                    </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default BlockStyle15