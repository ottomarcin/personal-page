import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 3;
  color: white;
  text-align: center;
  text-shadow: 0px 0px 7px #00000055;
`;

function WholePageWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default WholePageWrapper;
