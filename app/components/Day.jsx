import React, { Component } from 'react';
import Timer from './Timer';
import Journal from './Journal';
import WeekDisplay from './WeekDisplay';
import Calendar from './Calendar'

require('babel-polyfill');

class Day extends Component {
  render() {
    return (
      <div>
        <Calendar />
        <Timer />
        <Journal />
        <WeekDisplay />
      </div>  
    )
  }
}

export default Day;
