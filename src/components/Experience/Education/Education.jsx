import React from 'react';
import GlassText from '../Common/GlassText';
import MouseParallaxControls from '../Common/ParallaxControls/MouseParallaxControls';
import GraduationHatModel from './GraduationHatModel';

// pseudo-random shuffling array of data and passing to context, so it's accessible from every component
function Education({ mouse }) {
  return (
    <>
      {/* <MouseParallaxControls power={parallaxControlsPower} mouse={mouse} /> */}
      <GlassText size={0.2} position={[0, 1, -1]}>
        Education
      </GlassText>
      <GraduationHatModel />
    </>
  );
}

export default Education;
