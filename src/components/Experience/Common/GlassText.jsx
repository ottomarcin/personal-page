import React, { useEffect } from 'react';
import GlassMaterial from './GlassMaterial';
import HelvetikerRegular from 'three/examples/fonts/helvetiker_regular.typeface.json';
import { Text3D, Center } from '@react-three/drei';

function GlassText({ size = 2, position, textRef, children }) {
  const geometryArgs = {
    font: HelvetikerRegular,
    size: size,
    height: size * 0.1,
    bevelEnabled: true,
    bevelThickness: size * 0.1,
    bevelSize: size * 0.1,
    bevelSegments: parseInt(size * 15), //important to pass integer here!!
    bevelOffset: size * -0.05,
  };

  return (
    <Text3D
      ref={textRef}
      {...geometryArgs}
      position={position}
      onUpdate={(text) => text.geometry.center()}
    >
      {children}
      <GlassMaterial />
    </Text3D>
  );
}

export default GlassText;
