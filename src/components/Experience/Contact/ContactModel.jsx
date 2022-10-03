import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useRef, useEffect } from 'react';
import GlassMaterial from '../Common/GlassMaterial';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useMouseWheel from '../Common/customHooks/useMouseWheel';

function ContactModel(props) {
  const ref = useRef();
  const model = useGLTF(
    // '/models/mailbox.glb'
    '/models/phone.glb'
    // 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Suzanne/glTF/Suzanne.gltf'
  );
  console.log(model);

  // spinning the model when user uses mouse wheel
  const handleWheel = (e) => {
    ref.current.rotation.y += e.deltaY / 100;
  };
  useMouseWheel(handleWheel);

  // automatically spinning the model when nothing happen
  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 5;
  });

  return (
    // <></>
    <mesh
      ref={ref}
      rotation={[0, -Math.PI / 4, 0]}
      position={[1.5, -0.5, -5]}
      scale={[0.1, 0.1, 0.1]}
    >
      <GlassMaterial />
      <primitive attach={'geometry'} object={model.nodes.phone.geometry} />
    </mesh>
  );
}

export default ContactModel;
