// import React, { useState, useEffect, useContext } from 'react';
// import styled from 'styled-components';
// import { Canvas, useThree } from '@react-three/fiber';
// import { Flex, Box, useFlexSize } from '@react-three/flex';
// import { OrbitControls, useAspect, useContextBridge } from '@react-three/drei';
// import * as THREE from 'three';
// import TextMainScene from '../Experience/MainScene/TextMainScene';
// import fontSizeAdjustedToSizes from '../Experience/utils/fontSizeAdjustedToSizes';
// import { pages } from './pages';
// import { Link } from 'react-router-dom';
// import GlassText from '../Experience/MainScene/GlassText';

// const ThreejsWrapper = styled.div`
//   width: 100%;
//   flex-grow: 1;
//   background-color: cornsilk;
// `;

// function Inner(props) {
//   const [width, height] = useFlexSize();
//   // const text = `katrynia${props.color}`;
//   // console.log(`refresh ${text}`);
//   const planeSize = { width: width, height: height };
//   // const multiplier = 1.43; // to akurat pasuje - zastanowic sie dlaczego, albo nie i dzialac w ten sposob yolo
//   const fontSize = fontSizeAdjustedToSizes(
//     props.data.text,
//     planeSize,
//     1.43,
//     1.5
//   );

//   // console.log(
//   //   `wymiary plaszczyzny @${text}: szerokosc ${props.planeSize.width}, wysokosc ${props.planeSize.height}`
//   // );
//   return (
//     //passing sizes to child component
//     <>
//       <mesh position={[0, 0, -5]}>
//         <planeGeometry args={[width, height]} />
//         <meshBasicMaterial
//           color={props.color}
//           transparent
//           opacity={0.5}
//           side={THREE.DoubleSide}
//         />
//       </mesh>
//       <TextMainScene
//         data={props.data}
//         spaceSize={planeSize} //size of space in which text can be placed
//         size={(props.data.randomNumbers.z * 0.2 + 0.8) * fontSize}
//         text={props.data.text}
//       />
//     </>
//   );
// }

// function BoxInFlex(props) {
//   return (
//     <Box
//       key={props.data.text}
//       //this controls if elements are alligned vertically or horizontally (max 2 in row)
//       width={props.narrowScreen ? 'auto' : props.sizes.width / 2}
//       height={props.narrowScreen ? 'auto' : props.sizes.height / 2}
//       flexShrink={1}
//       flexGrow={1}
//       centerAnchor
//     >
//       {/* <GlassText text={props.data.text} size={2} /> */}
//       <Inner data={props.data} color={props.color} />
//     </Box>
//   );
// }

// function FlexStuff(props) {
//   const { size } = useThree();
//   //calculating sizes of screen in scene coodinates
//   const [vpWidth, vpHeight] = useAspect(size.width, size.height);

//   // variable set to control vertical/horizontal alignment od text in the scene
//   const [narrowScreen, setNarrowScreen] = useState(false);

//   // when screen width is greater than height, were setting var narrowScreen as false, othrewise true
//   // setting it only on sizes change
//   useEffect(() => {
//     const state = size.height > size.width ? true : false;
//     setNarrowScreen(state);
//   }, [size]);

//   const data = useContext(MyContext);

//   data.map((page) => console.log(page));

//   return (
//     <Flex
//       size={[vpWidth, vpHeight, 100]}
//       position={[-vpWidth / 2, vpHeight / 2, 0]}
//       // flexDirection={narrow ? 'column' : 'row'}
//       flexDirection={'column'}
//       flexWrap='wrap'
//       justify='center'
//     >
//       {/* creating text elements from shuffled array of elements */}
//       {data.map((page) => (
//         <BoxInFlex
//           data={page}
//           narrowScreen={narrowScreen}
//           sizes={{ width: vpWidth, height: vpHeight }}
//           color='blue'
//         />
//       ))}
//     </Flex>
//   );
// }

// // pseudo-random shuffling array of data and passing to context, so it's accessible from every component
// const MyContext = React.createContext(pages.sort(() => 0.5 - Math.random()));

// function Home(props) {
//   const ContextBridge = useContextBridge(MyContext);
//   return (
//     <ThreejsWrapper>
//       <Canvas position={[0, 0, 20]}>
//         <ContextBridge>
//           <OrbitControls />
//           <FlexStuff />
//         </ContextBridge>
//       </Canvas>
//     </ThreejsWrapper>
//   );
// }

// export default Home;
