import React, { useState } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap} from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {

  return (
    <>
      <h2 className='head-text'>Take A Coffe & Chat With Me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:matilda.forslund00@gmail.com" className='p-text'>matilda.forslund00@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+46727060877" className='p-text'>+46727060877</a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
