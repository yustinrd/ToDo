import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/app';
import { getCategories, getTodos} from './actions';

import './index.css';

store.dispatch(getCategories());
store.dispatch(getTodos());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
