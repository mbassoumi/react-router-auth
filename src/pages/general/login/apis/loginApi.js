export const loginApi = (username, password) => {

    alert(JSON.stringify({username, password}, null, 2));
    const user = {
        loggedFrom : 'website',
        id         : 1,
        picture    : 'https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-8/27983503_2062718237331521_354627567952728998_o.jpg?_nc_cat=104&_nc_oc=AQnjzpq6ygQriI-gXxEUhfGZ0OCFr-uPbrcqFgkQ0paryR4CbtipnbwWTh-W9bPa4x4&_nc_ht=scontent.fjrs4-1.fna&oh=4711b07f9b1599b45ae8ea4c9e93f027&oe=5E819ACF',
        displayName: username + ' Name',
        firstName  : username + ' first name',
        lastName   : username + ' last name',
        email      : username,
        birthday   : username + ' birthday',
        address    : username + ' address'
    };
    const token = `username = ${username} and password = ${password}`;

    const status = 200;

    const result = {
        user : user,
        token: token
    };

    return {status, result};

// httpRequester.post('login', values)
//              .then(result => {
//                  console.log(result);
//              });

// axios.post("http://127.0.0.1:8080/token", {
//     userName,
//     password
// }).then(result => {
//     if (result.status === 200) {
//         console.log(result);
//         // setAuthTokens(result.data);
//         // setIsLoggedIn(true);
//     } else {
//         setIsError(true);
//     }
// }).catch(e => {
//     setIsError(true);
// });
};
