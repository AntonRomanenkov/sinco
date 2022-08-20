import React, {Fragment} from 'react';
import CommonCounter from './CommonCounter';

const CounterThree = () => {
    return (
        <Fragment>
            <div className="counter-section-one mt-150 md-mt-80">
                <div className="container">
                    <div className="inner-container">
                        <div className="row justify-content-center">
                            <CommonCounter />
                        </div>
                    </div>
                    {/* /.inner-container */}
                </div>
            </div>
            {/* /.counter-section-one */}

        </Fragment>
    )
}

export default CounterThree