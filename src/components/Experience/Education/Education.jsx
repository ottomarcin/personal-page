import React from 'react';
import GlassText from '../Common/GlassText';
// eslint-disable-next-line
import MouseParallaxControls from '../Common/ParallaxControls/MouseParallaxControls';
import GraduationHatModel from './GraduationHatModel';

function Education({ mouse }) {
  return (
    <>
      {/* default controls works better, but leaving it here for future */}
      {/* <MouseParallaxControls power={parallaxControlsPower} mouse={mouse} /> */}
      <GlassText size={0.2} position={[0, 1, -1]}>
        Education
      </GlassText>
      <GraduationHatModel />
    </>
  );
}

export default Education;
