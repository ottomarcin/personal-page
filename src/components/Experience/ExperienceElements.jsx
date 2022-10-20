import React, { useState, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import Background from './Common/Background/Background';
import Home from './Home/HomeUpdated';
// using wouter instead of react-router-dom, because of context passing issues to r3f, more: https://spectrum.chat/react-three-fiber/general/clicking-meshes-to-load-other-pages-react-router~3d87ef88-b55f-4a95-b3ca-733480bac833
import { Switch, Route } from 'wouter';
import Education from './Education/Education';
import ControlsHomeTab from './Home/MainScene/ControlsHomeTab';
import WorkExperience from './WorkExperience/WorkExperience';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Error404 from './Error404/Error404';
import { Environment, OrbitControls } from '@react-three/drei';
import { isDesktop } from 'react-device-detect';
import warehouse_envmap from '../../assets/environmentMaps/warehouse/Warehouse-with-lights-brightened.hdr';

function ExperienceElements(props) {
  /**
   * Various stuff
   */
  // const { size } = useThree(); //this is created only once, after resize it'll return old value
  const get = useThree((state) => state.get); // get().size will deliver fresh, accurate size even after resize
  //creating reference to background
  const backgroundRef = useRef();
  //controls power - how much cam is being translated with mouse move
  const controlsPower = 0.5;

  /**
   * Time
   */
  //seting initial time for effects
  const initialTime = Math.random() * 1000000;
  //saving current time in state, will see if that's gonna work
  const [time, setTime] = useState(initialTime);

  //every frame the time is being updated
  useFrame((state, delta) => {
    setTime(time + delta * 1000);
  });

  /**
   * Mouse
   */
  // state for mouse position
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  // handling moving mouse in parent element and then sending its position to r3f component
  // this approach benefits are ability to put html on top of r3f components and still be able to make effects with mouse position
  const handleMouseMove = (e) => {
    const x = (2 * e.clientX) / get().size.width - 1;
    const y = 1 - (2 * e.clientY) / get().size.height;
    setMouse({ x, y });
  };
  useEffect(() => {
    // add listener on mount
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      // removing event on unmount
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Background
        time={time}
        backgroundRef={backgroundRef}
        canvasRef={props.canvas}
        zPosition={-20}
        parallaxControlsPower={controlsPower}
      />
      {/* turning controls on only on desktop since controls utilizes cursor position to work */}
      {isDesktop && (
        <ControlsHomeTab
          mouse={mouse}
          backgroundRef={backgroundRef.current}
          power={controlsPower}
        />
      )}
      {/* <Environment
        files={
          '/environmentMaps/warehouse/Warehouse-with-lights-brightened.hdr'
        }
      /> */}
      <Environment files={warehouse_envmap} />
      {/* <OrbitControls /> */}
      <Switch>
        <Route path='/'>
          <Home
            backgroundRef={backgroundRef}
            time={time}
            controlsPower={controlsPower}
            mouse={mouse}
          />
        </Route>
        <Route path='/experience'>
          <WorkExperience />
        </Route>
        <Route path='/about'>
          <AboutMe />
        </Route>
        <Route path='/education'>
          <Education mouse={mouse} />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
      {/* tutaj routing po tabach experience'a */}
    </>
  );
}

export default ExperienceElements;
