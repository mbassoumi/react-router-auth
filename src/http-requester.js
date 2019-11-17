import axios     from 'axios';
import swal      from 'sweetalert';
// import {useAuth} from './context/auth';



export const httpRequester = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});


const errorHandler = (error) => {
    const errorStatus = error.response.status
    if(errorStatus === 400){
        //TODO: send refresh token;
        httpRequester.get('majd2')
            .then((result) => {
                console.log(result);
            });
    }
    swal({
        title  : 'error',
        text   : 'nooo',
        icon   : 'error',
        buttons: true,
    }).then(() => {
        console.log('error');
    });
    return error;
};

const successHandler = (response) => {
    swal({
        title  : 'success',
        text   : 'yess',
        icon   : 'success',
        buttons: true,
    }).then(() => {
        console.log('success');
    });
    return response;

};

const requestHandler = (request) => {
    //TODO: get token from local storage
    request.headers['Authorization'] = 'Bearer dummy-token';
    return request;
};

httpRequester.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);

// Add a request interceptor
httpRequester.interceptors.request.use(
    request => requestHandler(request)
);