import { useThree } from '@react-three/fiber';
import calcPlaneSizesAtZOffset from '../../utils/calcPlaneSizesAtZOffset';
import React from 'react';
import calcPlaneSizesForParallaxControls from '../../Common/ParallaxControls/calcPlaneSizesForParallaxControls';

// had to separate it, because of first section of https://docs.pmnd.rs/react-three-fiber/api/hooks
export default function ForegroundPlaneGeometry(props) {
  // responsive Foreground plane, adjusts to screen size
  const { camera } = useThree();

  // const planeSizes = calculateSizes(camera, props.zPosition);
  // console.log(`planeSizes - ${planeSizes[0]}, ${planeSizes[1]}`);
  const planeSizes = calcPlaneSizesForParallaxControls(
    camera,
    props.zPosition,
    0.5
  );
  return (
    <planeGeometry
      ref={props.geometryRef}
      args={[
        ...planeSizes,
        props.screenSize.width / 2,
        props.screenSize.height / 2,
        // props.screenSize.width,
        // props.screenSize.height,
      ]}
    />
  );
}

const calculateSizes = (camera, bgZPosition) => {
  //calculating size of plane based on tangent of cam's fov and
  //distance from optical center of cam to Foreground plane
  const { width, height } = calcPlaneSizesAtZOffset(
    camera.position.z - bgZPosition,
    camera
  );
  console.log(`width: ${width} height: ${height}`);
  return [width, height];
};
