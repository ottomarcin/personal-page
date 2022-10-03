import { useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';
import { useRef, useEffect, useMemo } from 'react';
import GlassMaterial from '../Common/GlassMaterial';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useMouseWheel from '../Common/customHooks/useMouseWheel';
import GlassMaterialStandard from '../Common/GlassMaterialStandard';

function ComputerModel(props) {
  const ref = useRef();
  // const model = useGLTF(
  const { nodes } = useGLTF(
    '/models/computer-merged.glb'
    // 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Suzanne/glTF/Suzanne.gltf'
  );
  console.log(nodes);
  // let geometries = [];
  // for (const node in nodes) {
  //   // if (nodes[node].type === 'Mesh') geometries.push(nodes[node].geometry);
  //   if (nodes[node].type === 'Mesh') {
  //     const geometry = nodes[node].geometry;
  //     // geometry.scale(0.15, 0.15, 0.15);
  //     // geometry.rotateX(Math.PI / 2);
  //     geometries.push(geometry);
  //   }
  // }
  // console.log(geometries);
  // spinning the model when user uses mouse wheel
  const handleWheel = (e) => {
    ref.current.rotation.z -= e.deltaY / 100;
  };
  useMouseWheel(handleWheel);
  // automatically spinning the model when nothing happen
  useFrame((state, delta) => {
    ref.current.rotation.z -= delta / 5;
  });

  return (
    // <></>
    <mesh
      rotation={[Math.PI / 2, 0, -Math.PI / 3]}
      position={[1, -1, -5]}
      ref={ref}
      scale={[0.005, 0.005, 0.005]}
    >
      <GlassMaterial />
      <primitive attach={'geometry'} object={nodes.Boole_1.geometry} />
    </mesh>

    // <Suspense fallback={false}>
    // <group>
    //   {geometries.map((geometry) => {
    //     console.log(geometry);
    //     return (
    //       <mesh>
    //         <meshBasicMaterial />
    //         <primitive attach={'geometry'} object={geometry} />
    //         {/* <GlassMaterial /> */}
    //       </mesh>
    //     );
    //   })}
    // </group>
    // <>
    //   {geometries.map((geometry, index) => {
    //     <mesh
    //       ref={ref}
    //       rotation={[Math.PI / 4 + Math.PI / 2, 0, 0]}
    //       scale={[0.01, 0.01, 0.01]}
    //     >
    //       <GlassMaterial />
    //       <primitive attach={'geometry'} object={geometries[index]} />
    //     </mesh>;
    //     // <mesh>
    //     //   <meshBasicMaterial />
    //     //   <primitive attach={'geometry'} object={geometry} />
    //     //   {/* <GlassMaterial /> */}
    //     // </mesh>;
    //   })}
    // </>
    // <mesh
    //   ref={ref}
    //   rotation={[Math.PI / 4 + Math.PI / 2, 0, 0]}
    //   scale={[0.01, 0.01, 0.01]}
    // >
    //   <GlassMaterial />
    //   <primitive attach={'geometry'} object={geometries[1]} />
    // </mesh>
    // </Suspense>
    // <></>
    // <mesh>
    //   <primitive object={geometries[1]} />
    //   <meshBasicMaterial color={'blue'} />
    // </mesh>
    // <mesh ref={ref} position={[1.5, -1, -5]} scale={[10, 10, 10]}>
    //   <GlassMaterial />
    //   <primitive
    //     attach={'geometry'}
    //     // object={model.nodes.mortarboard.geometry}
    //     object={model.scene}
    //   />
    // </mesh>
    // <mesh ref={ref} position={[1.5, -1, -5]} scale={[10, 10, 10]}>
    //   <GlassMaterial />
    // <>
    //   <Suspense fallback={<group />}>
    //     <primitive ref={ref} object={computer} />
    //   </Suspense>
    //   <directionalLight position={[10, 10, 10]} />
    // </>
    // <></>
    // </mesh>
  );
}

export default ComputerModel;
