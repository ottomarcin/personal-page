import React from 'react';
import { Link, useLocation } from 'wouter';
import styled from 'styled-components';

const Button = styled(Link)`
  margin-left: 1em;
  font-size: 1.5em;
  color: #ffffff;
  opacity: 0.8;
  font-weight: ${(props) => (props.$active ? '400' : '100')};
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: #ffffff;
  }
  @media (max-width: 55em) {
    margin-left: 0;
  }
`;

function MenuButton(props) {
  // useLocation hook from wouter gives access to current location in the app, later to set active prop
  const [location] = useLocation();
  return (
    <Button
      // https://styled-components.com/docs/api#transient-props
      // setting active prop when link providing to page matches current link
      $active={location === props.link}
      href={props.link}
      onClick={props.closeMobileMenu}
    >
      {props.title}
    </Button>
  );
}

export default MenuButton;
