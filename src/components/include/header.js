import '../../assets/css/include/header.css';
import logo from '../../assets/img/logo.png'
import nft from'../../assets/img/header-nft.png';
import menuIcon from '../../assets/img/mobile-menu-btn.png';
import closeIcon from '../../assets/img/close.png';
import React, { useState } from 'react';

function Header(props) {
  const [modalflag, setModalflag] = useState(false);
  const closemodal = () => {
    setModalflag(false)
  }
  const showmodal = () => {
    setModalflag(true)
  }
  return (
    <div>
      <div className="mobile-link-part" style={{ display: modalflag ? 'block' : 'none' }}>
        <div className="nav-bar-mobile row">
          <div className="col-lg-6 col-md-4">
            <img className="logo-img-mobile" src={logo}/>
          </div>
          <div className="col-lg-6 col-md-8">
            <div>
              <img className="mobile-close-icon" src={closeIcon} onClick={closemodal} />
            </div>
          </div>
        </div>
        <div style={{marginTop:'50px'}}>
          <div className="mobile-link-con">
            <a href="#meta" className="link-btn" onClick={closemodal}>MetaMorphsMania</a>
          </div>
          <div className="mobile-link-con">
            <a href="#about" className="link-btn" onClick={closemodal}>About</a>
          </div>
          <div className="mobile-link-con">
            <a href="#team" className="link-btn" onClick={closemodal}>Team</a>
          </div>
          <div className="mobile-link-con">
            <a href="#faq" className="link-btn" onClick={closemodal}>FAQ</a>
          </div>
          <div className="mobile-link-con">
            <a href="#roadmap" className="link-btn" onClick={closemodal}>Roadmap</a>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="nav-bar row">
          <div className="col-lg-6 col-md-4 ">
            <img className="logo-img" src={logo}/>
          </div>
          <div className="col-lg-6 col-md-8 left-nav">
            <div className="link-part">
              <div className="link-con">
                <a href="#meta" className="link-btn">MetaMorphsMania</a>
              </div>
              <div className="link-con">
                <a href="#about" className="link-btn">About</a>
              </div>
              <div className="link-con">
                <a href="#team"p className="link-btn">Team</a>
              </div>
              <div className="link-con">
                <a href="#faq" className="link-btn">FAQ</a>
              </div>
              <div className="link-con">
                <a href="#roadmap"p className="link-btn">Roadmap</a>
              </div>
            </div>
            <div>
              <img className="mobile-menu-icon" src={menuIcon} onClick={showmodal} />
            </div>
          </div>
        </div>
        <div className="main-part row">
          <div className="col-lg-8">
            <p className="sm-description">Nibh mauris, nec et vel nisi. A eget leo scelerisque.</p>
            <p className="lg-description" style={{marginTop:'20px'}}>Nibh mauris, nec et vel nisi. A <span style={{color:'#E1286C'}}>eget leoaliquet</span> site phasellus.</p>
            <div className="counter-part">
              <div className="time-container">
                <div className="time-part">
                  <p className="time-letter">01</p>
                </div>
                <p className="time-unit">DAY</p>
              </div>
              <p className="time-letter divider">:</p>
              <div className="time-container">
                <div className="time-part">
                  <p className="time-letter">12</p>
                </div>
                <p className="time-unit">HRS</p>
              </div>
              <p className="time-letter divider">:</p>
              <div className="time-container">
                <div className="time-part">
                  <p className="time-letter">55</p>
                </div>
                <p className="time-unit">SEC</p>
              </div>
            </div>
            <button className="join-btn" style={{marginTop:'30px'}}>Join DIscord -></button>
          </div>
          <div className="col-lg-4">
            <div className="top-nft">
              <img className="header-img1" src={nft} />
              <img className="header-img2" src={nft} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;