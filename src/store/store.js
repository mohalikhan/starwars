import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
  devTools:  process.env.NODE_ENV !== 'production',
})