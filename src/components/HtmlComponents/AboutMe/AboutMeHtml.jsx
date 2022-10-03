import React from 'react';
import styled from 'styled-components';
import NavbarTitleOffset from '../Common/NavbarTitleOffset';
import WholePageWrapper from '../Common/WholePageWrapper';

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

function AboutMeHtml(props) {
  return (
    <WholePageWrapper>
      <NavbarTitleOffset />
      <Wrapper>
        <SideFiller />
        <CopyWrapper>
          <h1>Hello 👋🏻</h1>
          <h2> I’m Marcin Otto and welcome to my portfolio!</h2>
          <Paragraph style={{ fontSize: '1.2em', textAlign: 'justify' }}>
            I’m a 25 y.o. software engineer living in Warsaw, Poland. In my free
            time I like taking photos, flying drones, riding a bike and making
            pizza - my friends says it’s the best home-made pizza and honestly I
            can’t disagree with them 🤌🏻. I’ve got ME degree in Mechatronics, you
            can learn more about it at my education page. My programming skills
            relies mainly on JS, but during my studies I’ve also used Python,
            Matlab, LabView, R, C#, C++, C and assembly.
          </Paragraph>
          <h2 style={{ marginTop: '0.5em' }}>
            I really hope you like this site and thank you for visiting{' '}
            <br></br>🤜🏻🤛🏻
          </h2>
        </CopyWrapper>
        <SideFiller />
      </Wrapper>
    </WholePageWrapper>
  );
}

export default AboutMeHtml;
