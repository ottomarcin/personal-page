// import * as THREE from 'three';
// import { Canvas, useLoader, useThree } from '@react-three/fiber';
// import {
//   OrbitControls,
//   Plane,
//   RoundedBox,
//   useTexture,
//   useAspect,
// } from '@react-three/drei';
// import React, { useEffect } from 'react';
// import { Flex, Box } from '@react-three/flex';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
// import styled from 'styled-components';
// import { TextureLoader } from 'three';
// import imageUrl from './imageUrl';
// import GlassText from '../Experience/MainScene/GlassText';
// import { useRef } from 'react';

// const ContactWrapper = styled.div`
//   display: flex;
//   flex-grow: 1;
//   // background: linear-gradient(to left, hsl(197, 23%, 40%), #fff);
//   background-image: url(https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
// `;

// function IceCube(props) {
//   const envMap = useLoader(
//     RGBELoader,
//     'environmentMaps/warehouse/empty_warehouse_01_1k.hdr'
//   );
//   // const textureUrl = ;
//   const textureLoader = new THREE.TextureLoader();
//   const normalMapTexture = new THREE.TextureLoader().load(imageUrl);
//   console.log(normalMapTexture);
//   // const normalMap = useTexture({
//   //   url: 'https://docs.gimp.org/2.10/de/images/filters/examples/generic/normal_map-defaults.jpg',
//   // });

//   const materialArgs = {
//     roughness: 0.3,
//     metalness: 0,
//     transmission: 0.8,
//     thickness: 0.7,
//     envMap: envMap,
//     envMapIntensity: 3,
//     color: 0xdbf1fd,
//     normalMap: normalMapTexture,
//     normalScale: 1,
//   };
//   return (
//     <mesh>
//       <RoundedBox
//         position={[0, -0.5, 0]}
//         args={[props.width, 1, 1]}
//         radius={0.1}
//         smoothness={40}
//       >
//         <meshPhysicalMaterial {...materialArgs} />
//       </RoundedBox>
//     </mesh>
//   );
// }

// function SceneChildren() {
//   const textRef = useRef();
//   const { size } = useThree();
//   const [vpWidth, vpHeight] = useAspect(size.width, size.height);
//   // useEffect(() => textRef.current.scale.set(10, 10, 10), []);
//   return (
//     <>
//       <OrbitControls />
//       <axesHelper />
//       <directionalLight position={[1, 1, 5]} intensity={0.5} />
//       <directionalLight position={[-10, 0, 5]} intensity={0.5} />
//       <ambientLight intensity={0.3} />
//       <Flex
//         size={[vpWidth, vpHeight, 100]}
//         position={[-vpWidth / 2, vpHeight / 2, 0]}
//         flexDirection='row'
//         wrap='wrap'
//         alignItems='center'
//         // padding={0.5}
//       >
//         {[...Array(5).keys()].map((obj) => (
//           <Box centerAnchor margin={0.5} key={obj}>
//             <IceCube width={vpWidth} />
//           </Box>
//         ))}
//         <GlassText
//           textRef={textRef}
//           size={5}
//           text={'kupa2'}
//           position={[0, 0, 0]}
//         />
//       </Flex>
//     </>
//   );
// }

// function Contact(props) {
//   return (
//     <ContactWrapper>
//       <Canvas
//         gl={{ toneMapping: THREE.NoToneMapping }}
//         linear
//         // camera={{ position: [0, 0, 5] }}
//       >
//         <SceneChildren />
//       </Canvas>
//     </ContactWrapper>
//   );
// }

// export default Contact;
