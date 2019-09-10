import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './components/App';
import reducer from './reducers';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { fetchProducts } from './actions';

const loggerMiddleware = createLogger();

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware),
);

store.dispatch(fetchProducts);

ReactDOM.render(
	<Provider store={store}>
    	<App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
