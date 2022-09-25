import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';

function MouseParallaxControls(props) {
  const { camera } = useThree();

  // at https://codesandbox.io/s/react-three-fiber-v5-1sccp?file=/src/App.js
  // they used useFrame to react on mouse move, but i think more performant is onmousemove
  // event, because it doenst try to change positions of cam and background all over
  useEffect(() => {
    // every time mouse moves, we're setting camera position
    // according to mouse position and controls power
    camera.position.set(
      props.mouse.x * props.power,
      props.mouse.y * props.power,
      camera.position.z
      // 5
    );
    // and making camera face (0,0,0) point
    camera.lookAt(0, 0, 0);
  }, [props.mouse]);

  return null;
}

export default MouseParallaxControls;
