import TextHomeTab from './TextHomeTab';
import { Flex, Box } from '@react-three/flex';
import React, { useContext, useState, useEffect } from 'react';
import OptionsContext from '../../../../context/optionsContext';
import { useThree } from '@react-three/fiber';
import { useAspect } from '@react-three/drei';

function HomeTextsLayout(props) {
  // const { size } = useThree();
  const get = useThree((state) => state.get);
  //calculating sizes of screen in scene coodinates
  const [vpWidth, vpHeight] = useAspect(get().size.width, get().size.height);

  // variable set to control vertical/horizontal alignment od text in the scene
  const [narrowScreen, setNarrowScreen] = useState(false);

  // when screen width is greater than height, were setting var narrowScreen as false, othrewise true
  // setting it only on sizes change
  useEffect(() => {
    const state = get().size.height > get().size.width ? true : false;
    setNarrowScreen(state);
  }, [get().size]);
  const { pages } = useContext(OptionsContext);

  return (
    <>
      {/* <Flex
        size={[vpWidth, vpHeight, 100]}
        position={[-vpWidth / 2, vpHeight / 2, 0]}
        // flexDirection={narrow ? 'column' : 'row'}
        flexDirection={'column'}
        flexWrap='wrap'
        justify='center'
      >
        {pages.map((page) => {
          return (
            // 'home' has to be in navbar, not in scene and it doesnt have randomNumbers property, so chcecking if it exists
            page.randomNumbers && (
              <Box
                key={page.text}
                //this controls if elements are alligned vertically or horizontally (max 2 in row)
                width={narrowScreen ? 'auto' : vpWidth / 2}
                height={narrowScreen ? 'auto' : vpHeight / 2}
                flexShrink={1}
                flexGrow={1}
                centerAnchor
              >
                <TextHomeTab data={page} />
              </Box>
            )
          );
        })}
      </Flex> */}
      {pages.map((page) => {
        return (
          // 'home' has to be in navbar, not in scene and it doesnt have randomNumbers property, so chcecking if it exists
          page.randomNumbers && (
            // <Box
            //   key={page.text}
            //   //this controls if elements are alligned vertically or horizontally (max 2 in row)
            //   width={narrowScreen ? 'auto' : vpWidth / 2}
            //   height={narrowScreen ? 'auto' : vpHeight / 2}
            //   flexShrink={1}
            //   flexGrow={1}
            //   centerAnchor
            // >
            // <group position={(-0.5 * page.index, 0, -0.5 * page.index)}>
            <group position={(0, 0, -0.5 * page.index)}>
              <TextHomeTab data={page} />
            </group>
            // </Box>
          )
        );
      })}
    </>
  );
}

export default HomeTextsLayout;
