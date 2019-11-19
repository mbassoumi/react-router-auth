export const facebookLoginApi = (response) => {
    const user = {
        loggedFrom : 'facebook',
        id         : response.id,
        displayName: response.name,
        email      : response.email,
        birthday   : response.name,
        address    : response.name,
        picture    : response.picture.data.url,
        firstName  : response.first_name,
        lastName   : response.last_name,
    };

    const token = response.accessToken;

    const status = 200;

    const result = {
        token: token,
        user : user
    };
    return {status, result};
};


export const facebookLoginFailureApi = (response) => {
    return {status: 400, result: response};
};