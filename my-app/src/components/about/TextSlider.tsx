import styled, { keyframes } from "styled-components";
import { media } from "../../scss/theme";

const slide = keyframes`
0% {
  margin-left: 0;
}

15% {
  margin-left: 0;
}

20% {
  margin-left: -100%;
}

35% {
  margin-left: -100%;
}

40% {
  margin-left: -200%;
}

55% {
  margin-left: -200%;
}

60% {
  margin-left: -300%;
}

75% {
  margin-left: -300%;
}

80% {
  margin-left: -400%;
}

95% {
  margin-left: -400%;
}

100% {
  margin-left: 0;
}
`;

const texts = ['FullStack',  'React',  'HTML / CSS',  'Javascript',  'Typescript'];

const TextSlider = () => (
  <div style={{width: "100%", overflow: "hidden"}}>
    <SlideAnimation>
      {texts.map(text => (
        <Slide key={text}>
          <span className="__text">{text}</span>
        </Slide>
      ))}
    </SlideAnimation>
  </div>
);

const SlideAnimation = styled.div`
  width: 500%;
  overflow: hidden;
  display: flex;
  animation: ${slide} 20s infinite;
`;

const Slide = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  padding-left: 4%;
  width: 100%;
  .__text {
    background: #00ADB5;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${media.tablet} {
    font-size: 4.5rem;
  }
`;

export default TextSlider;