import React from 'react'
import { AppWrap } from "../../wrapper";
import './about.scss'
import { useRef, useEffect} from "react";
import TextSlider from "./TextSlider";
import ProgressBar from "./ProgressBar";
import Intro from "./Intro";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    const imgRef = useRef(null);
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            disable: 'mobile'
        });
    }, [])

    return (
            <section className='about' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true" ref={imgRef}>
                <div className="container about__container">   
                    <TextSlider/>
                    <ProgressBar/>
                    <Intro/> 
                </div>
            </section>
    )
}

export default AppWrap(About, "about", "about");