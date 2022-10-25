import './App.css';
import Navbar from './components/navbar/Navbar';
import styled from 'styled-components';
import React, { Suspense } from 'react';
import { pages } from './components/pages/pages';
import OptionsContext from './context/optionsContext';
import Experience from './components/Experience/Experience';
import HtmlComponents from './components/HtmlComponents/HtmlComponents';

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
        <Suspense fallback={null}>
          <Navbar header={'Marcin Otto'} data={pagesInOrder} />
          <Experience />
          <HtmlComponents />
        </Suspense>
      </AppWrapper>
    </OptionsContext.Provider>
  );
}

export default App;
