import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import Timer from './Timer';
import Journal from './Journal';
import WeekDisplay from './WeekDisplay';

const style = {
    container : {
      display: 'flex',
      flexWrap: 'wrap'
    },
    first : {
      flex: '1'
    },
    second : {
      flex: '1'
    }
}

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateSelected: true,
      today: true,
    }

  }
  chooseDay = (day) => {
    this.setState ({
      dateSelected: true
    })
    let selectedDay = String(day).split(" ").slice(0, 4);
    switch (selectedDay[1]) {
      case 'Jan':
        selectedDay[1] = '0';
        break;
      case 'Feb':
        selectedDay[1] = '1';
        break;
      case 'Mar':
        selectedDay[1] = '2';
        break;
      case 'Apr':
        selectedDay[1] = '3';
        break;
      case 'May':
        selectedDay[1] = '4';
        break;
      case 'Jun':
        selectedDay[1] = '5';
        break;        
      case 'Jul':
        selectedDay[1] = '6';
        break;
      case 'Aug':
        selectedDay[1] = '7';
        break;
      case 'Sep':
        selectedDay[1] = '8';
        break;
      case 'Oct':
        selectedDay[1] = '9';
        break; 
      case 'Nov':
        selectedDay[1] = '10';
        break;
      case 'Dec':
        selectedDay[1] = '11';
        break;         
    }
    selectedDay = `${selectedDay[3]}, ${selectedDay[1]}, ${selectedDay[2]}`
    //make API call for this selectedDay, alert in the meantime
    alert(selectedDay);
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    const todayDate = `${year}, ${month}, ${date}`;
    if (selectedDay === todayDate) {
      console.log('today!')
      this.setState ({
        today: true
      })
    }
    else {
      this.setState ({
        today: false
      })
    }
  }
  render () {
    let meditationUI;
    if (this.state.dateSelected) {
      meditationUI = ( <div style={style.container}>
          <div style={style.first}>
          <div style={style.timer}>
          <Timer today={this.state.today} duration={30} />
          </div>
          <div>
             <WeekDisplay />
          </div>
          </div>
          <div style={style.second}>
          <div style={style.journal}>
          <Journal entry='you rock' />
          </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <DayPicker
          initialMonth={new Date(2017, 6)}
          todayButton="Go to Today"
          selectedDays={[
            new Date(2017, 6, 1),
            new Date(2017, 6, 2),
          ]}
          onDayClick={day => this.chooseDay(day)}
        />
        {meditationUI}
      </div>
  );
  }
  
}

export default Calendar;