import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import Background from '../Common/Background/Background';
import GlassText from '../Common/GlassText';
import EducationHtml from './HtmlContent/EducationHtml';
import MouseParallaxControls from '../Common/ParallaxControls/MouseParallaxControls';
import GraduationHatModel from './GraduationHatModel';
import { DirectionalLight } from 'three';

const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: #8ec9da;
  overflow: hidden;
`;

// pseudo-random shuffling array of data and passing to context, so it's accessible from every component
function Education(props) {
  const canvasRef = useRef();
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  const antialiasing = window.devicePixelRatio > 1 ? 'false' : 'true';

  // mouse position
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  //seting initial time for effects
  const initialTime = Math.random() * 1000000;

  // power of MouseParallaxControls offsetting camera position with mouse move
  const parallaxControlsPower = 0.5;

  // handling moving mouse in parent element and then sending its position to r3f component
  // this approach benefits are ability to put html on top of r3f components and still be able to make effects with mouse position
  const handleMouseMove = (e) => {
    const x = (2 * e.clientX) / canvasRef.current.clientWidth - 1;
    const y = 1 - (2 * e.clientY) / canvasRef.current.clientHeight;
    setMouse({ x, y });
  };

  useEffect(() => {
    // add listener on mount
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      // removing event on unmount
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <EducationHtml />
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
        <MouseParallaxControls power={parallaxControlsPower} mouse={mouse} />
        <Background
          initialTime={initialTime}
          canvasRef={canvasRef.current}
          zPosition={-20}
          parallaxControlsPower={parallaxControlsPower}
        />
        <GlassText size={0.2} position={[0, 1, -1]}>
          Education
        </GlassText>
        <GraduationHatModel />
      </Canvas>
    </Wrapper>
  );
}

export default Education;
