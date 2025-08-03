import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa"; 
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header_new.scss'

const Header_new = () => {
  return (
    <div className='app__headerNew'>
        <img src={images.profile_picture} alt="profile" />
        <div className='app__headerNew-greeting'>
            <h1>Hi, my name is <span>Matilda</span>.</h1>
            <h1>I’m a <span>UX/UI Designer</span> and a <br /><span>Front-End Developer</span></h1>
        </div>
        <p>Scroll down to learn more</p>
        <FaAngleDoubleDown />
    </div>
  )
}

export default AppWrap(Header_new, 'home')
