import React, { Component } from 'react';
import Timer from './Timer';
import Journal from './Journal';
import WeekDisplay from './WeekDisplay';
import Date from './Date';
import Calendar from './Calendar';
import Login from './Login'

require('babel-polyfill');

//pull data from server and put in store

class App extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>  
    )
  }
}

export default App;
