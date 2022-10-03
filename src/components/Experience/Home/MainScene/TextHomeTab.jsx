import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
} from 'react';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';
import GlassText from '../../Common/GlassText';
import calcBBoxOfGeometry from '../../utils/calcBBoxOfGeometry';
import { useFlexSize } from '@react-three/flex';
import fontSizeAdjustedToSizes from '../../utils/fontSizeAdjustedToSizes';
import { useCursor } from '@react-three/drei';
import { useLocation } from 'wouter';
// import { Link, useNavigate } from 'react-router-dom';

function TextHomeTab(props) {
  const [location, setLocation] = useLocation();
  // useEffect(() => console.log(location), [location]);
  const handleNavigateClick = () => setLocation(props.data.link);
  //react-router-dom - depreciated because of switch to wouter
  // const navigate = useNavigate();
  // const handleNavigateClick = () =>
  //   navigate(props.data.link, { replace: true });
  // const handleNavigateClick = () =>
  //   useCallback(navigate(props.data.link, { replace: true }), [navigate]);
  // get constant random set of numbers for position and size of text
  // this random numbers have been drawn once, so they can be used for positioning
  const randomConstant = props.data.randomNumbers;

  // if user hovers mouse over text, state hover is true, otherwise false
  const [hovered, setHovered] = useState(false);

  // changes cursor appearance after hover
  useCursor(hovered);

  // sizes of plane defined by flexbox container in MainScene component
  const [spaceWidth, spaceHeight] = useFlexSize();

  //creating refs to objects, so later it could be manipulated in 'traditional' 3js way
  const textRef = useRef();
  const planeRef = useRef();
  const groupRef = useRef();

  //animating scaling up/down

  //after hover, text's scale is 1.3 bigger than before
  const hoverScale = 1.3;
  const { scale } = useSpring({
    scale: hovered ? hoverScale : 1,
    config: { mass: 7, tension: 400, friction: 40, precision: 0.0001 },
  });

  const multiplier = 1.43; // this determines difference in sizes between 'raw' text and text 3D decorated with bevels etc.
  //calculating size of font in space of flex container
  let fontSize = fontSizeAdjustedToSizes(
    props.data.text,
    { width: spaceWidth, height: spaceHeight },
    1.43,
    hoverScale
  );
  fontSize *= randomConstant.fontSize * 0.3 + 0.7;
  //behaviour of Flex caused initial fontSize to be 0, which have been bringing errors
  // so replacing it with 0.1, later when flex behaves normally, font size will get normal
  fontSize = Math.max(0.1, fontSize);

  useEffect(() => {
    // textRef.current.geometry.center();
    // calculating total size of text to position it in its space
    const textBBoxSize = calcBBoxOfGeometry(textRef.current.geometry);
    //setting random position in their own area
    groupRef.current.position.x =
      randomConstant.x * (spaceWidth - textBBoxSize[0] * hoverScale);
    groupRef.current.position.y =
      randomConstant.y * (spaceHeight - textBBoxSize[1] * hoverScale);
    //setting width and height of plane same as text's
    planeRef.current.scale.x = textBBoxSize[0];
    planeRef.current.scale.y = textBBoxSize[1];
  }, [spaceWidth, spaceHeight]);

  // const redirectToPage = () => window.location.replace(props.data.link);
  return (
    <animated.group
      // <group
      ref={groupRef}
      scale={scale}
      // position={props.position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      // onClick={() => redirectToPage()}
      onClick={handleNavigateClick}
      // onClick={() => setLocation(props.data.link)}
      position={[0, 0, -1 + -5 * randomConstant.z]}
    >
      {/* 3D text */}
      <GlassText size={fontSize} textRef={textRef}>
        {props.data.text}
      </GlassText>
      {/* intersection plane */}
      <mesh ref={planeRef}>
        <planeGeometry />
        {/* <meshBasicMaterial transparent opacity={0} /> */}
        <meshBasicMaterial visible={false} />
      </mesh>
      {/* </group> */}
      {/* <Router.Link to={'/'} /> */}
    </animated.group>
  );
}

export default TextHomeTab;
