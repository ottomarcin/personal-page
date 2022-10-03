import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'wouter';
import AboutMeHtml from './AboutMe/AboutMeHtml';
import ContactHtml from './Contact/ContactHtml';
import EducationHtml from './Education/EducationHtml';
import ExperienceHtml from './Experience/ExperienceHtml';
import Helper from './Home/Helper';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
function HtmlComponents(props) {
  return (
    <Switch>
      <Route path='/'>
        <Helper />
      </Route>
      {/* <Route path='/experience'>
          <Experience />
        </Route> */}
      <Route path='/about'>
        <AboutMeHtml />
      </Route>
      <Route path='/education'>
        <EducationHtml />
      </Route>
      <Route path='/experience'>
        <ExperienceHtml />
      </Route>
      <Route path='/contact'>
        <ContactHtml />
      </Route>
    </Switch>
  );
}

export default HtmlComponents;
