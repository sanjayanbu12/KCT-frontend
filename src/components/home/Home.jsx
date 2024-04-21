import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Lotties/Lottie1.json';

const Home = () => {
  // Configuration options for the Lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' // Centers the animation
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '50vw', height: '50vh' }}> {/* Adjust size as needed */}
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
}

export default Home;
