import {all}    from 'redux-saga/effects';
import authSaga from '../../auth/sagas/authSaga';

export default function* rootSaga() {
    yield all([
        authSaga()
    ]);
}