import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

export default function GlassMaterialStandard() {
  const loader = new RGBELoader();
  const envMap = loader.load(
    'environmentMaps/warehouse/Warehouse-with-lights-brightened.hdr'
    // () => (hdrEquirect.mapping = THREE.EquirectangularReflectionMapping)
  );
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
  //   console.log(envMap);
  const material = new THREE.MeshPhysicalMaterial(materialArgs);
  return material;
}
