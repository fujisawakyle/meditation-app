import React, { Component } from 'react'
import Clock from './Clock';
import Countdown from './Countdown';

const style = {
    timerBox : {
        backgroundColor: '#fdf',
        height: '140px',
        width: '200px',
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: '10px',
        padding: '0px'
    }
}


class Timer extends Component {
    render () {
        return (
            <div style={style.timerBox} className='timerBox'>
                <h3>Timer</h3>
                <Clock />
            </div>
        )
    }
}

export default Timer;