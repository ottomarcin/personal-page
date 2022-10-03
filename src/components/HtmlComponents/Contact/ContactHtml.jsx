import React from 'react';
import styled from 'styled-components';
import NavbarTitleOffset from '../Common/NavbarTitleOffset';
import WholePageWrapper from '../Common/WholePageWrapper';
import EmailWrapper from './EmailWrapper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
  overflow-y: auto;
`;
const SideFiller = styled.div`
  min-width: 0px;
  flex-grow: 1;
`;
const CopyWrapper = styled.div`
  width: 300px;
  max-width: 600px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-wrap: no-wrap;
`;
const Paragraph = styled.div`
  margin-top: 0.5em;
`;
const Socials = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5em;
  justify-content: center;
  font-size: 1.5em;
`;
const SocialButton = styled.button`
marginRight: '0.5em',
marginLeft: '0.5em',
cursor: 'pointer',
`;

function ContactHtml(props) {
  const openLink = (url) => {
    window.open(url, '_blank').focus();
  };
  return (
    <WholePageWrapper>
      <NavbarTitleOffset />
      <Wrapper>
        <SideFiller />
        <CopyWrapper>
          <h1> Get in touch with me:</h1>
          <EmailWrapper emailadress={'ottomarcin96@gmail.com'} />
          <h2 style={{ marginTop: '1em' }}>You can also find me at:</h2>
          <Socials>
            {/* <SocialButton> */}
            <i
              onClick={() => openLink(`https://www.instagram.com/otto.marcin/`)}
              style={{
                marginRight: '0.5em',
                marginLeft: '0.5em',
                cursor: 'pointer',
              }}
              className='fa fa-brands fa-instagram'
            ></i>
            {/* </SocialButton> */}
            <i
              onClick={() =>
                openLink(`https://www.linkedin.com/in/marcin-otto-ab4369252/`)
              }
              style={{
                marginRight: '0.5em',
                marginLeft: '0.5em',
                cursor: 'pointer',
              }}
              className='fa fa-brands fa-linkedin'
            ></i>
            <i
              onClick={() => openLink(`https://github.com/ottomarcin`)}
              style={{
                marginRight: '0.5em',
                marginLeft: '0.5em',
                cursor: 'pointer',
              }}
              className='fa fa-brands fa-github'
            ></i>
          </Socials>

          {/* <Paragraph style={{ fontSize: '1.2em', textAlign: 'center' }}>
            Feel free to contact me:
          </Paragraph> */}
        </CopyWrapper>
        <SideFiller />
      </Wrapper>
    </WholePageWrapper>
  );
}

export default ContactHtml;
