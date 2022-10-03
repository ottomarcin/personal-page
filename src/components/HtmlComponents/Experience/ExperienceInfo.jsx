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
  margin-top: 0.2em;
  display: flex;
  align-tems: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

function ExperienceInfo({ data }) {
  const [details, setDetails] = useState(false);

  const toggleDetails = () => setDetails(!details);

  return (
    <TextWrapper>
      <h2 style={{ fontWeight: 600, fontSize: '2em' }}>{data.position}</h2>
      <h3 style={{ fontWeight: 400 }}>{data.employer}</h3>
      <h3 style={{ fontWeight: 400 }}>{data.time}</h3>
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

export default ExperienceInfo;
