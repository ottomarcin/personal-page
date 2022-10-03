import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useRef } from 'react';
import GlassMaterial from '../Common/GlassMaterial';
import { useFrame } from '@react-three/fiber';
import useMouseWheel from '../Common/customHooks/useMouseWheel';

function GraduationHatModel(props) {
  const ref = useRef();
  const model = useGLTF(
    '/models/hat.glb'
    // 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Suzanne/glTF/Suzanne.gltf'
  );

  // spinning the model when user uses mouse wheel
  const handleWheel = (e) => {
    ref.current.rotation.y -= e.deltaY / 100;
  };
  useMouseWheel(handleWheel);

  // spinning the model
  useFrame((state, delta) => {
    ref.current.rotation.y -= delta / 5;
  });

  return (
    <mesh ref={ref} position={[1.5, -1, -5]} scale={[10, 10, 10]}>
      <GlassMaterial />
      <primitive
        attach={'geometry'}
        object={model.nodes.mortarboard.geometry}
      />
    </mesh>
  );
}

export default GraduationHatModel;
