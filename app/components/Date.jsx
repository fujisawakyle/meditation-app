import React, { Component } from 'react';
import Calendar from './Calendar';

class Date extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCal: true
        }

    }
    showCalendar = () => {
        this.setState({
            showCal: !this.state.showCal
        })
    }
    render () {
        let dateDisplay = 'today';
        if (dateDisplay == 'today') {
            dateDisplay = (<button
                onClick={this.showCalendar}>
                Today
            </button>)
        }
        return (
            <div>
                {dateDisplay}
                {this.state.showCal && <Calendar/>} 
            </div>
        )
    }
}

export default Date;