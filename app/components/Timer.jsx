import React, { Component } from 'react'
import Clock from './Clock';
import Countdown from './Countdown';

const style = {
    timerBox : {
        backgroundColor: '#fdf',
        height: '100px',
        width: '200px',
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: '10px'
    }
}


class Timer extends Component {
    constructor(props) {
        super(props);

        
    }
    render () {
        return (
            <div style={style.timerBox} className='timerBox'>
                <h3>Timer</h3>
                <Clock today={this.props.today} duration={this.props.duration}/>
            </div>
        )
    }
}

export default Timer;