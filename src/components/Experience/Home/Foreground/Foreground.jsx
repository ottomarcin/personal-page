import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useMemo, useEffect } from 'react';
import ForegroundShaderMaterial from './ForegroundShaderMaterial.jsx';
import calcPlaneSizesAtZOffset from '../../utils/calcPlaneSizesAtZOffset.js';
import * as THREE from 'three';
import ForegroundPlaneGeometry from './ForegroundPlaneGeometry';

function Foreground(props) {
  const foregroundMeshRef = useRef();
  const { camera, size } = useThree();
  const geometryRef = useRef();
  // console.log(geometryRef.current);

  return (
    <mesh
      name='Foreground'
      ref={foregroundMeshRef}
      position={[0, 0, props.zPosition - 1]}
    >
      <ForegroundPlaneGeometry
        geometryRef={geometryRef}
        screenSize={size}
        zPosition={props.zPosition - 1}
      />
      <ForegroundShaderMaterial
        time={props.time}
        // planeAspectRatio={foregroundSize.width / foregroundSize.height}
        planeAspectRatio={size.width / size.height}
        geometry={geometryRef.current}
        zPosition={props.zPosition}
        mouse={props.mouse}
      />
    </mesh>
  );
}

const calculateSizes = (camera, bgZPosition) => {
  //calculating size of plane based on tangent of cam's fov and
  //distance from optical center of cam to Foreground plane
  const { width, height } = calcPlaneSizesAtZOffset(
    camera.position.z - bgZPosition,
    camera
  );
  console.log(`width: ${width} height: ${height}`);
  return [width, height];
};

export default Foreground;
