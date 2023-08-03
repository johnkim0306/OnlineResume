import styled, { keyframes } from "styled-components";

const ProgressBar = () => (
  <Container>
    <Progress />
  </Container>
);

const Container = styled.div`
  position: relative;
  height: 0.3rem;
  width: 60%;
`;

const progress = keyframes`
0% {
  width: 0%;
}

70% {
  width: 100%;
}
`;

const Progress = styled.div`
  height: 0.3rem;
  background: linear-gradient(128.93deg, rgb(0, 173, 181) 22.41%, rgb(57, 62, 70) 93.45%);
  position: absolute;
  animation: ${progress} 4s infinite;
`;

export default ProgressBar;