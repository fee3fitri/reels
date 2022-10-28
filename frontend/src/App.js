import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import Splash from './components/Splash';

function App() {
  return (
    <>
      <Navigation />
        <Switch>
        <Route path="/">
            <Splash />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignUpFormPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;