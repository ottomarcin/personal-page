import React, { useState } from 'react';
import { BrowserView } from 'react-device-detect';
import styled from 'styled-components';
import Delayed from './Delayed';

const blue = '#4f707d';
const brown = '#402b17';

const color = brown;

const hoverAnimationTime = 0.2;

const HelperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  max-width: 85%;
  cursor: default;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1.5em;
`;
const HelperButton = styled.div`
  // background-color: ${(props) => (props.hovered ? color : 'white')};
  background-color: white;
  flex-shrink: 0;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  // color: ${(props) => (props.hovered ? 'white' : color)};
  color: ${color};
  // text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.hovered ? '1.8em' : '1.5em')};
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: ${hoverAnimationTime}s ease-in;
  // box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Message = styled.div`
  delay: 0.1s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: ${color};
  border-radius: 999px;
  font-size: 1em;
  height: 2em;
  padding: 1.5em;
  // width: 300px;
  margin-right: 1.5em;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  // box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

function Helper(props) {
  const [hovered, setHovered] = useState(false);
  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);
  return (
    <HelperWrapper>
      {hovered && (
        <Delayed time={hoverAnimationTime}>
          <Message>
            Explore the scene with mouse. Use mouse wheel to change window size.
          </Message>
        </Delayed>
      )}
      <HelperButton
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        hovered={hovered}
      >
        ?
      </HelperButton>
    </HelperWrapper>
  );
}

export default Helper;
