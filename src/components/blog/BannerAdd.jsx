import React, {Fragment} from 'react'

const BannerAdd = () => {
    return (
        <Fragment>
            <div className="sidebar-quote">
                <ul className="style-none d-flex justify-content-center rating">
                    <li><i className="bi bi-star-fill"/></li>
                    <li><i className="bi bi-star-fill"/></li>
                    <li><i className="bi bi-star-fill"/></li>
                    <li><i className="bi bi-star-fill"/></li>
                    <li><i className="bi bi-star-fill"/></li>
                </ul>
                <p>They not only understand what I say but read between the lines and also give
                    me ideas of my own.</p>
                <div className="name">Rashed Kabir,<span>Designer</span>
                </div>
            </div>
        </Fragment>
    )
}

export default BannerAdd