import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './header';
import Home from './pages/Home';
import Classroom from './pages/Classroom';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/classroom' component={Classroom}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
