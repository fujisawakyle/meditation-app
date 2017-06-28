const React = require('react');
const Clock = require('./Clock.js');
const Example = require('./Example.js');

class Timer extends React.Component {
    render () {
        return (
            <div className='timerBox'>
                <h3>Timer</h3>
                <Clock />
            </div>
        )
    }
}

module.exports = Timer;