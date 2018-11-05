import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './header';
import Home from './pages/Home';
import Classroom from './pages/Classroom';
import Lecturer from './pages/Lecturer';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Header/>
        <main style={{marginTop: '64px'}}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/classroom' component={Classroom}/>
            <Route path='/lecturer' component={Lecturer}/>
          </Switch>
        </main>
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
