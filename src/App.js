import React, { useEffect, useState, FC,Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Reservation from './Reservation';
import Activities from './Activities';
import Commentaire from './Commentaire';
import Header from './Header';
import './i18n'
import userEvent from '@testing-library/user-event';


const App = () => {

  return (
    <Router>
      <div className="App">
      <Suspense fallback={null}>
      <Header/>
      <Switch>
       
        <Route path="/Reservation">
            <Reservation/>
        </Route>
        <Route path="/Activities">
            <Activities/>
        </Route>
        <Route path="/Commentaire">
            <Commentaire/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
      </Switch>
      </Suspense>
      </div>
    </Router>
  )
}

export default App

