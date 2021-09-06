import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from  'pages/Home/index';
import './App.css';

function App() {
  return (
      <>
        <BrowserRouter>

            <Switch>
              <Route path="/Home" exact component={Home}/>
              <Route path="/register" />
              <Route path="/login" />
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
