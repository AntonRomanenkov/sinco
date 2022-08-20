import React, {Fragment} from 'react'

const Info = () => {
    return (
        <Fragment>
            <div className="address-block-one d-flex">
            <div className="icon"><img src="images/icon/icon_07.svg" alt=""/></div>
            <div className="text-meta">
                <h4 className="title">Contact Info</h4>
                <p>Open a chat or give us call at
                    <br/>
                    <a href="#">310.841.5500</a>
                </p>
            </div>
        </div>
        </Fragment>
    )
}

export default Info