import {requestGetProfile} from '../requests/userProfile';
import {call, put} from 'redux-saga/effects';
import {setUserProfile} from '../../slices/userProfile';

export function* handleGetUserProfile() {
  const response = yield call(requestGetProfile);
  yield put(setUserProfile(response));
}
