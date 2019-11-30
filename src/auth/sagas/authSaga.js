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
        if (payload.status === 200) {
            storeLoginDataInStorage(payload);
        }
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

const storeLoginDataInStorage = (payload) => {
    localStorage.setItem('token', JSON.stringify(payload.data.token));
    localStorage.setItem('user', JSON.stringify({
        loggedFrom : 'website',
        id         : 1,
        name       : 1,
        picture    : 'https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-8/27983503_2062718237331521_354627567952728998_o.jpg?_nc_cat=104&_nc_oc=AQnjzpq6ygQriI-gXxEUhfGZ0OCFr-uPbrcqFgkQ0paryR4CbtipnbwWTh-W9bPa4x4&_nc_ht=scontent.fjrs4-1.fna&oh=4711b07f9b1599b45ae8ea4c9e93f027&oe=5E819ACF',
        displayName: 'Display Name',
        firstName  : 'first name',
        lastName   : 'last name',
        email      : 'email@bassoumi.com',
        birthday   : '29-6-1995',
        address    : 'Ramallah - AlBerah'
    }));
};