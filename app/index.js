
const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const Day = require('./components/Day.js')
const Timer = require('./components/Timer.js')

ReactDOM.render(
  <Day />,
  document.getElementById('app')
);