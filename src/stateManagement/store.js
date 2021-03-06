import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(logger, thunk)
    )
  );

  export default store;