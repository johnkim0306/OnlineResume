import React from 'react'
import {FaFacebookF, FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.facebook.com/profile.php?id=100000925471875" target="_blank"> <FaFacebookF /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/john-k-51a119129/" target="_blank"> <BsLinkedin /></a>
            </div>
            <div>
                <a href="https://github.com/johnkim0306" target="_blank"> <FaGithub /></a>
            </div>
            
        </div>
    )
}

export default SocialMedia
