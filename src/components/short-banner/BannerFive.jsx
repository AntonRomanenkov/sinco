import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const BannerFive = () => {
    return (
        <Fragment>
            <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                    <h3 className="pe-xxl-5 md-pb-20">Having any Query? Book an appointment.</h3>
                </div>
                <div className="col-lg-6 text-center text-lg-end" data-aos="fade-left">
                    <Link to="/contact" className="msg-btn tran3s">Send Us Message</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default BannerFive