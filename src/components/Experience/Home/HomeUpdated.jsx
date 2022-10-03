import React from 'react';
import HomeTextsLayout from './MainScene/HomeTextsLayout';
import Foreground from './Foreground/Foreground';
import ControlsHomeTab from './MainScene/ControlsHomeTab';

function Home({ backgroundRef, time, controlsPower, mouse }) {
  return (
    <>
      <HomeTextsLayout backgroundRef={backgroundRef} />
      <Foreground time={time} zPosition={0} mouse={mouse} />
      {/* <ControlsHomeTab
        mouse={mouse}
        backgroundRef={backgroundRef.current}
        power={controlsPower}
      /> */}
    </>
  );
}

export default Home;
