import React, { useEffect } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import { pages } from '../pages/pages';

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
        // background-color: #4f707d;
        // background: radial-gradient(circle at top right, #4f707d, #4f707d 50px, #eee 100%, #4f707d 100%);
        // background: radial-gradient(circle at top right, #4f707d 150px, #ffffff 150px, #ffffff 100%);//, #eee 100%, #4f707d 10%);
        // background: radial-gradient(circle at top right, #b59e82 150px, #4f707d 150px, #8ec9da 100%);//, #eee 100%, #4f707d 10%);
        // background: radial-gradient(circle at top right, #4f707d 150px, #8ec9da 150px, #b59e82 100%);//, #eee 100%, #4f707d 10%);
        // background: radial-gradient(circle at top right, #b59e82, #4f707d 100%);//, #eee 100%, #4f707d 10%);
        // background: radial-gradient(circle at top right, #8ec9da, #402B17 100%);//, #eee 100%, #4f707d 10%);
        background: radial-gradient(circle at top right, #402B17, #ffffff 100%);//, #eee 100%, #4f707d 10%);
        justify-content: center;
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
        </MenuOptionsWrapper>
      </MenuWrapper>
    </MenuWrapperMother>
  );
}

export default Menu;
