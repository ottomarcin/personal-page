import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useContext } from 'react';
import * as THREE from 'three';
import backgroundVertexShader from '../../shaders/background/vertex.glsl.js';
import backgroundFragmentShader from '../../shaders/background/fragment.glsl.js';
import calcPlaneSizesAtZOffset from '../../utils/calcPlaneSizesAtZOffset';

export default function BackgroundShaderMaterial(props) {
  const get = useThree((state) => state.get);

  const backgroundPatternMultiplier = calculateBackgroundPatternMultiplier(
    get().camera,
    props.zPosition
  );

  //uniforms - variables for shaders
  const uniforms = useMemo(
    () => ({
      uTime: { value: props.time },
      uBackgroundMultiplier: {
        value: backgroundPatternMultiplier,
      },
      // uBackgroundMultiplier: { value: 1 },
      uUpperPatternColor: {
        value: new THREE.Color(0x4f707d).convertLinearToSRGB(),
      }, //0x7da6bc
      uDownPatternColor: {
        value: new THREE.Color(0xb59e82).convertLinearToSRGB(),
      },
      uBackgroundColor: {
        value: new THREE.Color(0x8ec9da).convertLinearToSRGB(),
      },
    }),
    []
  );

  // //every frame time is being updated
  // useFrame((state, delta) => {
  //   // console.log(delta);
  //   // https://github.com/pmndrs/react-three-fiber/discussions/1991
  //   uniforms.uTime.value += delta * 1000;
  // });

  useEffect(() => {
    uniforms.uTime.value = props.time;
  }, [props.time]);

  return (
    <shaderMaterial
      fragmentShader={backgroundFragmentShader}
      vertexShader={backgroundVertexShader}
      uniforms={uniforms}
      side={THREE.DoubleSide}
    />
  );
}
const calculateBackgroundPatternMultiplier = (camera, bgZPosition) => {
  //in order to match pattern on bg and fg we need to calculate coordinates multiplier

  //calculating background sizes, unfortunately cant read its sizes, because it doesnt exist yet
  const backgroundSizes = calcPlaneSizesAtZOffset(
    camera.position.z - bgZPosition,
    camera
  );
  const foregroundSizes = calcPlaneSizesAtZOffset(camera.position.z, camera);
  return backgroundSizes.height / foregroundSizes.height;
};
