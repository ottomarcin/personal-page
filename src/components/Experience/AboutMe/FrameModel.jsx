import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useRef, useEffect } from 'react';
import GlassMaterial from '../Common/GlassMaterial';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useMouseWheel from '../Common/customHooks/useMouseWheel';

function FrameModel(props) {
  const ref = useRef();
  const model = useGLTF(
    '/models/frame.glb'
    // 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Suzanne/glTF/Suzanne.gltf'
  );
  console.log(model);
  // spinning the model when user uses mouse wheel
  const handleWheel = (e) => {
    ref.current.rotation.z -= e.deltaY / 100;
  };
  useMouseWheel(handleWheel);
  // useEffect(() => {
  //   // add listener on wheel on component mounting
  //   window.addEventListener('wheel', handleWheel);
  //   return () => {
  //     // remove listener on wheel on component unmounting
  //     window.removeEventListener('wheel', handleWheel);
  //   };
  // }, []);

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
      {/* // <mesh ref={ref} position={[1.5, -1, -5]}> */}
      <GlassMaterial />
      <primitive
        attach={'geometry'}
        object={model.nodes.g_PictureFrame.geometry}
      />
    </mesh>
  );
}

export default FrameModel;
