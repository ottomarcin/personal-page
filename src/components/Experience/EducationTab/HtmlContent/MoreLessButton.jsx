import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em 0.5em 0.2em 0.5em;
  border: none;
  border-radius: 10000px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 1);
  margin-top: 1em;
  color: white;
`;

function MoreLessButton({ clicked, onClick }) {
  // clicked - if true toggle to 'Less' and redirecitng arrow icon
  return (
    <Button onClick={onClick}>
      {clicked ? (
        <>
          Less
          <i
            style={{ marginLeft: '0.3em' }}
            className='fa fa-light fa-caret-up'
          ></i>
        </>
      ) : (
        <>
          More
          <i
            style={{ marginLeft: '0.3em' }}
            className='fa fa-light fa-caret-down'
          ></i>
        </>
      )}
    </Button>
  );
}

export default MoreLessButton;
