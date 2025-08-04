import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa"; 
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header_new.scss';
import { easeOut, motion } from 'framer-motion';

const Header_new = () => {
  return (
    <div className='app__headerNew' >
        <img src={images.profile_picture} alt="profile" />
        <div className='app__headerNew-greeting'>
            <h1>Hi, my name is <span>Matilda</span>.</h1>
            <h1>I’m a <span>UX/UI Designer</span> and a <br /><span>Front-End Developer</span></h1>
        </div>
        <p>Scroll down to learn more</p>
        <motion.div 
            initial={{y:0}}
            whileHover={{y: 10}}
            transition={{duration: 0.5, ease: "easeOut"}}
        >
            <a href='#work'>
                <FaAngleDoubleDown />
            </a>
        </motion.div>
    </div>
  )
};

export default AppWrap(
    MotionWrap(Header_new, 'app__header_new'),
    'home');
