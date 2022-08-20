import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';

const BannerOne = () => {
    return (
        <Fragment>
            <div className="row align-items-center gx-xxl-5">
                <div className="col-lg-6 text-center text-lg-start">
                    <div className="sub-title">Work Inquiry</div>
                    <h3 className="pe-xxl-5 md-pb-20">Having Any Query! Book an appointment.</h3>
                </div>
                <div className="col-lg-6 text-center text-lg-end">
                    <Link to="/contact" className="msg-btn tran3s">Send Us Message</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default BannerOne