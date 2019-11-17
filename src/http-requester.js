import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {useAuth} from './context/auth';


const {authTokens} = useAuth();

export const httpRequester = axios.create({
    'baseURL': process.env.REACT_APP_BACKEND_BASE_URL,
    'headers': {
        'X-Requested-With': 'XMLHttpRequest'
    }
});


const isHandlerEnabled = (config = {}) => !(config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled),

    errorHandler = (error) => {

        const includedErrors = [
                401,
                403
            ],
            errorStatus = error.response.status;
        if (isHandlerEnabled(error.config)) {

            // Handle errors
            if (includedErrors.includes(errorStatus)) {

                swal({
                    'title': error.response.data.message,
                    'text': 'You will be redirected to IGPA to Login',
                    'icon': 'error',
                    'buttons': false,
                    'timer': 5000
                }).then((result) => {

                    window.location.replace(`${process.env.VUE_APP_IGPA_BASE_URL}`);

                });

            }

        }
        return Promise.reject({...error});

    },

    successHandler = (response) => {

        if (isHandlerEnabled(response.config)) {
        // Handle responses
        }
        return response;

    },

    requestHandler = (request) => {

        if (isHandlerEnabled(request)) {

            /*
             * Modify request here
             * const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUwNDg3OTIwN2Q0NmFjZjhlODZhNDY3MjBiM2NjNTVlNTBkMTE2OWI1MTBmNmZkZDk5N2E1ZmEyMGI0ZjBkMmU5NDc0MWY5NTE4Yjk2YzQ2In0.eyJhdWQiOiIxMyIsImp0aSI6IjUwNDg3OTIwN2Q0NmFjZjhlODZhNDY3MjBiM2NjNTVlNTBkMTE2OWI1MTBmNmZkZDk5N2E1ZmEyMGI0ZjBkMmU5NDc0MWY5NTE4Yjk2YzQ2IiwiaWF0IjoxNTY5ODU4NDMzLCJuYmYiOjE1Njk4NTg0MzMsImV4cCI6MTYwMTQ4MDgzMywic3ViIjoiMSIsInNjb3BlcyI6W119.UvjkxOMtClPZIMqQ2E1gjOxGg_ADj4XYB4N8QpC9-0AOPhwi67a7mtslDpdZ1w0QQrhE8fy68X8TAANVlSHRQIXDnX7SREzId1UwUkcuG3ybsgSufC1iBQLpC3xi3wdCsW1__mGWmN93-kVvu5FZdoDnbijRHwAhRoil02dLbXnweSua_qr4YNGoVGES3mj16tCfh2Y5SMgYCrctPf_lPA_mn-Fmy-1DnZGQUKs8yBXd3-kCDXoyQpcKp-HSfKZF1XHB7KEaUqYXYdizwxV2FzoYegQF2gjkt0iyXDqB4xlos6WcEAk3e0FLvMU9LBHZVLbliX5GweFa2pNfd2T2LZNAZxj-fvkmX43woxGof5tM1tX6d5Ev2HjifV24rI-KM568WFbnIFAfkiCFX8bNnxjwevA-fkWzfXKj2lPaLMM0Ab3UCbUtlXge4uqdp_L6y-IHLEql_dS8O3yaOKLIDL6X80KSE1ruCuflWvM_8Ocdfgz8Al5FZkCD2oSmVAWMa7IFuwClWN761mOuyf441Xs_CkTSLhzjbl4Qkku1i8vAuvbqz8k2u1BRkUIuF2t53JgemzGcU9v-91scM6ArLVVWGK-9vq1b0zPVbLjFgqhqEdW7pcDD1cm2RZ4VqmOkV_7OWspIZY6UK4eOoa8jYHQE4S3zy_CehyldSO8bqhU';//window.localStorage.getItem("access-token");
             */
            const accessToken = window.localStorage.getItem('access-token');
            if (accessToken && String(accessToken).trim() !== '') {

                request.headers.Authorization = `Bearer ${accessToken}`;

            }

        }
        return request;

    };

httpRequester.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
);

// Add a request interceptor
httpRequester.interceptors.request.use((request) => requestHandler(request));
