import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

const AboutFour = () => {
    return (
        <Fragment>
            <div className="block-style-two" data-aos="fade-left">
                <div className="title-style-one">
                    <div className="sc-title-four">WHO WE ARE</div>
                    <h2 className="main-title">World best AI for your business.
                    </h2>
                </div>
                {/* /.title-style-one */}
                <p className="pt-10 pb-20 lg-pb-10">AI technology is perfect for best business
                    solutions &amp; we offer help to achieve your goals.</p>
                <ul className="style-none list-item color-rev">
                    <li>Various analysis options.</li>
                    <li>Page Load (time, size, number of requests).</li>
                    <li>Big data analysis.</li>
                    <li>Adance Data analysis operation.</li>
                </ul>
                <Link to="/contact" className="btn-one mt-30">Contact us</Link>
            </div>
        </Fragment>
    )
}

export default AboutFour