import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
 

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <HashLink smooth to={`/#home`}>
                    <img src={images.matilda_black} alt="m_logo" />
                </HashLink>
            </div>
            <ul className='app__navbar-links'>
                {['home', 'work', 'skills', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}> 
                        <HashLink smooth to={`/#${item}`}>{item}</HashLink>
                        <div />
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0]}}
                        transition={{ duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {['home', 'work', 'skills', 'contact'].map((item) => (
                            <li key={item}> 
                                <HashLink smooth to={`/#${item}`} onClick={(() => setToggle(false))}>{item}</HashLink>
                            </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar
