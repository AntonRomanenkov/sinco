import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const MemberContent = [
    {
        img: 'img_05',
        desig: 'React Developer',
        name: 'Hasan Mahmud',
        fade: 'fade-up',
        dataDelay: ''
    }, {
        img: 'img_07',
        desig: 'Programmer',
        name: 'Zubayer Al Hasan',
        fade: 'fade-up',
        dataDelay: '100'
    }, {
        img: 'img_06',
        desig: 'Reasearcher',
        name: 'Jannat Ferdaus',
        fade: 'fade-up',
        dataDelay: '200'
    }, {
        img: 'img_08',
        desig: 'Markting Expert',
        name: 'Muhibbur Rashid',
        fade: 'fade-up',
        dataDelay: '300'
    }, {
        img: 'img_01',
        desig: 'React Developer',
        name: 'Hasan Mahmud',
        fade: 'fade-up',
        dataDelay: '',
    }, {
        img: 'img_02',
        desig: 'Reasearcher',
        name: 'Hamina Hasan',
        fade: 'fade-up',
        dataDelay: '100'
    }, {
        img: 'img_03',
        desig: 'Blogger',
        name: 'Jannat Ferdaus',
        fade: 'fade-up',
        dataDelay: '200'
    }, {
        img: 'img_04',
        desig: 'Markting Expert',
        name: 'Rashed Kabir',
        fade: 'fade-up',
        dataDelay: '300'
    }
]

const TeamMemberTwo = () => {
    return (
        <Fragment>
            <div className="row">
                {MemberContent.map((val, i) => (
                    <div
                        key={i}
                        className="col-xl-3 col-lg-4 col-sm-6"
                        data-aos={val.fade}
                        data-aos-delay={val.dataDelay}>
                        <div className="team-block-one tran3s mt-50 md-mt-30">
                            <div className="img-meta"><img src={`images/team/${val.img}.jpg`} alt="" className="w-100"/></div>
                            <Link to="/team-details" className="team-info">
                                <span className="designation-text">{val.desig}</span>
                                <span className="name tran3s">{val.name}</span>
                            </Link>
                        </div>
                        {/* /.team-block-one */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default TeamMemberTwo