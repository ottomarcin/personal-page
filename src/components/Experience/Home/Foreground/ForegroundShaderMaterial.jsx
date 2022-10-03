import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useContext } from 'react';
import { useMemo } from 'react';
import * as THREE from 'three';
import OptionsContext from '../../../../context/optionsContext';
import useMouseWheel from '../../Common/customHooks/useMouseWheel';
import fragmentGlsl from '../../shaders/foreground/fragment.glsl';
import vertexGlsl from '../../shaders/foreground/vertex.glsl';

function ForegroundShaderMaterial(props) {
  const get = useThree((state) => state.get);

  let mouseInScene = new THREE.Vector3();

  useEffect(() => {
    uniforms.uAspectRatio.value = props.planeAspectRatio;
  }, [props.planeAspectRatio]);

  // calculating mouse position on the plane
  useEffect(() => {
    if (props.geometry) {
      mouseInScene.set(props.mouse.x, props.mouse.y, 0.5);
      mouseInScene.unproject(get().camera);
      const dir = mouseInScene.sub(get().camera.position).normalize();
      const distance = -get().camera.position.z / dir.z;

      let positionInScene = get()
        .camera.position.clone()
        .add(dir.multiplyScalar(distance));

      const divisor = {
        x:
          props.geometry.parameters.width / 2 -
          props.geometry.boundingSphere.center.x,
        y:
          props.geometry.parameters.height / 2 -
          props.geometry.boundingSphere.center.y,
      };

      const positionInSceneModified = {
        x: (positionInScene.x / divisor.x + 1) * 0.5,
        y: (positionInScene.y / divisor.y + 1) * 0.5,
      };
      uniforms.uMousePosition.value.set(
        positionInSceneModified.x,
        positionInSceneModified.y
      );
    }
  }, [props.mouse]);

  // size of 'hole' in the plane
  const windowSize = 0.15;
  // current value of
  let wheelValue = 0;

  // changinng size of the window, when user uses mouse wheel
  const handleWheel = (e) => {
    wheelValue += e.deltaY;
    const sinValue = Math.sin(wheelValue / 1000) * 0.5;
    uniforms.uWindowSize.value = windowSize + windowSize * sinValue;
  };

  useMouseWheel(handleWheel);

  // useMemo usage mandatory - https://github.com/pmndrs/react-three-fiber/discussions/440
  let uniforms = useMemo(
    () => ({
      uTime: { value: props.time },
      uMousePosition: {
        value: new THREE.Vector2(0.5, 0.5),
      },
      uAspectRatio: { value: props.planeAspectRatio },
      uWindowSize: { value: 0.14455 }, //0.14455
      uShadowVariable: { value: 0.45 },
    }),
    []
  );

  // updating uniform value when new time comes from parent component
  useEffect(() => {
    uniforms.uTime.value = props.time;
  }, [props.time]);

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
