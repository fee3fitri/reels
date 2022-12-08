import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import WomenCollections from './components/Collections/WomenCollections';
import MenCollections from './components/Collections/MenCollections';
import ProductItem from './components/ProductItem';
import SearchResults from './components/Search/SearchResults';

const App = () => {
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
        <Route exact path="/products/:productId">
          <ProductItem />
        </Route>
        <Route exact path="/search-results">
          <SearchResults />
        </Route>
      </Switch>
    </>
  );
}

export default App;