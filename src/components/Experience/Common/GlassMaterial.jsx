import { useLoader } from '@react-three/fiber';
import React from 'react';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import * as THREE from 'three';

function GlassMaterial(props) {
  // now envmap is outsourced to Environment element from r3f/drei
  //downloading envMap - r3f way
  // const envMap = useLoader(
  //   RGBELoader,
  //   'environmentMaps/warehouse/Warehouse-with-lights-brightened.hdr'
  // );
  // envMap.mapping = THREE.EquirectangularReflectionMapping;

  const materialArgs = {
    side: THREE.DoubleSide,
    roughness: 0,
    // metalness: 1,
    metalness: 0,
    // transmission: 0,
    transmission: 1,
    // clearcoat: 1,
    thickness: 0.3,
    // envMap: envMap,
    envMapIntensity: 2.5,
  };
  return <meshPhysicalMaterial {...materialArgs} />;
}

export default GlassMaterial;
