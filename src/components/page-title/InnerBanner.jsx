import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';

const InnerBanner = (props) => {

    const {intro, currpage} = props;

    return (
        <Fragment>
            <div className="container">
                <h2 className="intro-title text-center">{intro}</h2>
                <ul className="page-breadcrumb style-none d-flex justify-content-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="current-page">{currpage}</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default InnerBanner