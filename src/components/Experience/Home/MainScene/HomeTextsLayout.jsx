import { useThree } from '@react-three/fiber';
import React from 'react';
import { useState, useContext } from 'react';
import OptionsContext from '../../../../context/optionsContext';
import calcPlaneSizesAtZOffset from '../../utils/calcPlaneSizesAtZOffset';
import TextHomeTab from './TextHomeTab';

function ExpMain(props) {
  const { size, camera } = useThree();
  const { pages } = useContext(OptionsContext);

  return (
    <>
      {pages.map((page) => {
        // total number of boxes
        const quantityOfBoxes = 4;

        // number of columns, if screen is wide there are 2 cols, if not then 1
        const cols = size.width < size.height ? 1 : 2;
        // calculating number of rows
        const rows = Math.ceil(quantityOfBoxes / cols);
        // setting z position of texts based on random number
        // among pages there's one without random numbers (home), which is not rendered later
        // but program is throwing errors here without setting a value here
        const zPosition = page.randomNumbers
          ? -1 + -4 * page.randomNumbers.z
          : -5;
        // calculating plane size and offset for navbar at zPosition
        const textSpaceSize = calulateSpaceForText(
          camera.position.z + Math.abs(zPosition),
          camera,
          size
        );

        // offset to start placing objects below navaigation bar
        const yAxisOffset =
          textSpaceSize.height * 0.5 - textSpaceSize.navbarOffset;

        //calculating position in grid of texts (cols, rows)
        const gridPosition = {
          x: (page.index - 1) % cols,
          y: Math.floor((page.index - 1) / cols),
        };

        // resulting sizes of containers for texts
        const boxSizes = {
          width: textSpaceSize.width / cols,
          height: (textSpaceSize.height - textSpaceSize.navbarOffset) / rows,
        };
        return (
          // 'home' has to be in navbar, not in scene and it doesnt have randomNumbers property, so chcecking if it exists
          page.randomNumbers && (
            <group
              key={page.index}
              // (boxSizes.width * 0.5) has to be subtracted on layout with 2 columns, but when there's just one column
              // it can not be subtracted, so multiplying it with (cols - 1) resolves the problem
              position-x={
                gridPosition.x * boxSizes.width -
                (cols - 1) * boxSizes.width * 0.5
              }
              position-y={
                yAxisOffset -
                (boxSizes.height * 0.5 + gridPosition.y * boxSizes.height)
              }
              position-z={zPosition}
            >
              <TextHomeTab data={page} boxSizes={{ ...boxSizes }} />
            </group>
          )
        );
      })}
    </>
  );
}

const calulateSpaceForText = (zPosition, camera, screenSize) => {
  // i dont want texts to overlay with navbar, so i have to offset them with height of navbar
  // navbar height in px from top
  const navbarSizeInPx = 90;
  //calculating percentage of navbar height to whole screen height
  // and multiplying it with screen height in 3js
  const viewport = calcPlaneSizesAtZOffset(zPosition, camera);
  console.log(navbarSizeInPx / screenSize.height);
  const navbarOffset = (navbarSizeInPx / screenSize.height) * viewport.height;
  // reducing width and height, because even caluclating texts position to stay inside boxes dont restricts
  // texts to being placed outside screen, because of behaviour of current controls
  return {
    width: viewport.width * 0.9,
    height: viewport.height * 0.9,
    navbarOffset,
  };
};

export default ExpMain;
