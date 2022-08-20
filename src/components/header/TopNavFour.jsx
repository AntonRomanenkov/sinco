import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom'
import SearchModal from '../search-modal/SearchModal';
import MobileMenu from './MobileMenu';
import ThemeMainMenu from './ThemeMainMenu';

const TopNavFour = () => {

  const [navbar, setNavbar] = useState(false);
  
  const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(!modalIsOpen);
    }
    

  const toggleMenu =()=>{
    if(window.scrollY >= 68) {
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', toggleMenu);



    return (
        <Fragment>
            <SearchModal isOpen={modalIsOpen} onClick={closeModal} bgColor="bg-three" />
            <header className={navbar ? "theme-main-menu sticky-menu theme-menu-four fixed": "theme-main-menu sticky-menu theme-menu-four"}>
                <div className="inner-content">
                    <div className="d-flex align-items-center">
                        <div className="logo order-lg-0">
                            <Link to="/" className="d-block"><img src="images/logo/logo_03.png" alt="" width={90}/></Link>
                        </div>
                        <div className="right-widget d-flex align-items-center ms-auto order-lg-3">
                            <div className="call-button d-none d-xl-block me-5">Call us
                                <a href="#">(+880) 321 782 110</a>
                            </div>
                            <button
                                className="menu-search-btn tran3s"
                                type="button" onClick={openModal}><i className="bi bi-search"/></button>
                                
                                
                            <Link to="/contact" className="send-msg-btn tran3s d-none d-lg-block">Send us Message</Link>
                        </div>
                        {/* /.right-widget */}
                        <nav className="navbar navbar-expand-lg order-lg-2">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ThemeMainMenu/> 
                                {/* Mobile Content */}
                                <div className="mobile-content d-block d-lg-none">
                                    <div
                                        className="d-flex flex-column align-items-center justify-content-center mt-70">
                                        <a href="contact-us.html" className="send-msg-btn tran3s mb-10">Send us Message</a>
                                        <div className="call-button">Call us
                                            <a href="#">(+880) 321 782 110</a>
                                        </div>
                                    </div>
                                </div>
                                {/* /.mobile-content */}
                            </div>
                            
                        </nav>
                    </div>

                    <MobileMenu />
                    {/* mobilemenu */}
                </div>
                {/* /.inner-content */}
            </header>
            {/* /.theme-main-menu */}
        </Fragment>
    )
}

export default TopNavFour