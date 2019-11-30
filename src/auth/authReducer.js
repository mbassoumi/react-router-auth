import {LOGIN, LOGIN_API_ERROR, LOGIN_DATA_LOADED, LOGOUT} from './constants/action-types';

const dummyState = {
    token: 'dummy token',
    user : {
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
    }
};

const initialState = {
    token          : localStorage.getItem('token'),
    user           : JSON.parse(localStorage.getItem('user')),
    withServerError: false,
    serverErrors   : undefined,
    loading        : false,
};

export const authReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case LOGIN:
            console.log('LOGIN dispatch');
            return {
                ...state,
                loading: true
            };
        case LOGIN_DATA_LOADED:
            if (payload.status === 400) {
                console.log('LOGIN_DATA_LOADED error dispatch', action);
                return {
                    ...state,
                    withServerError: true,
                    serverErrors   : [payload.data.error],
                    loading: false
                };
            } else if (payload.status === 200) {
                console.log('LOGIN_DATA_LOADED dispatch', action);
                return {
                    ...state,
                    user           : dummyState.user,
                    token          : payload.data.token,
                    withServerError: false,
                    serverErrors   : undefined,
                    loading: false
                };
            }
            return state;
        case LOGIN_API_ERROR:
            console.log('LOGIN_API_ERROR dispatch', action);
            return state;
        case LOGOUT:
            return {};
        default:
            return state;
    }
};
