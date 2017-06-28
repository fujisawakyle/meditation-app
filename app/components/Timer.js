import React, { Component } from 'react'
import Clock from './Clock';
import Countdown from './Countdown';


class Timer extends Component {
    render () {
        return (
            <div className='timerBox'>
                <h3>Timer</h3>
                <Clock />
            </div>
        )
    }
}

export default Timer;