import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import Background from '../Common/Background/Background';
import HomeTextsLayout from './MainScene/HomeTextsLayout';
import Foreground from './Foreground/Foreground';
import ControlsHomeTab from './MainScene/ControlsHomeTab';
// import Helper from './Helper';
import OptionsContext from '../../../context/optionsContext';

const ThreejsWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: white;
`;

// pseudo-random shuffling array of data and passing to context, so it's accessible from every component
function Home(props) {
  const ContextBridge = useContextBridge(OptionsContext); //passing context content to 3js app
  const canvasRef = useRef();
  const backgroundRef = useRef();
  // if pixel ratio equals 1, set it to one, if is greater, set to 2
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  // antialiasing isnt nessesery if pixel ratio is greater than one, optimization stuff
  const antialiasing = window.devicePixelRatio > 1 ? 'false' : 'true';

  //seting initial time for effects
  const initialTime = Math.random() * 1000000;

  //controls power - how much cam is being translated with mouse move
  const controlsPower = 0.5;

  return (
    <ThreejsWrapper>
      <Canvas
        gl={{
          toneMapping: THREE.NoToneMapping,
          pixelRatio: pixelRatio,
          powerPreference: 'high-performance',
        }}
        linear
        ref={canvasRef}
        camera={{ position: [0, 0, 5], fov: 30 }}
        antialiasing={antialiasing}
      >
        <ContextBridge>
          {/* <OrbitControls /> */}
          <Background
            initialTime={initialTime}
            backgroundRef={backgroundRef}
            canvasRef={canvasRef.current}
            zPosition={-20}
            parallaxControlsPower={controlsPower}
          />
          <HomeTextsLayout backgroundRef={backgroundRef} />
          <Foreground initialTime={initialTime} zPosition={0} />
          <ControlsHomeTab
            backgroundRef={backgroundRef}
            power={controlsPower}
          />
        </ContextBridge>
      </Canvas>
      {/* <Helper /> */}
    </ThreejsWrapper>
  );
}

export default Home;
