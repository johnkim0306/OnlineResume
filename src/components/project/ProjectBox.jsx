import styled from "styled-components";
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Website } from '../../assets/website.svg';
import { media } from "../../scss/theme";

const ProjectBox = ({ project, idx }) => {
  const isEven = (idx + 1) % 2 === 0;
  const dataAos = isEven ? "flip-right" : "flip-left";
  const containerClass = isEven ? "blue-container" : "green-container";

  return (
    <Container data-aos={dataAos}>
      <div className={`container ${containerClass}`}>
        <div className="title">{project.title}</div>
        <div className="date">{project.date}</div>
        <div className="skills">
          {project.skills.map((skill) => (
            <div className="skills__skill">{skill}</div>
          ))}
        </div>
        <div className="intro">{project.about}</div>
        <div style={{ marginTop: "0.5rem" }}>
          {project.contents.map((content) => (
            <div className="content">{content}</div>
          ))}
        </div>
        <div className="icons">
          {project?.github && (
            <Github
              className="svg"
              onClick={() => window.open(project.github)}
            />
          )}
          {project?.website && (
            <Website
              className="svg"
              onClick={() => window.open(project.website)}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .container {
    padding: 2rem;
    position: relative;
    border-radius: 2rem;
    background-color: #101010;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    ${media.tablet} {
      margin-bottom: 0rem;
    }
    .title {
      font-weight: 800;
      position: absolute;
      padding: 1rem;
      border-radius: 2rem;
      top: -2rem;
      padding: 1rem;
    }
    .date {
      padding: 0 1rem;
      position: absolute;
      background-color: #101010;
      top: -0.2rem;
      color: white;
      ${media.tablet} {
        top: -0.1rem;
      }
    }
    .skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      font-size: .6rem;
      &__skill {
        margin-right: 0.5rem;
          margin-top: 0.3rem;
          padding: 0.2rem 0.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
      }
      ${media.tablet} {
        display: flex;
        margin: 0.5rem 0;
        font-size: 1rem;
        &__skill {
          background-color: #fff;
          color: #000;
          padding: 0.2rem;
          border-radius: 0.5rem;
          :not(:first-child) {
            margin-left: 0.5rem;
            ${media.tablet} {
              margin-left: 0;
            }
          }
        }
      }
    }
    .intro {
      margin: 0.5rem 0;
      font-weight: 800;
      font-size: 1.2rem;
    }
    .content {
      line-height: 2em;
      list-style-type: circle;
      display: list-item;
      ${media.tablet} {
        line-height: 1.5rem;
      }
    }
    .icons {
      display: flex;
      position: absolute;
      bottom: -1rem;
      right: 2rem;
    }
    .svg {
      cursor: pointer;
      width: 3rem;
      :hover {
        fill: white;
      }
      :not(:last-child) {
        margin-right: 0.5rem;
      }

    }
  }
  .green-container {
    margin-right: 0rem;
    border: 0.1rem solid #00f18c;
    .title {
      color: #000;
      background-color: #00f18c;
      border: 0.1rem solid #00f18c;
      left: -1rem;
      transform: rotate(-10deg);
      ${media.tablet} {
        left: -3rem;
      }
    }
    .date {
      right: 0rem;
    }
    .intro {
      color: #00f18c;
    }
    .svg {
      fill: #00f18c;  
    }
    .icons {
      color: #00f18c;
    }
    ${media.tablet} {
      margin-right: 30rem;
      font-size: 1rem;
      width: auto;
    }
  }
  .blue-container {
    margin-left: 0rem;
    border: 0.1rem solid #2c3fe9;
    .title {
      color: #fff;
      background-color: #2c3fe9;
      border: 0.1rem solid #2c3fe9;
      left: -1rem;
      transform: rotate(-10deg);
      ${media.tablet} {
        left: -3rem;
      }
    }
    .date {
      right: 2rem;
    }
    .intro {
      color: #2c3fe9;
    }
    .svg {
      fill: #2c3fe9;
    }
    ${media.tablet} {
      margin-left: 30rem;
      font-size: 1rem;
    }
  }
`;

export default ProjectBox;