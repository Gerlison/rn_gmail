import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import reactotron from '@services/reactotron';

import globalSlices from './slices';
import inboxSlices from '@modules/inbox/store';

const reducer = combineReducers({ ...globalSlices, ...inboxSlices });
export type RootState = ReturnType<typeof reducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default configureStore({
  reducer,
  enhancers: __DEV__ ? [reactotron?.createEnhancer?.() as any] : undefined,
});
