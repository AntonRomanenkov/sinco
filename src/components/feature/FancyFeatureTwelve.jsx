import React, {Fragment} from 'react'

const FancyFeatureTwelve = () => {
    return (
        <Fragment>
            <div className="block-style-nine pt-30 sm-pt-10">
                <div className="title-style-one pb-10" data-aos="fade-up">
                    <div className="sc-title-four">WHY CHOOSE US</div>
                    <h2 className="main-title">Why choose us for your business.</h2>
                </div>
                {/* /.title-style-one */}
                <ul className="style-none list-item">
                    <li data-aos="fade-up">Learn content by interacting with an expert lesson or watching a video.</li>
                    <li data-aos="fade-up" data-aos-delay={100}>Practice what you learned on realistic SAT test questions.</li>
                    <li data-aos="fade-up" data-aos-delay={200}>Review your practice questions and learn how to improve.</li>
                </ul>
            </div>
            {/* /.block-style-nine */}
        </Fragment>
    )
}

export default FancyFeatureTwelve