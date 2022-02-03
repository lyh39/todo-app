import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/main.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainReducer } from './reducer'

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// store.subscribe(()=> console.log('===>Store value',store.getState()));
// console.log('initialstate', store.getState().counterReducer.counter);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
