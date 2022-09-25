export default function calcPlaneSizesAtZOffset(
  zOffset,
  camera,
  multiplyer = 1
) {
  //calculating sizes of plane at given z axis offset using camera fov and camera aspect ratio
  //multiplyer - optional parameter, in order to shrink plane dimentions
  const fovTangent = Math.tan(((camera.fov * Math.PI) / 180) * 0.5);
  const height = zOffset * fovTangent * 2 * multiplyer;
  const width = height * camera.aspect * multiplyer;
  return { height, width };
}
