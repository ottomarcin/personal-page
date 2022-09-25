import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useContext } from 'react';
import { useMemo } from 'react';
import * as THREE from 'three';
import OptionsContext from '../../../../context/optionsContext';
import fragmentGlsl from '../../shaders/foreground/fragment.glsl';
import vertexGlsl from '../../shaders/foreground/vertex.glsl';

function ForegroundShaderMaterial(props) {
  const get = useThree((state) => state.get);
  console.log(get().clock.getElapsedTime());

  const aspect = props.planeAspectRatio;

  useEffect(() => {
    uniforms.uAspectRatio.value = props.planeAspectRatio;
  }, [props.planeAspectRatio]);

  // useMemo usage mandatory - https://github.com/pmndrs/react-three-fiber/discussions/440
  const uniforms = useMemo(
    () => ({
      uTime: { value: props.initialTime },
      uMousePosition: {
        value: new THREE.Vector2(0.5, 0.5),
        // value: props.mousePositionUniform,
      },
      uAspectRatio: { value: aspect },
      uWindowSize: { value: 0.14455 }, //0.14455
      // uWindowSize: { value: this.windowSize }, //0.14455
      // uBackgroundMultiplier: { value: Math.sqrt(10) },
      uShadowVariable: { value: 0.45 },
      // uShadowVariable: { value: 0.1 },
    }),
    []
  );

  //every frame the time is being updated
  useFrame((state, delta) => {
    // uniforms.uTime.value = state.clock.getElapsedTime() * 1000;
    uniforms.uTime.value += delta * 1000;
    // initialTime += delta * 1000;
  });

  return (
    <shaderMaterial
      fragmentShader={fragmentGlsl}
      vertexShader={vertexGlsl}
      uniforms={uniforms}
      side={THREE.DoubleSide}
      transparent
    />
  );
}

export default ForegroundShaderMaterial;
