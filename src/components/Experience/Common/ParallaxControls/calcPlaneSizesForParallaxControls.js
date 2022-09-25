export default function calcPlaneSizesForParallaxControls(
  camera,
  zPosition,
  parallaxControlsPower
) {
  // calculates sizes of plane precisely filling screen
  // camera - camera used in scene
  // zPosition - z position of plane
  // const controlsPower = 0.5; //now constant, but docelowo (xd) prop

  // field of view in both axes in radians dividied by 2 for further calculations
  const FOV = {
    x: 0.5 * ((camera.fov * Math.PI) / 180),
    y: Math.atan(
      Math.tan(((camera.fov * Math.PI) / 180) * 0.5) * camera.aspect
    ),
  };

  // difference between initial cam and translated cam position
  //in both axes maximum distance camera can reach using MouseParallaxControls is 1*controlsPower
  const positionMaxDifference = parallaxControlsPower;

  // angular difference between initial cam and translated cam position
  // since positionMaxDifference is equal independently from axis,
  // the angular difference is also the same for both axes
  const angularDifference = Math.atan(
    positionMaxDifference / camera.position.z
  );

  //distance between camera and plane on Z axis
  const distanceBetweenCamAndPlane = camera.position.z + Math.abs(zPosition);

  // sizes of plane seen by cam translated on max position projected on z=zPosition
  const projectedSizes = [
    distanceBetweenCamAndPlane *
      (Math.tan(FOV.y + angularDifference) +
        Math.tan(FOV.y - angularDifference)),
    distanceBetweenCamAndPlane *
      (Math.tan(FOV.x + angularDifference) +
        Math.tan(FOV.x - angularDifference)),
  ];

  // final plane sizes, containing difference between projected and initial plane
  // formula simplified in order to improve performance
  const outputSizes = [
    2 * projectedSizes[0] -
      2 * distanceBetweenCamAndPlane * Math.tan(FOV.y - angularDifference),
    2 * projectedSizes[1] -
      2 * distanceBetweenCamAndPlane * Math.tan(FOV.x - angularDifference),
  ];
  return outputSizes;
}
