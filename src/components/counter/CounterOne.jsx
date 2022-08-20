import React, { Fragment } from 'react';
import CommonCounter from './CommonCounter';

const CounterOne = () => {
    return (
        <Fragment>
            <div className="counter-section-one mt-140 lg-mt-100">
                <div className="container">
                    <div className="inner-container bg-color">
                        <CommonCounter />
                    </div> {/* /.inner-container */}
                </div>
            </div> {/* /.counter-section-one */}
        </Fragment>
    )
}

export default CounterOne