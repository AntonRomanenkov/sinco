import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const KeywordContent = [
    {
        text: 'Ideas',
        routerPath: '/blog-details'
    }, {
        text: 'Education',
        routerPath: '/blog-details'
    }, {
        text: 'DATA',
        routerPath: '/blog-details'
    }, {
        text: 'Machine',
        routerPath: '/blog-details'
    }, {
        text: 'AI',
        routerPath: '/blog-details'
    }, {
        text: 'INTELLIgent',
        routerPath: '/blog-details'
    }
]

const Keyword = () => {
    return (
        <Fragment>
            <ul className="clearfix style-none">
                {KeywordContent.map((val, i) => (
                    <li key={i}>
                        <Link to={val.routerPath}>{val.text}</Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default Keyword
