import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="http://www.linkedin.com/in/matilda-forslund-76b9b3214" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
        </div>
        <div>
            <a href="mailto:matilda.forslund00@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdEmail />
            </a>
        </div>
        {/*<div>
            <a href="mailto:matilda.forslund00@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
        </div>*/}
    </div>
  )
}

export default SocialMedia
