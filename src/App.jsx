import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';
import { Logo } from './components/Logo/Logo'
import Home from './pages/Home';
import { Router } from '@reach/router';
import Detail from './pages/Detail';
import Favs from './pages/Favs';
import User from './pages/User';
import NotRegisteredUser from './pages/NotRegisteredUser';
import Navbar from './components/Navbar/Navbar';
import Context from './context';


function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Logo/>

      <Router>
        <Home path='/'/>
        <Home path='/pet/:id'/>
        <Detail path='/detail/:detailId' />
      </Router>

        <Context.Consumer  >
          {
            ({ isAuth }) =>
              isAuth
              ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
              : <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
          }
        </Context.Consumer>
        <Navbar/>
    </div>
  )
}

export default App
