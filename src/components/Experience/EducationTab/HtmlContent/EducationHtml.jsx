import React, { useState } from 'react';
import styled from 'styled-components';
import educationCopies from '../educationCopies';
import DegreeInfo from './DegreeInfo';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 3;
  text-align: center;
`;

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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
  overflow-y: auto;
`;
const SideFiller = styled.div`
  min-width: 0px;
  flex-grow: 1;
`;
const EducationEntriesWrapper = styled.div`
  width: 300px;
  max-width: 600px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-wrap: no-wrap;
`;

function EducationHtml(props) {
  return (
    <Wrapper>
      <NavbarPhantom />
      <TitlePhantom />
      <ContentWrapper>
        <SideFiller />
        <EducationEntriesWrapper>
          {educationCopies.map((element) => {
            return <DegreeInfo data={element} key={element.title} />;
          })}
        </EducationEntriesWrapper>
        <SideFiller />
      </ContentWrapper>
    </Wrapper>
  );
}

export default EducationHtml;
