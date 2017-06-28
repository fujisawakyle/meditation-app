
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
import Day from './components/Day'
import Timer from './components/Timer';

ReactDOM.render(
  <Day />,
  document.getElementById('app')
);