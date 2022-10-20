import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useRef, useEffect } from 'react';
import GlassMaterial from '../Common/GlassMaterial';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useMouseWheel from '../Common/customHooks/useMouseWheel';
import frameModel from '../../../assets/models/frame.glb';

function FrameModel(props) {
  const ref = useRef();
  const model = useGLTF(frameModel);
  // spinning the model when user uses mouse wheel
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
      ref={ref}
      position={[1, -0.5, -5]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[1.5, 1.5, 1.5]}
    >
      <GlassMaterial />
      <primitive
        attach={'geometry'}
        object={model.nodes.g_PictureFrame.geometry}
      />
    </mesh>
  );
}

export default FrameModel;
