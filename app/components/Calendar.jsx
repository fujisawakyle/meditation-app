import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import Timer from './Timer';
import Journal from './Journal';
import WeekDisplay from './WeekDisplay';

const style = {
    calendar : {
      textAlign: 'center',
    },
    container : {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 'auto',
    },
    first : {
      display: 'in-line',
      flex: '1',
      minWidth: '200px'
    },
    second : {
      flex: '1'
    }
}

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth();
const date = dateObj.getDate();
const todayDate = `${year},${month},${date}`;
let oneWeekAgo, dateAlter, formattedDate;

const weekArray = [];
for (let i = 0; i < 7; i ++){
  let oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 6 + i);
  let dateAlter = String(oneWeekAgo).split(' ').splice(1,3);
  if (dateAlter[1][0] == 0) {
    dateAlter[1] = dateAlter[1].substr(1);
  }
  dateAlter[0] = translateMonth(dateAlter[0]);
  const formattedDate = `${dateAlter[2]},${dateAlter[0]},${dateAlter[1]}`;
  weekArray[i] = formattedDate
}

function translateMonth (month) {
  switch (month) {
      case 'Jan':
        month = '0';
        break;
      case 'Feb':
        month = '1';
        break;
      case 'Mar':
        month = '2';
        break;
      case 'Apr':
        month = '3';
        break;
      case 'May':
        month = '4';
        break;
      case 'Jun':
        month = '5';
        break;        
      case 'Jul':
        month = '6';
        break;
      case 'Aug':
        month = '7';
        break;
      case 'Sep':
        month = '8';
        break;
      case 'Oct':
        month = '9';
        break; 
      case 'Nov':
        month = '10';
        break;
      case 'Dec':
        month = '11';
        break;         
    }
  return month;
}


class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateSelected: true,
      today: true,
      duration: null,
      entry: '',
      weekDates: weekArray
    }
    
    for (let i = 0; i < weekArray.length ; i++) {
      if(!this.props.userData[weekArray[i]]) {
        weekArray[i] = 0;
      } else {
      weekArray[i] = this.props.userData[weekArray[i]].meditationDuration
      }
    }

  }
  chooseDay = (day) => {
    //need to call reset if the day is changed.
    this.setState ({
      dateSelected: true
      
    })
    let selectedDay = String(day).split(" ").slice(0, 4);
    selectedDay[1] = translateMonth(selectedDay[1]);
    selectedDay = `${selectedDay[3]},${selectedDay[1]},${selectedDay[2]}`
    //make API call for this selectedDay, alert in the meantime
    //alert(selectedDay);
    
    if (selectedDay === todayDate) {
      console.log('today!')
      this.setState ({
        today: true,
      })
    }
    else {
      //hide the timer if another date is pressed.
      

      if(this.props.userData[selectedDay]) {
        this.setState ({
          today: false,
          duration: this.props.userData[selectedDay].meditationDuration,
          entry: this.props.userData[selectedDay].journal
        })
      } else {
        this.setState ({
          today: false,
          duration: 'no data',
          entry: 'no entry'
        })
      }
    }
  }
  render () {
    
    const data = this.props.userData;
    const formattedData = [];
    const daysArray = [];
    for( let key in this.props.userData) {
      if (data.hasOwnProperty(key)) {
        formattedData.push(key.split(','));
      }
    }
    for(let i = 0; i < formattedData.length; i++) {
      daysArray[i] = new Date(formattedData[i][0],formattedData[i][1],formattedData[i][2]);
    }
    let meditationUI;
    if (this.state.dateSelected) {
      meditationUI = ( <div style={style.container}>
          <div style={style.first}>
          <div style={style.timer}>
          <Timer today={this.state.today} duration={this.state.duration} />
          </div>
          <WeekDisplay dates={this.state.weekDates}/>
          </div>
          <div style={style.second}>
          <div style={style.journal}>
          <Journal entry={this.state.entry} />
          </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div style={style.calendar}>
          <DayPicker
            initialMonth={new Date(year, month)}
            todayButton="Go to Today"
            selectedDays={daysArray}
            onDayClick={day => this.chooseDay(day)}
          />
        </div>
        {meditationUI}
      </div>
  );
  }
  
}

export default Calendar;