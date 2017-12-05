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

// make store
const theStore = createStore(reducers);

// provider is component that makes connect work
// it takes a prop of store
// the redux store was made by createStore and giving it the rooReducer
ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>
    , document.getElementById('root')
);
