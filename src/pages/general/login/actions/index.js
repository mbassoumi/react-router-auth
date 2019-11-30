import {LOGIN} from '../../../../auth/constants/action-types';

export const loginAction = (username, password) => {
    return {
        type   : LOGIN,
        payload: {
            username: username,
            password: password,
        }
    };
};