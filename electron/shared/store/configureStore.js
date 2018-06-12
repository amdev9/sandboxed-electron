import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { persistState } from 'redux-devtools';
import { createLogger } from 'redux-logger';
import {
  forwardToMain,
  forwardToRenderer,
  triggerAlias,
  replayActionMain,
  replayActionRenderer
} from 'electron-redux';
import rootReducer from '../../client/reducers';
 
// import DevTools from '../components/DevTools';

const configureStore = (initialState, scope = 'main') => {
  // Redux Configuration
  const middleware = [];
  // const enhancers = [];

  // Thunk Middleware
  middleware.push(thunk);

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }

  if (scope === 'renderer') {
    middleware.push(forwardToMain);
  }

  if (scope === 'main') {
    middleware.push(triggerAlias, forwardToRenderer);
  }
 
  const enhanced = [applyMiddleware(...middleware)];

//   if (/*! process.env.NODE_ENV && */ scope === 'renderer') {
//     enhanced.push(DevTools.instrument());
//     enhanced.push(
//       persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//     );
//   }

  const enhancer = compose(...enhanced);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);

  // if (module.hot) {
  //   module.hot.accept(
  //     '../../client/reducers',
  //     () => store.replaceReducer(require('../../client/reducers')) // eslint-disable-line global-require
  //   );
  // }

  if (scope === 'main') {
    replayActionMain(store);
  } else {
    replayActionRenderer(store);
  }

  return store;
};

export default configureStore;
