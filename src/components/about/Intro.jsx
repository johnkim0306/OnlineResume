import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";  
import styled from "styled-components";
import { media } from "../../scss/theme";

const TextBox = styled.div`
    font-size: .875rem;
    line-height: 200%;
    font-weight: 700;
    ${media.tablet} {
        white-space: pre-line;
        line-height: 230%;
        font-size: 1.1rem;
        padding-left: 7rem;
    }
`;

const Bold = styled.span`
    font-size: 1.5rem;
    font-weight: 800;
    font-weight: 700;
    font-size: 1.3rem;
    margin-left: 0.3rem;
    background: linear-gradient(128.93deg, rgb(0, 173, 181) 22.41%, rgb(57, 62, 70) 93.45%) ;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${media.tablet} {
        font-weight: 700;
        font-size: 1.3rem;
    }
`;
const openEmail = () => window.open("mailto:jkim38039@gmail.com");
const InfoItem = ({ icon, label, value, onClick }) => (
    <div className="about__content--info" onClick={onClick}>
      <div className="about__icon">
        {icon}
      </div>
      <div className="about__field">
        <div className="about__field--label">
          {label}
        </div>
        <div className="about__field--value">
          {value}
        </div>
      </div>
    </div>
  );

const Intro = () => {
    return (
        <div className="about__content">
            <div className="about__content--left">
                <div className='about__content--container'>
                    <InfoItem icon={<BsFillPersonFill />} label="Name" value="John KIM" onClick={openEmail} />
                    <InfoItem icon={<MdEmail />} label="Email" value="jkim38039@gmail.com" onClick={openEmail} />
                    <InfoItem icon={<FaUniversity />} label="University" value="University of Calgary" onClick={openEmail} />
                    <InfoItem icon={<BiCurrentLocation />} label="Location" value="Canada" onClick={openEmail} />
                </div>
            </div>
            <div className="about__content--right">
                <TextBox className="flex pc-only">
                    <div>
                        I am a recent <Bold>graduate</Bold> with a degree in computer science from the<Bold>University of Calgary</Bold>.
                        I am passionate about developing an application that <Bold>impacts</Bold> people!
                        I focus mainly on <Bold>web applications</Bold> and I have worked with several teams and became very familiar with
                        the software<Bold>development process</Bold> and its<Bold>stages</Bold>. {"\n"}
                        I have experience with building applications  in a team that follows a fast-paced<Bold>agile development</Bold>. 
                        My job stretched from fixing bugs, built features, to working closely with stakeholders to transform<Bold>product requirements </Bold> 
                        into<Bold>detailed designs</Bold> and<Bold>releasing</Bold> the end product. I am comfortable working in a team-based environment and<Bold>indepedently </Bold>
                        as I have previous experience with it. 
                        I take ownership of my work and am accountable for the<Bold>quality</Bold> and<Bold>timeliness</Bold> of an outcome.
                    </div>
                </TextBox>
            </div>
        </div>
    )
}

export default Intro