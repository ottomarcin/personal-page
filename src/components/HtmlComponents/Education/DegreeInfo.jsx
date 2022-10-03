import React, { useState } from 'react';
import styled from 'styled-components';
import Badge from '../Common/Badge';
import MoreLessButton from '../Common/MoreLessButton';

const TextWrapper = styled.div`
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

function DegreeInfo({ data }) {
  const [details, setDetails] = useState(false);

  const toggleDetails = () => setDetails(!details);

  return (
    <TextWrapper>
      <h2 style={{ fontWeight: 600, fontSize: '2em' }}>{data.title}</h2>
      {data.field && <h3 style={{ fontWeight: 400 }}>{data.field}</h3>}
      {data.university && (
        <h3 style={{ fontWeight: 400 }}>{data.university}</h3>
      )}
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
          {data.thesis && (
            <span
              style={{
                fontWeight: 400,
                fontSize: '1.1em',
                fontStyle: 'italic',
              }}
            >
              {data.thesis}
            </span>
          )}
          <div style={{ textAlign: 'justify', marginTop: '0.5em' }}>
            {data.description}
          </div>
          <BadgeWrapper>
            {data.badges &&
              data.badges.map((badge) => {
                return (
                  <Badge color={badge.color} key={badge.text}>
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
