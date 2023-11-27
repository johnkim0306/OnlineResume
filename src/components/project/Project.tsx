import React from 'react'
import styled from "styled-components";
import { media } from "../../scss/theme";
import { projects } from "./data";
import ProjectBox from "./ProjectBox";
import { AppWrap } from '../../wrapper';
import './project.scss'

const Title = styled.div<{ text: string }>`
  font-size: 4rem;
  left: 0rem;
  top: 1rem;
  color: #00f18c;
  position: absolute;
  box-sizing: border-box;
  font-weight: 800;
  width: 100%;
  ${media.tablet} {
    font-size: 8rem;
    left: 10rem;
  }
  ::after {
    content: "${({ text }) => `${text}`}";
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 0.1rem #2c3fe9;
    top: -0.4rem;
    left: -0.4rem;
  }
`;
const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 10rem;
  box-sizing: border-box;
  .contents {
    margin-top: 5rem;
    //background-color: #000;
    padding: 1rem 1rem;
    display: flex;
    font-size: 1rem;
    flex-direction: column;
    &__content {
      padding-top: 5rem;
      width: 100%;
      color: white;
    }
    ${media.tablet} {
      padding: 8rem;
      padding-bottom: 20rem;
    }
  }
`;

const Project = () => {
    return (
            <section id='project' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true">
                <div className="container project__container">
                    <Container>
                        <Title text="Projects.">Projects.</Title>
                        <div className="contents">
                            {projects.map((project, idx) => (
                            <div className="contents__content" key={idx.toString()}>
                                <ProjectBox {...{ project, idx }} />
                            </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </section>
    )
}

export default AppWrap(Project, 'project', 'project');
