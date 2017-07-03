import React, { Component } from 'react';
import ShowTime from './ShowTime';
import Countdown from './Countdown';

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

        this.state = { 
            showInput: true, 
            seconds: 0
        };
        this.timer = 0;
    };
    
    /*handleChange(event) {
        event.preventDefault();
        this.setState({
            seconds: event.target.value * 60
        });
    
    }*/

    updater(dataToUpdate) {
        this.setState({
            seconds: dataToUpdate
        })
    }

    render () {
        return (
            <div> 
                {/*<div className='clockBox'>
                    <input 
                        className='clockDisplay'
                        type='number'
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                        minutes
                </div>*/}
                {this.state.showInput && <ShowTime callback={this.updater} />}
                <Countdown input={this.state.showInput} seconds={this.state.seconds} logTime={60} />
                
            </div>
        )
    }
}

export default Clock;
