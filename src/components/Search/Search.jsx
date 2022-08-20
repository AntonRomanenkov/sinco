import React, { Fragment, useState } from 'react'

const Search = () => {
    const [show, setShow] = useState(false);
    const showCanvas = () => {
        setShow(!show)
    }
    return (
        <Fragment>
            <div className="position-relative" style={{ zIndex: '100' }}>
                <div className={show ? "offcanvas offcanvas-top theme-search-form justify-content-center show" : "offcanvas offcanvas-top theme-search-form justify-content-center"} tabIndex={-1} id="offcanvasTop" style={show ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <button type="button" className="close-btn tran3s" data-bs-dismiss="offcanvas" aria-label="Close" onClick={showCanvas}><i className="bi bi-x-lg" /></button>
                    <div className="form-wrapper">
                        <form action="#">
                            <input type="text" placeholder="Search Keyword...." />
                        </form>
                    </div> {/* /.form-wrapper */}
                </div>
                <button className="menu-search-btn tran3s" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" onClick={showCanvas}><i className="bi bi-search" /></button>
            </div>
        </Fragment >
    )
}

export default Search