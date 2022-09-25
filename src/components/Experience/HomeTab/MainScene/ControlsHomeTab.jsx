import { useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';

function ControlsHomeTab(props) {
  const { camera, mouse, scene } = useThree();
  let backgroundMeshRef = undefined;
  let camToBackgroundLengthRatio = undefined;
  const controlsPower = 0.5;
  useEffect(() => {
    //waiting for reference to background to load
    backgroundMeshRef = props.backgroundRef.current;
    camToBackgroundLengthRatio =
      Math.abs(backgroundMeshRef.position.z) / camera.position.z;
  }, [props.backgroundRef.current]);

  // at https://codesandbox.io/s/react-three-fiber-v5-1sccp?file=/src/App.js
  // they used useFrame to react on mouse move, but i think more performant is onmousemove
  // event, because it doenst try to change positions of cam and background all over
  useEffect(() => {
    const sceneControls = () => {
      if (backgroundMeshRef) {
        // setting camera position according to mouse
        camera.position.set(
          mouse.x * props.power,
          mouse.y * props.power,
          camera.position.z
        );
        // and making camera face (0,0,0) point
        camera.lookAt(0, 0, 0);

        // then setting background mesh position, so it is alligned with foreground
        backgroundMeshRef.position.x =
          -mouse.x * props.power * camToBackgroundLengthRatio;
        backgroundMeshRef.position.y =
          -mouse.y * props.power * camToBackgroundLengthRatio;
      }
    };
    window.addEventListener('mousemove', () => sceneControls(), true);
    return window.removeEventListener('mousemove', () => sceneControls(), true);
  }, []);

  return null;
}

export default ControlsHomeTab;
