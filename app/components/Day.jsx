import React, { Component } from 'react';
import Timer from './Timer';
import Journal from './Journal';
import WeekDisplay from './WeekDisplay';
import Date from './Date';
import Calendar from './Calendar'

require('babel-polyfill');

class Day extends Component {
  render() {
    return (
      <div>
        <Calendar />
      </div>  
    )
  }
}

export default Day;
