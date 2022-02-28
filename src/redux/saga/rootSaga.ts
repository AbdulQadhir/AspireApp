import {takeLatest} from 'redux-saga/effects';
import {
  getUserData,
  setSpendingLimit,
  unsetSpendingLimit,
} from '../slices/userProfile';
import {handleSetSpendingLimit} from './handlers/setSpendingLimit';
import {handleUnsetSpendingLimit} from './handlers/unsetSpendingLimit';
import {handleGetUserProfile} from './handlers/userProfile';

export function* watcherSaga() {
  yield takeLatest(getUserData.type, handleGetUserProfile);
  yield takeLatest(setSpendingLimit.type, handleSetSpendingLimit);
  yield takeLatest(unsetSpendingLimit.type, handleUnsetSpendingLimit);
}
