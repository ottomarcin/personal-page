import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useMemo, useEffect } from 'react';
import ForegroundShaderMaterial from './ForegroundShaderMaterial.jsx';
import calcPlaneSizesAtZOffset from '../../utils/calcPlaneSizesAtZOffset.js';
import * as THREE from 'three';
import ForegroundPlaneGeometry from './ForegroundPlaneGeometry';

function Foreground(props) {
  const foregroundMeshRef = useRef();
  const { size } = useThree();
  console.log('size');
  console.log(size);
  const { camera } = useThree();
  const state = useThree();
  const windowSize = 0.15;
  const foregroundSize = calcPlaneSizesAtZOffset(
    camera.position.z - props.zPosition,
    camera
  );
  // current value of
  let wheelValue = 0;

  const handleWheel = (e) => {
    wheelValue += e.deltaY;
    const sinValue = Math.sin(wheelValue / 1000) * 0.5;
    foregroundMeshRef.current.material.uniforms.uWindowSize.value =
      windowSize + windowSize * sinValue;
  };

  useEffect(() => {
    handleWheel({ deltaY: 0 });
    console.log(state);
    // camera.position.set(0.5, 0.5, 5);
  }, []);

  // useEffect(() => {
  //   uniforms.uWindowSize.value = THREE.MathUtils.lerp(0);
  // }, []);

  return (
    <mesh
      name='Foreground'
      ref={foregroundMeshRef}
      position={[0, 0, props.zPosition - 1]}
      onPointerMove={(e) =>
        // sending information about mouse position to shaderMaterial
        foregroundMeshRef.current.material.uniforms.uMousePosition.value.copy(
          e.uv
        )
      }
      onWheel={(e) => {
        // wheelValue += e.deltaY;
        // const sinValue = Math.sin(wheelValue / 1000) * 0.5;
        // foregroundMeshRef.current.material.uniforms.uWindowSize.value =
        //   windowSize + windowSize * sinValue;
        handleWheel(e);
      }}
    >
      <ForegroundPlaneGeometry
        screenSize={size}
        zPosition={props.zPosition - 1}
      />
      {/* <planeGeometry
        args={[
          foregroundSize.width * 1.4,
          foregroundSize.height * 1.4,
          size.width / 2,
          size.height / 2,
        ]}
      /> */}
      <ForegroundShaderMaterial
        // mousePositionUniform={randomMousePosition}
        initialTime={props.initialTime}
        planeAspectRatio={foregroundSize.width / foregroundSize.height}
        planeSize={foregroundSize}
        zPosition={props.zPosition}
      />
      {/* <meshBasicMaterial color={'blue'} transparent opacity={0.5} /> */}
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
