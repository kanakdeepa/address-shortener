import React from 'react';
import './App.scss';
import Header from './Header/Header';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Shorten from './pages/Shorten/Shorten';
import Expand from './pages/Expand/Expand';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Switch>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Route path="/shorten" component={Shorten} />
            <Route path="/expand" component={Expand} />
            <Redirect from="*" to="/shorten" component={Shorten} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
