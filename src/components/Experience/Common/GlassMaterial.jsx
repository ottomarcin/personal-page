import { useLoader } from '@react-three/fiber';
import React from 'react';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import * as THREE from 'three';

function GlassMaterial(props) {
  //downloading envMap - r3f way
  const envMap = useLoader(
    RGBELoader,
    'environmentMaps/warehouse/Warehouse-with-lights-brightened.hdr'
    // 'environmentMaps/warehouse/Warehouse-with-lights.hdr'
    // 'environmentMaps/warehouse/empty_warehouse_01_1k_bright-floor.hdr'
    // 'environmentMaps/warehouse/empty_warehouse_01_1k.hdr'
    // 'environmentMaps/studio/hdre_152_2K.hdr'
    // 'environmentMaps/test/10.hdr'
  );
  //5 ok, ale potrzebuje swiatel od przodu, pow: 3
  // 6 bez jaj
  //7 lipa, zbyt regularne
  // 10 i pow2  niezle
  envMap.mapping = THREE.EquirectangularReflectionMapping;

  const materialArgs = {
    side: THREE.DoubleSide,
    roughness: 0,
    // metalness: 1,
    metalness: 0,
    // transmission: 0,
    transmission: 1,
    // clearcoat: 1,
    thickness: 0.3,
    envMap: envMap,
    envMapIntensity: 2.5,
  };
  return <meshPhysicalMaterial {...materialArgs} />;
}

export default GlassMaterial;
