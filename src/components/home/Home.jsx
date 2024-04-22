import React from 'react';
import styled, { keyframes } from 'styled-components';
import kct from "../../Images/kct college.jpg"

const spin = keyframes`
  100% {
    transform: rotateY(360deg);
  }
`;

const PyramidLoader = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto; /* Center align horizontally */
  perspective: 1000px; /* Added perspective for 3D effect */
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${spin} 4s linear infinite;
`;

const Side = styled.span`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const Side1 = styled(Side)`
  transform: rotateZ(-30deg) rotateY(90deg);
  background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
`;

const Side2 = styled(Side)`
  transform: rotateZ(30deg) rotateY(90deg);
  background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
`;

const Side3 = styled(Side)`
  transform: rotateX(30deg);
  background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
`;

const Side4 = styled(Side)`
  transform: rotateX(-30deg);
  background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
`;

const Shadow = styled.div`
  width: 60px;
  height: 60px;
  background: #8b5ad5;
  position: absolute;
  top: 6;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(12px);
`;

const animatedBackgroundStyles = {
  width: '100%', // Full viewport width
  height: '100vh', // Full viewport height
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  animation: 'slideBackground 10s linear infinite',
  backgroundSize: '200% 200%',
};

const Home = () => {
  return (
    <div style={animatedBackgroundStyles}>
      <img src={kct} alt='kct' style={{ position: "absolute", zIndex: "1", width: "1100px", height: "92%", marginRight: '50px', filter: 'blur(3px)' }} />
      <PyramidLoader style={{ position: "absolute", zIndex: "2" }}>
        <Wrapper>
          <Side1 />
          <Side2 />
          <Side3 />
          <Side4 />
          <Shadow />
        </Wrapper>
      </PyramidLoader>
    </div>
  );
};

export default Home;
