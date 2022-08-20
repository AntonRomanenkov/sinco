import React from 'react';
import CommonCounter from './CommonCounter'

const CounterTwo = () => {
    return (
        <div>
            <div className="counter-section-one fancy-bg">
                <div className="container">
                    <div className="inner-container">
                        <CommonCounter />
                    </div>
                    {/* /.inner-container */}
                </div>
                <img src="images/shape/shape_04.svg" alt="" className="shapes shape-one"/>
                <img src="images/shape/shape_05.svg" alt="" className="shapes shape-two"/>
            </div>
            {/* /.counter-section-one */}

        </div>
    )
}

export default CounterTwo