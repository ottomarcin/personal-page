import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100px;
  width: 100vw;
  background: linear-gradient(to left, #fff, hsl(197, 23%, 40%));
  padding-top: 200px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // flex-grow: 1;
  margin-left: 2em;
  color: white;
  margin-bottom: 2em;
`;

const FirstRow = styled.div`
  font-size: 2em;
`;

const UniversityName = styled.div`
  font-size: 1.2em;
`;

const ThesisTitle = styled.div`
  font-size: 1em;
  font-style: italic;
`;

const BadgeWrapper = styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: row;
`;

const Badge = styled.div`
  background-color: ${(props) => props.backgroundColor};
  padding: 0.2em 0.5em 0.2em 0.5em;
  border-radius: 10000px;
  box-shadow: 0 0 5px #444444;
  margin-right: 0.5em;
  color: white;
`;

function AboutMe(props) {
  return (
    // <Wrapper>
    <>
      <TextWrapper>
        <FirstRow>Mechatronics, M. Eng.</FirstRow>
        <UniversityName>Warsaw University of Technology </UniversityName>
        <ThesisTitle>
          “Face morphing research based on directional biometric images”
        </ThesisTitle>
        <BadgeWrapper>
          <Badge backgroundColor={'#f0cc5c'}>Python</Badge>
          <Badge backgroundColor={'#418cf7'}>OpenCV</Badge>
        </BadgeWrapper>
      </TextWrapper>
      <TextWrapper>
        <FirstRow>Mechatronics, B. Eng.</FirstRow>
        <UniversityName>
          West Pomeranian University of Technology
        </UniversityName>
        <ThesisTitle>
          “Development of an automatic pedestrian detection system”
        </ThesisTitle>
        <BadgeWrapper>
          <Badge backgroundColor={'#4a9d37'}>C#</Badge>
          <Badge backgroundColor={'#6549b7'}>MS Kinect</Badge>
        </BadgeWrapper>
      </TextWrapper>
    </>
    // </Wrapper>
  );
}

export default AboutMe;
