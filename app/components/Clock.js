const React = require('react');
const PropTypes = require('prop-types');
const Countdown = require('./Countdown.js');

const style = {
    clockDisplay : {
        width: '40px',
        height: '30px',
        fontSize: '1.5em'
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { seconds: '' };
        this.timer = 0;

        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(event) {
        this.setState({
            seconds: event.target.value * 60
        });
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
                <Countdown seconds={this.state.seconds}/>
            </form>
        )
    }
}

Clock.propTypes = {
    seconds: PropTypes.number.isRequired,

}
module.exports = Clock;