import React, { Component } from 'react';
import DayPicker from 'react-day-picker';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateSelected: ''
    }

    this.day = this.day.bind(this);
  }
  day() {
    alert(day)
  }
  render () {
    return (
      <div>
        <DayPicker
          initialMonth={new Date(2017, 6)}
          todayButton="Go to Today"
          selectedDays={[
            new Date(2017, 6, 1),
            new Date(2017, 6, 2),
          ]}
          onDayClick={day => alert(day)}
        />
      </div>
  );
  }
  
}

export default Calendar;