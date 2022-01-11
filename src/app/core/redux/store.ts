import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reductores';
import thunk from 'redux-thunk';

declare const window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (store: any) => (next: any) => (action: any) => {
  console.log('@---STATE---:', store.getState());
  next(action);
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
