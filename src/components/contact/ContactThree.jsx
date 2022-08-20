import React, {Fragment} from 'react';


const ContactThree = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-4">
                    <div className="address-block-two text-center mb-40 sm-mb-20">
                        <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_17.svg" alt=""/></div>
                        <h5 className="title">Our Address</h5>
                        <p>1012 Pebda Parkway, Mirpur 2
                            <br/>Dhaka, Bangladesh</p>
                    </div>
                    {/* /.address-block-two */}
                </div>
                <div className="col-md-4">
                    <div className="address-block-two text-center mb-40 sm-mb-20">
                        <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_18.svg" alt=""/></div>
                        <h5 className="title">Contact Info</h5>
                        <p>Open a chat or give us call at
                            <br/>
                            <a href="tel:310.841.5500" className="call">310.841.5500</a>
                        </p>
                    </div>
                    {/* /.address-block-two */}
                </div>
                <div className="col-md-4">
                    <div className="address-block-two text-center mb-40 sm-mb-20">
                        <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_19.svg" alt=""/></div>
                        <h5 className="title">Live Support</h5>
                        <p>live chat service
                            <br/>
                            <a href="#" className="webaddress">www.sincochat.com</a>
                        </p>
                    </div>
                    {/* /.address-block-two */}
                </div>
            </div>
        </Fragment>
    )
}

export default ContactThree