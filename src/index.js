import React from 'react';
import {render} from 'react-dom';
import { createStore,compose,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import reducer from './reducers';
import './index.css';
import App from './App';
import ButtonClick from './containers/ButtonFilterContainer';
import PropertiesView from './containers/SnPropertiesViewContainer';
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middlewareList = [thunk, logger]

const enhancer = composeEnhancers(
  applyMiddleware(...middlewareList)
);

const store = createStore(reducer,enhancer)

render(
  <Provider store={store}>
  <Router>
  <div>
  <Switch>
      <Route exact path="/about" component={App} />
      <Route exact path="/click" component={ButtonClick} />
      <Route exact path="/props" component={PropertiesView} />
    </Switch>
  </div>
  </Router>
  </Provider>,
  document.getElementById('root')
)

