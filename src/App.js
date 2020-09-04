import React from 'react';
import SvgTest from './styles/SvgTest';
import Posts from './components/post/Posts';
import GlobalStyles from './styles/GlobalStyles';
import MainRouter from './router/MainRouter';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <MainRouter />
      <h1>I'mstagram</h1>
      <SvgTest />
      <Posts />
      <GlobalStyles />
    </div>
  );
}

export default App;
