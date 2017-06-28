
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var Day = require('./components/Day.js')
var Timer = require('./components/Timer.js')

ReactDOM.render(
  <Day />,
  document.getElementById('app')
);