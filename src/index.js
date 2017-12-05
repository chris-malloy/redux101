import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// store comes from redux
import { createStore } from 'redux';
// provider component connects react to redux
import { Provider } from 'react-redux';
// main reducer (rootReducer) will be handed to store
import reducers from './reducers/index';

ReactDOM.render(<App />, document.getElementById('root'));
