import { configureStore, combineReducers } from '@reduxjs/toolkit';

import reactotron from '@services/reactotron';

import globalSlices from './slices';

const reducer = combineReducers({ ...globalSlices });
export type RootState = ReturnType<typeof reducer>;

export default configureStore({
  reducer,
  enhancers: __DEV__ ? [reactotron?.createEnhancer?.() as any] : undefined,
});
