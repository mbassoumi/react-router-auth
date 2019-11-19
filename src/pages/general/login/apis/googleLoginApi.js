export const googleLoginApi = (response) => {
    const profileObject = response.profileObj;
    if (profileObject !== undefined) {
        const user = {
            loggedFrom : 'google',
            id         : profileObject.googleId,
            displayName: profileObject.name,
            email      : profileObject.email,
            birthday   : profileObject.name,
            address    : profileObject.name,
            picture    : profileObject.imageUrl,
            firstName  : profileObject.givenName,
            lastName   : profileObject.familyName,
        };

        const token = response.accessToken;

        const result = {
            user,
            token
        };
        const status = 200;

        return {status, result};
    }
};

export const googleLoginFailureApi = (response) => {
    return {status: 400, result: response};

};