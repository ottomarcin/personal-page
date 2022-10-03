import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import styled from 'styled-components';
import Helper from './Helper';

function HomeHtml(props) {
  return (
    <>
      <BrowserView>
        <Helper />
      </BrowserView>
    </>
  );
}

export default HomeHtml;
