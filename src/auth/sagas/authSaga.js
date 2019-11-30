import {takeEvery, put, call}                      from 'redux-saga/effects';
import {LOGIN, LOGIN_API_ERROR, LOGIN_DATA_LOADED} from '../constants/action-types';
import {httpRequester}                             from '../../http-requester';

export default function* watchAuthSaga() {
    yield takeEvery(LOGIN, loginWorker);

}

function* loginWorker(action) {
    try {
        let payload = yield call(login, {username: action.payload.username, password: action.payload.password});
        yield put({type: LOGIN_DATA_LOADED, payload});
    } catch (e) {
        yield put({type: LOGIN_API_ERROR, payload: e});
    }
}

const login = ({username, password}) => {
    //https://reqres.in/api/login
    // request body
    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }
    //
    // response body
    // {
    //     "token": "QpwL5tke4Pnpja7X4"
    // }

    return httpRequester.post('https://reqres.in/api/login', {
        email   : username,
        password: password
    });
};