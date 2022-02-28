import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import UserProfile from '../interfaces/userProfile';
import {watcherSaga} from '../redux/saga/rootSaga';
import rootReducer from '../redux/slices';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export interface RootState {
  userProfile: UserProfile;
}

export default store;
