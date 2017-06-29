import React, { Component } from 'react'
import Countdown from './Countdown';
const PropTypes = require('prop-types');

const style = {
    clockDisplay : {
        width: '40px',
        height: '30px',
        fontSize: '1.5em'
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = { seconds: '' };
        this.timer = 0;

        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(event) {
        event.preventDefault();
        this.setState({
            seconds: event.target.value * 60
        });
    }

    getSeconds() {

    }

    render () {
        return (
            <form> 
                <div className='clockBox'>
                    <input 
                        className='clockDisplay'
                        type='number'
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                     minutes
                </div>
                <Countdown seconds={this.state.seconds} getSeconds={this.getSeconds}/>
                {/*m: {this.state.time.m} s: {this.state.time.s}*/}
                
            </form>
        )
    }
}

export default Clock;
