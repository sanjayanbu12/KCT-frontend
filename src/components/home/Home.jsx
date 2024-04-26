import React from 'react';
import kct from "../../Images/kct college.jpg"

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
      
    </div>
  );
};

export default Home;
