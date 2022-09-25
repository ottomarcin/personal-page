import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import Menu from './Menu';

const NavbarWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  z-index: 999;
  height: 7em;
  width: 100vw;
`;

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  top: 0;
  color: white;
  z-index: 2;
`;

// header - text showing in top left corner of app
const Header = styled(Link)`
  display: inline-block;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 999;
  text-decoration: none;
  margin-left: 40px;
  color: white;
  font-size: 2em;
  font-weight: 400;
`;

function Navbar({ header, data }) {
  // header - text to show in upper-left corner of app
  // data - data including options in navbar in form of array of objects of pattern: { text: String, link: String, {...}}

  // state to control opening of hamburger menu on narrow devices
  const [menuOpen, setMenuOpen] = useState(false);

  // function to toggle visibility of hamburger menu
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // close hamburger menu
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* // i dont want navbar to overlap threejs canvas */}
      {/* <NavbarWrapper>
        <NavigationBar> */}
      <Header href={'/'} onClick={closeMobileMenu}>
        {header}
      </Header>
      <Menu
        menuOpen={menuOpen}
        data={data}
        closeMobileMenu={closeMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />
      {/* </NavigationBar>
      </NavbarWrapper> */}
    </>
  );
}

export default Navbar;
