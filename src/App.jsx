import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';
import { Logo } from './components/Logo/Logo'
import Home from './pages/home';
import { Router } from '@reach/router';

function App() {

  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div className="App">
      <GlobalStyle/>
      <Logo/>
      {
        detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <Router>
            <Home path='/'/>
            <Home path='/pet/:id'/>
          </Router>
      }
    </div>
  )
}

export default App
