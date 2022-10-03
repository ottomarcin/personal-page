import React from 'react';
import HomeTextsLayout from './MainScene/HomeTextsLayout';
import Foreground from './Foreground/Foreground';
import { isDesktop } from 'react-device-detect';

function Home({ backgroundRef, time, controlsPower, mouse }) {
  return (
    <>
      <HomeTextsLayout backgroundRef={backgroundRef} />
      {isDesktop && <Foreground time={time} zPosition={0} mouse={mouse} />}
      {/* <ControlsHomeTab
        mouse={mouse}
        backgroundRef={backgroundRef.current}
        power={controlsPower}
      /> */}
    </>
  );
}

export default Home;
