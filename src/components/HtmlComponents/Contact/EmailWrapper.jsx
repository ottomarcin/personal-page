import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`;
const Email = styled.span`
  cursor: pointer;
  font-size: 1.2em;
  text-decoration: underline;
`;
const SideFiller = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  flex-shrink: 1;
`;
const CopiedInformation = styled.div`
  transition: 0.5s ease-out;
  font-size: 0.8em;
  position: absolute;
  translate: 0 -100%;
  background-color: #62c655;
  border: 1px solid #ffffff;
  padding: 0.5em;
  border-radius: 10px;
  z-index: 30;
`;

function EmailWrapper({ emailadress }) {
  const [toolip, setTooltip] = useState(false);

  useEffect(() => {
    if (toolip === true) {
      setTimeout(() => {
        setTooltip(false);
      }, 3000);
    }
  }, [toolip]);

  const sendEmail = () => {
    window.open(`mailto:${emailadress}`);
  };
  const copyToClipboardAsync = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      setTooltip(true);
      return navigator.clipboard.writeText(str);
    }
    return Promise.reject('The Clipboard API is not available.');
  };
  return (
    <Wrapper>
      <SideFiller />
      <Email onClick={sendEmail}>{emailadress}</Email>
      <SideFiller>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {toolip && (
            <CopiedInformation>
              Email address copied to clipboard
            </CopiedInformation>
          )}
          <i
            onClick={() => copyToClipboardAsync(emailadress)}
            style={{
              marginRight: '0.5em',
              marginLeft: '0.5em',
              cursor: 'pointer',
            }}
            className='fa fa-solid fa-copy'
          ></i>
        </div>
      </SideFiller>
    </Wrapper>
  );
}

export default EmailWrapper;
