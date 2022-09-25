import { ContactShadows, useAspect } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import calcPlaneSizesAtZOffset from '../../utils/calcPlaneSizesAtZOffset';
import calcPlaneSizesForParallaxControls from '../ParallaxControls/calcPlaneSizesForParallaxControls';

// had to separate it, because of first section of https://docs.pmnd.rs/react-three-fiber/api/hooks
export default function BackgroundPlaneGeometry(props) {
  const { camera } = useThree();
  // calculating sizes of plane tilored to parallax controls
  const planeSizes = calcPlaneSizesForParallaxControls(
    camera,
    props.zPosition,
    props.parallaxControlsPower
  );
  return <planeGeometry args={planeSizes} />;
}

const calculateSizes = (camera, bgZPosition) => {
  //calculating size of plane based on tangent of cam's fov and
  //distance from optical center of cam to background plane
  const { width, height } = calcPlaneSizesAtZOffset(
    camera.position.z + Math.abs(bgZPosition),
    camera
  );
  return [width, height];
};
