import * as actions from './authActions';

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

const initialState = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            return dummyState;
        case actions.LOGOUT:
            return {};
        default:
            return state;
    }
};
