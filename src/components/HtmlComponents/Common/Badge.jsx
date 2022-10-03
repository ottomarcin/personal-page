import React from 'react';
import styled from 'styled-components';

const BadgeDiv = styled.div`
  background-color: ${(props) => props.color};
  font-size: 1em;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em 0.5em 0.2em 0.5em;
  border-radius: 10000px;
  // box-shadow: 0 0 5px #00000055;
  margin-right: 0.5em;
  margin-top: 0.5em;
  color: white;
  text-shadow: none;
`;

function Badge({ children, color }) {
  return <BadgeDiv color={color}>{children}</BadgeDiv>;
}

export default Badge;
