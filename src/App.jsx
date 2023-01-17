import React, { useContext, Suspense } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo/Logo'
import Home from './pages/Home';
import { Router } from '@reach/router';
import Detail from './pages/Detail';
// import Favs from './pages/Favs';
import User from './pages/User';
import NotRegisteredUser from './pages/NotRegisteredUser';
import Navbar from './components/Navbar/Navbar';
import Context from './context';
import { Redirect } from '@reach/router';
import NotFound from './pages/NotFound';

const Favs = React.lazy(() => import('./pages/Favs'))

function App() {

  const isAuth = useContext(Context);

  return (
    <Suspense fallback={<div></div>} className="App">
      <GlobalStyle/>
      <Logo/>
      <Router>
        <NotFound default/>
        <Home path='/'/>
        <Home path='/pet/:id'/>
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login'/>}
        {!isAuth && <Redirect from='/favs' to='/login'/>}
        {!isAuth && <Redirect from='/user' to='/login'/>}
        {isAuth && <Redirect from='/login' to='/'/>}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <Navbar/>
    </Suspense>
  )
}

export default App
