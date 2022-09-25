import * as THREE from 'three';

export default function calcBBoxOfGeometry(geometry) {
  let bBoxSizes = new THREE.Vector3();
  //bbox dimensions of text
  geometry.computeBoundingBox();
  //   geometry.computeBoundingSphere();
  //   geometry.center();
  geometry.boundingBox.getSize(bBoxSizes);
  //note: bbox changes after scaling geometry, NOT mesh
  //but changing scale of geometry is much more expensive computationaly
  //https://stackoverflow.com/questions/45479967/inplace-scaling-three-js-geometry-in-one-direction-without-correcting-position-o
  //so when computing bbox we've got to multiply it by mesh scale
  return [bBoxSizes.x, bBoxSizes.y];
}
