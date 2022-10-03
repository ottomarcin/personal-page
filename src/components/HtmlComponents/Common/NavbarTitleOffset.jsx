import React from 'react';
import styled from 'styled-components';

// offseting further content about heights of navbar and page title

const NavbarPhantom = styled.div`
  top: 0;
  height: 100px;
  width: 100vw;
  flex-shrink: 0;
`;

const TitlePhantom = styled.div`
  // min-height: 0px;
  height: 15vh;
  // height: 100px;
  width: 100vw;
  flex-shrink: 0;
`;

function NavbarTitleOffset(props) {
  return (
    <>
      <NavbarPhantom />
      <TitlePhantom />
    </>
  );
}

export default NavbarTitleOffset;
