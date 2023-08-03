import React from 'react'
import { AppWrap } from "../../wrapper";
import './about.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect} from "react";
import TextSlider from "./TextSlider";
import ProgressBar from "./ProgressBar";
import Intro from "./Intro";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const imgRef = useRef(null);
    useEffect(() => {
        const el = imgRef.current;
        gsap.fromTo(el, {rotation: 0}, {rotation: 360, duration: 1, scrollTrigger: {
            trigger: el
        }})

    }, [])

    return (
            <section className='about' ref={imgRef}>
                <div className="container about__container">   
                    <TextSlider/>
                    <ProgressBar/>
                    <Intro/> 
                </div>
            </section>
    )
}

export default AppWrap(About, "about", "about");