import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from  'pages/Home/index';
import Navigation from 'components/Navigation/Navigation';
import './App.css';

function App() {
  return (
      <>
        <BrowserRouter>
            <Navigation/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" exact component={} />
              <Route path="/login" exact component={} />
              <Route component={} />
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
