import React, { useEffect } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import { pages } from '../pages/pages';
import { MobileView } from 'react-device-detect';

// hamburger menu icon
const Icon = styled.i`
  cursor: pointer;
  color: white;
  font-size: 2em;
  font-weigth: 600;
  margin-right: 1em;
  transition: 0.2s ease-out;
  z-index: 999;

  @media (min-width: 55em) {
    display: none;
  }
`;
const MenuWrapperMother = styled.div`
  display: inline-block;
  position: fixed;
  top: 45px;
  right: 0;
  z-index: 999;
  margin-right: 1em;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
const MenuOptionsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
  list-style-type: none; 
  @media (max-width: 55em) {
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle at top right,  #8ec9da 150px, #b59e82 100%);
        position: fixed;
        left: 0;
        width: 100%;
        height: 100vh;
        transition: 0.2s ease-out;
        z-index: 99;
        border-radius :0 0 0 100%;
        top: -100%; left: 100%;
        ${(props) => props.active && `top: 0; left: 0;  border-radius :0 ; `}

        *{
            padding: 0.5em;
            font-size: 2.5em;
        }
    }
  }
`;

const MobileCommunicate = styled.div`
  // background-color: #ffffff;
  text-align: center;
  // max-width: 90%;
  width: 80%;
  max-width: 80%;
  position: absolute;
  bottom: 1em;
  color: #ffffffaa;
  left: 50%;
  transform: translateX(-50%);
  // border: 2px solid white;
  align-self: flex-end;
  font-size: 0.4em;
  padding: 0.5em;
  border-radius: 1000px;
`;

function Menu({ data, toggleMobileMenu, closeMobileMenu, menuOpen }) {
  return (
    <MenuWrapperMother>
      <MenuWrapper>
        <Icon
          onClick={toggleMobileMenu}
          className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}
        />
        <MenuOptionsWrapper active={menuOpen}>
          {data.map((page) => {
            return (
              <MenuButton
                key={page.text}
                closeMobileMenu={closeMobileMenu}
                link={page.link}
                title={page.text}
              />
            );
          })}
          <MobileView>
            {menuOpen && (
              <MobileCommunicate>
                For best possible experience visit this site on desktop
              </MobileCommunicate>
            )}
          </MobileView>
        </MenuOptionsWrapper>
      </MenuWrapper>
    </MenuWrapperMother>
  );
}

export default Menu;
