
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import Timer from './components/Timer';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import allReducers from './reducers';
require('./index.css');

// const store = createStore(allReducers);

ReactDOM.render(
  // <Provider store={store}>
    <App
      url='http://localhost:3001'/>
  // </Provider>
  , document.getElementById('app')
);
