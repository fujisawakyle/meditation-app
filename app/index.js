
const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
<<<<<<< HEAD
import Day from './components/Day'
import Timer from './components/Timer';
=======
const Day = require('./components/Day.js')
const Timer = require('./components/Timer.js')

>>>>>>> 5829ca9a8fdfecb699ac7361ee8be9cccf38c79c

ReactDOM.render(
  <Day />,
  document.getElementById('app')
);