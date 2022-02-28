import {call, put} from 'redux-saga/effects';
import {getUserData} from '../../slices/userProfile';
import {requestUnsetSpendingLimit} from '../requests/unsetSpendingLimit';

export function* handleUnsetSpendingLimit() {
  yield call(requestUnsetSpendingLimit);
  yield put(getUserData());
}
