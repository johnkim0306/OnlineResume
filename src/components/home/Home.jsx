import React, { useEffect } from "react";
import './home.scss'
import Me from '../../assets/logo.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { AppWrap } from '../../wrapper';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            disable: 'mobile'
        });
    }, [])

    return (
            <div className="container home__container">
                <div className="intro" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">
                    <h5>Hello I'm</h5>
                    <h1>John Kim</h1>
                    <h5 className="text-light">Software Developer</h5>
                    <hr/>
                </div>
                <div className="me" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">
                    <img src={Me} alt="me" />
                </div>
            </div>
    )
}
export default AppWrap(Home, 'home', 'home');
