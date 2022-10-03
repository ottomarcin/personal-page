import React, { useRef } from 'react';
import BackgroundShaderMaterial from './BackgroundShaderMaterial.jsx';
import { useThree } from '@react-three/fiber';
import BackgroundPlaneGeometry from './BackgroundPlaneGeometry.jsx';

function Background(props) {
  return (
    <mesh
      ref={props.backgroundRef}
      name='Background'
      position={[0, 0, props.zPosition]}
    >
      <BackgroundPlaneGeometry
        parallaxControlsPower={props.parallaxControlsPower}
        zPosition={props.zPosition}
      />
      <BackgroundShaderMaterial time={props.time} zPosition={props.zPosition} />
    </mesh>
  );
}

export default Background;
