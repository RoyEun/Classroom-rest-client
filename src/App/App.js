import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './header';
import Home from './pages/Home';
import Classroom from './pages/Classroom';
import Lecturer from './pages/Lecturer';
import Student from './pages/Student';
import Course from './pages/Course';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Header/>
        <main style={{marginTop: '75px'}}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/classroom' component={Classroom}/>
            <Route path='/lecturer' component={Lecturer}/>
            <Route path='/student' component={Student}/>
            <Route path='/course' component={Course}/>
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
