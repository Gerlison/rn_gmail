import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  StoreEnhancer,
} from 'redux';
import thunk from 'redux-thunk';

import reactotron from '@services/reactotron';

import globalDucks from './ducks';

const reducers = combineReducers({ ...globalDucks });
export type RootState = ReturnType<typeof reducers>;

const middlewares: StoreEnhancer<{}, RootState> = compose(
  applyMiddleware(thunk),
  __DEV__ && reactotron?.createEnhancer
    ? reactotron?.createEnhancer()
    : () => {},
);

export default createStore(reducers, middlewares);
