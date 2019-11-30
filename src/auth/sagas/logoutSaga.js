import {takeEvery, put, call}                         from 'redux-saga/effects';
import {LOGIN_API_ERROR, LOGOUT, LOGOUT_SUCCESSFULLY} from '../constants/action-types';
import {httpRequester}                                from '../../http-requester';
import swal                                           from 'sweetalert';

export default function* watchAuthSaga() {
    yield takeEvery(LOGOUT, logoutWorker);
}

function* logoutWorker() {
    try {
        // let payload = yield call(logout);
        yield put({type: LOGOUT_SUCCESSFULLY});
        // if (payload.status === 200){
        removeUserDataFromStorage();
        // }
    } catch (e) {
        yield put({type: LOGIN_API_ERROR, payload: e});
    }
}

const logout = () => {
    // return httpRequester.post('https://reqres.in/api/logout');
};

const removeUserDataFromStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    swal({
        title: 'bye bye',
        text : 'see you soon',
        icon : 'info',
    });
};