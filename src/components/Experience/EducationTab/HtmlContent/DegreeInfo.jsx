import React, { useState } from 'react';
import styled from 'styled-components';
import MoreLessButton from './MoreLessButton';

const TextWrapper = styled.div`
  text-shadow: 0px 0px 5px #00000055;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  flex-wrap: wrap;
  color: white;
  margin-bottom: 2em;
  z-index: 2;
  pointer-events: auto;
`;

const BadgeWrapper = styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: row;
`;

const Badge = styled.div`
  background-color: ${(props) => props.backgroundColor};
  font-size: 1em;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em 0.5em 0.2em 0.5em;
  border-radius: 10000px;
  // box-shadow: 0 0 5px #00000055;
  margin-right: 0.5em;
  color: white;
  text-shadow: none;
`;

function DegreeInfo({ data }) {
  const [details, setDetails] = useState(false);

  const toggleDetails = () => setDetails(!details);

  return (
    <TextWrapper>
      <h2 style={{ fontWeight: 600, fontSize: '2em' }}>{data.title}</h2>
      <h3 style={{ fontWeight: 400 }}>{data.field}</h3>
      <h3 style={{ fontWeight: 400 }}>{data.university}</h3>
      {details && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            marginTop: '1em',
          }}
        >
          <span
            style={{ fontWeight: 400, fontSize: '1.1em', fontStyle: 'italic' }}
          >
            {data.thesis}
          </span>
          <div style={{ textAlign: 'justify', marginTop: '0.5em' }}>
            {data.description}
          </div>
          <BadgeWrapper>
            {data.badges.map((badge) => {
              return (
                <Badge backgroundColor={badge.color} key={badge.text}>
                  {badge.text}
                </Badge>
              );
            })}
          </BadgeWrapper>
        </div>
      )}
      <MoreLessButton onClick={toggleDetails} clicked={details} />
    </TextWrapper>
  );
}

export default DegreeInfo;
