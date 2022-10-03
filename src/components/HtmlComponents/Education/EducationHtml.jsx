import React from 'react';
import styled from 'styled-components';
import educationCopies from './educationCopies';
import DegreeInfo from './DegreeInfo';
import NavbarTitleOffset from '../Common/NavbarTitleOffset';
import WholePageWrapper from '../Common/WholePageWrapper';

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
    <WholePageWrapper>
      <NavbarTitleOffset />
      <ContentWrapper>
        <SideFiller />
        <EducationEntriesWrapper>
          {educationCopies.map((element) => {
            return <DegreeInfo data={element} key={element.title} />;
          })}
        </EducationEntriesWrapper>
        <SideFiller />
      </ContentWrapper>
    </WholePageWrapper>
  );
}

export default EducationHtml;
