import React from 'react';
import GlassText from '../Common/GlassText';
import ComputerModel from './ComputerModel';

function WorkExperience(props) {
  return (
    <>
      <GlassText size={0.18} position={[0, 1, -1]}>
        Experience
      </GlassText>
      <ComputerModel />
      <directionalLight intensity={2} position={[-0.2, 0, 5]} />
    </>
  );
}

export default WorkExperience;
