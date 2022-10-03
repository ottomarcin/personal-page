import React from 'react';
import GlassText from '../Common/GlassText';
import FrameModel from './FrameModel';

function AboutMe(props) {
  return (
    <>
      <GlassText size={0.2} position={[0, 1, -1]}>
        About Me
      </GlassText>
      <FrameModel />
    </>
  );
}

export default AboutMe;
