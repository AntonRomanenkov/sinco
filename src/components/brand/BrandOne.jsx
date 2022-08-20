import React, {Fragment} from 'react';

const BrandLogo = [
    {
        img: 'Plogo-6',
        dataDelay: ''
    }, 
    {
        img: 'Plogo-7',
        dataDelay: '100'
    }, 
    {
        img: 'Plogo-8',
        dataDelay: '200'
    }, 
    {
        img: 'Plogo-9',
        dataDelay: '300'
    }, 
    {
        img: 'Plogo-10',
        dataDelay: '400'
    },
    {
        img: 'Plogo-11',
        dataDelay: '100'
    }, 
    {
        img: 'Plogo-12',
        dataDelay: '200'
    }, 
    {
        img: 'Plogo-13',
        dataDelay: '300'
    }, 
    {
        img: 'Plogo-14',
        dataDelay: '400'
    }, 
]

const BrandOne = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-xxl-11 m-auto">
                    <ul className="style-none text-center mt-40 lg-mt-10">
                        {BrandLogo.map((item, i) => (
                            <li
                                key={i}
                                className="partner-logo-block-one d-inline-block"
                                data-aos="fade-up"
                                data-aos-delay={item.dataDelay}>
                                <a href="#" className="d-flex align-items-center justify-content-center"><img src={`images/logo/${item.img}.png`} alt=""/></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default BrandOne
