import React, { Component } from 'react';
import ShowRemaining from './ShowRemaining'

class Countdown extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = { 
      time: {}, 
      seconds: props.seconds, 
      logTime: props.logTime,
      showTime: false 
    };

    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  // This is what was missing to update this component when the props.seconds changes

  componentWillReceiveProps(nextProps) {
    if (nextProps.seconds !== this.props.seconds) {
      this.setState({ 
        seconds: nextProps.seconds,
        logTime: nextProps.logTime 
      })
    }
  }

  componentDidMount() {
    console.log(this.props)
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer(e) {
    this.setState({
      showTime: !this.state.showTime
    })
    e.preventDefault();
    this.props.getSeconds();
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
    
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    let log = this.state.logTime - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      logTime: log,
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer);
    }

    //log time every 1 minute
    if (log === 0) {
      alert('logged a minute');
      //add 1 min to today's time.
      this.setState({
        logTime: 60
      })
      
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.startTimer}>Start</button>
        {this.state.showTime && 
          <ShowRemaining 
            hours={this.state.time.h} 
            minutes={this.state.time.m} 
            seconds={this.state.time.s} 
            logTime={this.state.logTime}
          />}
      </div>
    );
  }
}

export default Countdown;