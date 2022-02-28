import {call, put} from 'redux-saga/effects';
import {getUserData} from '../../slices/userProfile';
import {requestSetSpendingLimit} from '../requests/setSpendingLimit';

export function* handleSetSpendingLimit(spendLimit: number) {
  yield call(requestSetSpendingLimit, spendLimit);
  yield put(getUserData());
}
