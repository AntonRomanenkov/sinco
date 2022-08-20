import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const FancyFeatureFourteen = () => {
    return (
        <Fragment>
            <div className="block-style-two" data-aos="fade-left">
                <div className="title-style-one">
                    <div className="sc-title-five">Over 150k+ Client</div>
                    <h2 className="main-title">Provides Realtime Data Solutions.</h2>
                </div>
                {/* /.title-style-one */}
                <p className="pt-10 pb-20">AI technology is perfect for best business solutions
                    &amp; we offer help to achieve your goals.</p>
                <ul className="style-none list-item color-rev">
                    <li>Various analysis options.</li>
                    <li>Page Load (time, size, number of requests).</li>
                    <li>Adance Data analysis operation.</li>
                </ul>
                <Link to="/about-two" className="btn-six ripple-btn mt-50 lg-mt-30">More about us</Link>
            </div>
        </Fragment>
    )
}

export default FancyFeatureFourteen
