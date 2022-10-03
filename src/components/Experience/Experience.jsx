import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import ExperienceElements from './ExperienceElements';
import styled from 'styled-components';
import * as THREE from 'three';
import OptionsContext from '../../context/optionsContext';

// the idea is to have one threejs file - experience - and make routing here
// and second for html stuff

const ThreejsWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: #8ec9da;
  overflow: hidden;
`;

function Experience(props) {
  const ContextBridge = useContextBridge(OptionsContext); //passing context content to 3js app
  const canvasRef = useRef();
  // if pixel ratio equals 1, set it to one, if is greater, set to 2
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  // antialiasing isnt nessesery if pixel ratio is greater than one, optimization stuff
  const antialiasing = window.devicePixelRatio > 1 ? 'false' : 'true';

  return (
    <ThreejsWrapper>
      <Canvas
        gl={{
          toneMapping: THREE.NoToneMapping,
          pixelRatio: pixelRatio,
          powerPreference: 'high-performance',
        }}
        linear
        // ref={canvasRef}
        camera={{ position: [0, 0, 5], fov: 30 }}
        antialiasing={antialiasing}
      >
        <ContextBridge>
          {/* in order to use r3f hooks i had to break this component down to another one */}
          {/* more here:  */}
          {/* <ExperienceElements canvas={canvasRef.current} /> */}
          <ExperienceElements />
        </ContextBridge>
      </Canvas>
    </ThreejsWrapper>
  );
}

export default Experience;
