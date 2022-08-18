import React from 'react'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    return (
      <>
        <h2 className="head-text">Let's grab a coffee</h2>
        <div className="app__footer-cards">
          <div className="app__footer-card">
              <img src={images.email} alt="email" />
              {/* mailto -> redirect to email entered, tel -> telephone */}
              <a href="mailto:jacobssibi@gmail.com" className="p-text">jacobssibi@gmail.com</a>
          </div>
          <div className="app__footer-card">
              <img src={images.mobile} alt="mobile" />
              {/* mailto -> redirect to email entered, tel -> telephone */}
              <a href="tel: +64 (022) 590-4210" className="p-text">+64 (022) 590-4210</a>
          </div>
        </div>
      </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)
