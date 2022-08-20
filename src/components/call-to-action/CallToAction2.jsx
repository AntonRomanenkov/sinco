import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const CallToAction2 = () => {
    return (
        <Fragment>
            <div className="row align-items-center gx-xxl-5">
                <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                    <div className="sub-title">Work Inquiry</div>
                    <h3 className="pe-xl-5 md-pb-20">Having Any Query! Book an appointment.</h3>
                </div>
                <div className="col-lg-6 text-center text-lg-end" data-aos="fade-left">
                    <Link to="/contact" className="msg-btn tran3s">Send Us Message</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default CallToAction2