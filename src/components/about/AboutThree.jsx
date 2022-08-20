import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const AboutThree = () => {
    return (
        <Fragment>
            <div className="block-style-two" data-aos="fade-left">
                <div className="title-style-one">
                    <div className="sc-title">Over 150k+ Client</div>
                    <h2 className="main-title">We offer Real-time Data Solutions.</h2>
                </div>
                {/* /.title-style-one */}
                <p className="pt-10 pb-20 lg-pb-10">Sinco is data science, machine learning and
                    artificial intelligence provide business solution.</p>
                <ul className="style-none list-item">
                    <li>Various analysis options.</li>
                    <li>Page Load (time, size, number of requests).</li>
                    <li>Big data analysis.</li>
                </ul>
                <div className="btn-three mt-45 lg-mt-30">Want to learn more about us? <Link to="/about-one">Click here <i className="fas fa-chevron-right"/></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutThree