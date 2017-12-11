import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') middlewares.push(logger);

export default (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);
