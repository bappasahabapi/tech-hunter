import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

import logger from 'redux-logger'
import loggerOne from './middlewares/loggerOne';

export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
  // devTools:false
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(loggerOne)

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch