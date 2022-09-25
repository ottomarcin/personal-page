// import { OrbitControls, useAspect } from '@react-three/drei';
// import { Canvas, useThree } from '@react-three/fiber';
// import React from 'react';
// import TextMainScene from '../../Experience/MainScene/TextMainScene';
// import * as THREE from 'three';
// import fontSizeAdjustedToSizes from '../../Experience/utils/fontSizeAdjustedToSizes';

// function SceneIntinstics(props) {
//   const { size } = useThree();
//   //calculating sizes of screen in scene coodinates
//   const [vpWidth, vpHeight] = useAspect(size.width, size.height);

//   // 17.79968154416931, height: 11.800794907049873
//   const planeSize = { width: 8.680459325315859, height: 5.754952409842203 };
//   const multiplier = 1.43; // to akurat pasuje - zastanowic sie dlaczego, albo nie i dzialac w ten sposob yolo
//   const text = 'redredred';
//   const fontSize = fontSizeAdjustedToSizes(text, planeSize, multiplier, 1.5);

//   return (
//     <>
//       <OrbitControls />
//       <mesh>
//         <planeGeometry args={[planeSize.width, planeSize.height]} />
//         <meshBasicMaterial color={0xff00ff} side={THREE.DoubleSide} />
//       </mesh>
//       <TextMainScene size={fontSize} text={text} />
//     </>
//   );
// }

// function AboutMe(props) {
//   return (
//     <Canvas position={[0, 0, 5]}>
//       <SceneIntinstics />
//     </Canvas>
//   );
// }

// // const getFontSizeAdjustedToSizes = (
// //   text,
// //   planeSize = { width: 1, height: 1 },
// //   textShapeMultiplier = 1.43,
// //   textScaleMultiplier = 1.5
// // ) => {
// //   // text - text to pass, planeSize - size of plane which should contain text
// //   // textShapeMultiplier - multiplier, which contains differences between plain text and text 3D decorated with bevels etc.
// //   // textScaleMultiplier - text 3D after mouse hover is scaled up, plane must contain text even after scaling up
// //   const fontSizeStep = 0.1;
// //   let fontSize = 0.1;
// //   do {
// //     const sizes = calcTextSize(
// //       text,
// //       fontSize,
// //       textShapeMultiplier * textScaleMultiplier
// //     );

// //     console.log(sizes);
// //     console.log(`@ ${fontSize}`);
// //     if (sizes.width > planeSize.width || sizes.height > planeSize.height) {
// //       fontSize -= fontSizeStep;
// //       console.log('done ', fontSize);
// //       break;
// //     }
// //     fontSize += fontSizeStep;
// //   } while (fontSize < 5);
// //   return fontSize;
// // };

// // function calcTextSize(text, fontSize = 1, fontSizeMultiplier = 1) {
// //   //https://stackoverflow.com/questions/20551534/size-to-fit-font-on-a-canvas
// //   const canvas = document.createElement('canvas');
// //   const ctx = canvas.getContext('2d');
// //   ctx.font = `${fontSize}px Helvetica Neue,Helvetica,Arial,sans-serif`;
// //   const measure = ctx.measureText(text);
// //   const sizes = {
// //     width: measure.width * fontSizeMultiplier,
// //     height:
// //       (measure.fontBoundingBoxAscent + measure.fontBoundingBoxDescent) *
// //       fontSizeMultiplier,
// //   };
// //   return sizes;
// // }

// export default AboutMe;
