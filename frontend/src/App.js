import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import WomenCollections from './components/WomenCollections';
import MenCollections from './components/MenCollections';


function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/collections/womens">
            <WomenCollections />
          </Route>
          <Route path="/collections/mens">
            <MenCollections />
          </Route>
        </Switch>
    </>
  );
}

export default App;