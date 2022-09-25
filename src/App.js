// using wouter instead of react-router-dom, because of context passing issues to r3f, more: https://spectrum.chat/react-three-fiber/general/clicking-meshes-to-load-other-pages-react-router~3d87ef88-b55f-4a95-b3ca-733480bac833
import { Switch, Route } from 'wouter';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Experience/HomeTab/Home';
import Education from './components/Experience/EducationTab/Education';
import AboutMe from './components/pages/AboutMe';
// import Education from './components/pages/Education';
import Contact from './components/pages/Contact';
import styled from 'styled-components';
import React from 'react';
import { pages } from './components/pages/pages';
import OptionsContext from './context/optionsContext';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

function App() {
  // sorting pages in given order
  const pagesInOrder = pages.sort((a, b) => a.index - b.index);
  return (
    // providing pages to navigate
    <OptionsContext.Provider value={{ pages: pages }}>
      <AppWrapper>
        <Navbar header={'Marcin Otto'} data={pagesInOrder} />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/experience'>
            <Home />
          </Route>
          <Route path='/about'>
            <AboutMe />
          </Route>
          <Route path='/education'>
            <Education />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </AppWrapper>
    </OptionsContext.Provider>
  );
}

export default App;
