import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <FaLinkedinIn />
        </div>
        <div>
            <MdEmail />
        </div>
        <div>
            <FaGithub />
        </div>
    </div>
  )
}

export default SocialMedia
