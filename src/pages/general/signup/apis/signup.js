export const signupApi = (values) => {
    alert(JSON.stringify(values, null, 2));
    const user = {
        loggedFrom : 'website',
        id         : 1,
        picture    : 'https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-8/27983503_2062718237331521_354627567952728998_o.jpg?_nc_cat=104&_nc_oc=AQnjzpq6ygQriI-gXxEUhfGZ0OCFr-uPbrcqFgkQ0paryR4CbtipnbwWTh-W9bPa4x4&_nc_ht=scontent.fjrs4-1.fna&oh=4711b07f9b1599b45ae8ea4c9e93f027&oe=5E819ACF',
        displayName: `${values.firstName} ${values.lastName}`,
        firstName  : values.firstName,
        lastName   : values.lastName,
        email      : values.email,
        birthday   : values.username + ' birthday',
        address    : values.username + ' address'
    };
    const token = `username = ${values.email} and password = ${values.password}`;

    const status = 200;

    const result = {
        user : user,
        token: token
    };

    return {status, result};
};