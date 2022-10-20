import { useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';
import { useRef, useEffect, useMemo } from 'react';
import GlassMaterial from '../Common/GlassMaterial';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useMouseWheel from '../Common/customHooks/useMouseWheel';
import computerModel from '../../../assets/models/computer-merged.glb';

function ComputerModel(props) {
  const ref = useRef();
  const { nodes } = useGLTF(computerModel);

  const handleWheel = (e) => {
    ref.current.rotation.z -= e.deltaY / 100;
  };
  useMouseWheel(handleWheel);
  // automatically spinning the model when nothing happen
  useFrame((state, delta) => {
    ref.current.rotation.z -= delta / 5;
  });

  return (
    <mesh
      rotation={[Math.PI / 2, 0, -Math.PI / 3]}
      position={[1, -1, -5]}
      ref={ref}
      scale={[0.005, 0.005, 0.005]}
    >
      <GlassMaterial />
      <primitive attach={'geometry'} object={nodes.Boole_1.geometry} />
    </mesh>
  );
}

export default ComputerModel;
