import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';
import { useCursor } from '@react-three/drei';
import { useLocation } from 'wouter';
import { isSafari } from 'react-device-detect';
import { useThree } from '@react-three/fiber';
import GlassText from '../../Common/GlassText';
import calcBBoxOfGeometry from '../../utils/calcBBoxOfGeometry';
import fontSizeAdjustedToSizes from '../../utils/fontSizeAdjustedToSizes';

function TextHomeTab({ data, boxSizes, position }) {
  const [location, setLocation] = useLocation();
  // redirecting to page after click on every text
  const handleNavigateClick = () => setLocation(data.link);
  // if user hovers mouse over text, state hover is true, otherwise false
  const [hovered, setHovered] = useState(false);

  // get constant random set of numbers for position and size of text
  // this random numbers have been drawn once, so they can be used for positioning
  const randomConstant = useMemo(() => data.randomNumbers);
  // changes cursor appearance after hover
  useCursor(hovered);

  //creating refs to objects, so later it could be manipulated in 'traditional' 3js way
  const textRef = useRef();
  const planeRef = useRef();
  const groupRef = useRef();

  //animating scaling up/down on hover
  const hoverScale = 1.3;
  const { scale } = useSpring({
    scale: hovered ? hoverScale : 1,
    config: { mass: 7, tension: 400, friction: 40, precision: 0.0001 },
  });

  const multiplier = 1.43; // this determines difference in sizes between 'raw' text and text 3D decorated with bevels etc.
  //calculating maximal font size to fit given space
  let fontSize = fontSizeAdjustedToSizes(
    data.text,
    { width: boxSizes.width, height: boxSizes.height },
    multiplier,
    hoverScale
  );
  //safari on mac for some reason renders bigger fontsize
  // TODO: check it on iphone
  isSafari && (fontSize *= 0.7);

  // randomising font size
  fontSize *= data.randomNumbers.fontSize * 0.5 + 0.5;
  //behaviour of Flex caused initial fontSize to be 0, which have been bringing errors
  // so replacing it with 0.1, later when flex behaves normally, font size will get normal
  // fontSize = Math.max(0.1, fontSize);

  useEffect(() => {
    // calculating size of text bounding box
    const bBox = calcBBoxOfGeometry(textRef.current.geometry);
    //randomise position inside given space
    groupRef.current.position.x =
      randomConstant.x * (boxSizes.width - bBox[0] * hoverScale);
    groupRef.current.position.y =
      randomConstant.y * (boxSizes.height - bBox[1] * hoverScale);
    //scaling plane to same dimensions as text
    planeRef.current.scale.x = bBox[0];
    planeRef.current.scale.y = bBox[1];
    groupRef.current.visible = true;
  }, [boxSizes.width, boxSizes.height]);

  return (
    <>
      <animated.group
        ref={groupRef}
        scale={scale}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        visible={false}
        onClick={handleNavigateClick}
      >
        {/* 3D text */}
        <GlassText size={fontSize} textRef={textRef}>
          {data.text}
        </GlassText>
        {/* intersection plane */}
        <mesh ref={planeRef}>
          <planeGeometry />
          <meshBasicMaterial visible={false} />
        </mesh>
      </animated.group>
    </>
  );
}

export default TextHomeTab;
