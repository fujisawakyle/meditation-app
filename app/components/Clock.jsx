const React = require('react');
import Countdown from './Countdown';
const PropTypes = require('prop-types');

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { time: {}, seconds: '' };
        this.timer = 0;

        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(event) {
        this.setState({
            seconds: event.target.value * 60
        });
    }
    secondsToTime(secs){
        console.log(secs);
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

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        console.log('hi');
        if (this.timer == 0) {
        this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
        clearInterval(this.timer);
        }
    }

    render () {
        return (
            <form> 
                <div className='clockBox'>
                    <input 
                        className='clockDisplay'
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                     minutes
                </div>
                state 
                {this.state.seconds}
                <button onClick={this.startTimer}>Start</button>
                m: {this.state.time.m} s: {this.state.time.s}
                
            </form>
        )
    }
}

export default Clock;