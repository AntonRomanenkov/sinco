import React from 'react';
import NewsLetterForm from '../form/NewsLetterForm';

const CallToAction = () => {
    return ( 
        <> 
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="title-style-four sm-pb-20">
                        <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                    </div>
                    {/* /.title-style-four */}
                </div>
                <div className="col-md-6">
                    <div className="subscribe-form">
                        <NewsLetterForm />
                        <p>We only send interesting and relevant emails.</p>
                    </div>
                    {/* /.subscribe-form */}
                </div>
            </div> 
        </>
  )
}

export default CallToAction