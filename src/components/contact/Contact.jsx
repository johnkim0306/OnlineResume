import React from 'react'
import './contact.scss'
import { AppWrap } from '../../wrapper/';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    const renderContactOption = (Icon, title, details, link) => (
        <article className="contact__option">
          <Icon className='contact__option-icon' />
          <h4>{title}</h4>
          <h5>{details}</h5>
          <a href={link}>Send a message</a>
        </article>
    );

    return (
            <section id='contact'>
                <h2 data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">Contact Me</h2>
                <h3 data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">Let's Keep in Touch</h3>
                <div className="container contact__container">
                    <div className="contact__options" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">
                        {renderContactOption(MdOutlineEmail, 'Email', 'john.kim0306@gmail.com', 'mailto:jkim39039@gmail.com')}
                        {renderContactOption(RiMessengerLine, 'Messenger', 'john kim', 'https://m.me/100000925471875')}
                        {renderContactOption(BsWhatsapp, 'WhatsApp', 'john.kim0306@gmail.com', 'https://api.whatsapp.com/send?phone+15877773519')}
                    </div>
                    <form action="" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">
                        <input type="text" name='name' placeholder="Your Full Name" required />
                        <input type="email" name='email' placeholder="Your Email" required />
                        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                        <button type='submit' className='btn btn-primary'> Send Message</button>
                    </form>
                </div>
            </section>
    )
}

export default AppWrap(Contact, 'contact', 'contact');
