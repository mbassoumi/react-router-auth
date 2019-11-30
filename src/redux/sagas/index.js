import {all}      from 'redux-saga/effects';
import authSaga   from '../../auth/sagas/authSaga';
import logoutSaga from '../../auth/sagas/logoutSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        logoutSaga()
    ]);
}