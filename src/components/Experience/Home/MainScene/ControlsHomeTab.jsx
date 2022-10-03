import { useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';

function ControlsHomeTab({ mouse, backgroundRef, power }) {
  const { camera } = useThree();

  // cam to background length ratio mandatory to match pattern of bg with fg in main scene
  let camToBackgroundLengthRatio = undefined;

  // at https://codesandbox.io/s/react-three-fiber-v5-1sccp?file=/src/App.js
  // they used useFrame to react on mouse move, but i think more performant is onmousemove
  useEffect(() => {
    // background ref at the beggining is undefined, so we've got to wait for it to initialize
    if (backgroundRef && !camToBackgroundLengthRatio) {
      // and then define ratio between background and cam positions
      camToBackgroundLengthRatio =
        Math.abs(backgroundRef.position.z) / camera.position.z;
    }
    // making controls stuff when ratio is defined
    if (camToBackgroundLengthRatio) {
      // setting camera position according to mouse
      camera.position.set(mouse.x * power, mouse.y * power, camera.position.z);
      // and making camera face (0,0,0) point
      camera.lookAt(0, 0, 0);
      // then setting background mesh position, so it is alligned with foreground
      backgroundRef.position.x = -mouse.x * power * camToBackgroundLengthRatio;
      backgroundRef.position.y = -mouse.y * power * camToBackgroundLengthRatio;
    }
  }, [mouse]);

  return null;
}

export default ControlsHomeTab;
